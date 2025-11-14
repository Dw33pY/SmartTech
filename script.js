// =============================================
// 🚀 SMARTECHN - COMPLETELY FIXED JAVASCRIPT
// =============================================

// Store which counters have been animated
let animatedCounters = new Set();

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Smartechn Scripts Loaded');
    
    // =============================================
    // 🔢 COUNTER FIX - NO RESET + PERCENTAGE
    // =============================================
    
    function initCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count')) || 0;
            const suffix = counter.getAttribute('data-suffix') || '';
            const counterId = `${target}-${suffix}`;
            
            // If already animated, keep the final value
            if (animatedCounters.has(counterId)) {
                counter.textContent = target + suffix;
                return;
            }
            
            // Only animate if visible and not animated
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !animatedCounters.has(counterId)) {
                        animatedCounters.add(counterId);
                        
                        const duration = 2000;
                        let start = 0;
                        const increment = target / (duration / 16);
                        
                        function updateCounter() {
                            start += increment;
                            if (start < target) {
                                counter.textContent = Math.ceil(start) + suffix;
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.textContent = target + suffix;
                            }
                        }
                        updateCounter();
                    }
                });
            }, { threshold: 0.3 });
            
            observer.observe(counter);
        });
    }
    
    // Initialize counters immediately
    initCounters();
    
    // =============================================
    // 📧 FORM FIX - WORKS ON INDEX PAGE
    // =============================================
    
    function initForms() {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            console.log('📧 Contact form found, attaching handler...');
            
            // Add this DEBUG function
            function debugFormData(form) {
                const formData = new FormData(form);
                console.log('📧 Form Data being sent:');
                for (let [key, value] of formData.entries()) {
                    console.log(`  ${key}: ${value}`);
                }
            }
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                console.log('📧 Form submitted!');
                
                // DEBUG: Show what data is being sent - ADD THIS LINE
                debugFormData(this);
                
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                // Show loading state
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                
                // Get form data
                const formData = new FormData(this);
                
                // Submit to Formspree
                fetch(this.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        // SUCCESS
                        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
                        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                        
                        // Show success message
                        showNotification('Message sent successfully! We will contact you soon.', 'success');
                        
                        // Reset form after 3 seconds
                        setTimeout(() => {
                            this.reset();
                            submitBtn.innerHTML = originalText;
                            submitBtn.disabled = false;
                            submitBtn.style.background = '';
                        }, 3000);
                    } else {
                        throw new Error('Form submission failed');
                    }
                })
                .catch(error => {
                    console.error('Form error:', error);
                    // ERROR
                    submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Failed to Send';
                    submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
                    
                    showNotification('Failed to send message. Please try again or call us directly.', 'error');
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                    }, 3000);
                });
            });
        } else {
            console.log('❌ Contact form not found on this page');
        }
    }
    
    // Initialize forms
    initForms();
    
    // =============================================
    // 🔔 NOTIFICATION SYSTEM
    // =============================================
    
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        document.querySelectorAll('.notification').forEach(notif => notif.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check' : 'info'}-circle"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    }
    
    // =============================================
    // 🌀 CAROUSEL FIX
    // =============================================
    
    function initCarousel() {
        const container = document.querySelector('.circular-carousel-container');
        if (!container) return;
        
        const items = container.querySelectorAll('.carousel-item');
        const indicators = container.querySelectorAll('.indicator');
        const prevBtn = container.querySelector('.carousel-prev');
        const nextBtn = container.querySelector('.carousel-next');
        
        let currentIndex = 0;
        
        function updateCarousel(index) {
            // Remove active classes
            items.forEach(item => item.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));
            
            // Add active classes
            items[index].classList.add('active');
            indicators[index].classList.add('active');
            
            currentIndex = index;
        }
        
        // Event listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const nextIndex = (currentIndex + 1) % items.length;
                updateCarousel(nextIndex);
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                const prevIndex = (currentIndex - 1 + items.length) % items.length;
                updateCarousel(prevIndex);
            });
        }
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => updateCarousel(index));
        });
        
        items.forEach((item, index) => {
            item.addEventListener('click', () => updateCarousel(index));
        });
        
        // Initialize first item
        updateCarousel(0);
    }
    
    initCarousel();
    
    // =============================================
    // 📱 MOBILE MENU FIX
    // =============================================
    
    function initMobileMenu() {
        const burgerMenu = document.querySelector('.burger-menu');
        const navMenu = document.querySelector('.nav-menu');
        
        if (burgerMenu && navMenu) {
            burgerMenu.addEventListener('click', () => {
                burgerMenu.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
            });
            
            // Close menu when clicking on links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    burgerMenu.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }
    }
    
    initMobileMenu();
    
    // =============================================
    // ⬆️ BACK TO TOP FIX
    // =============================================
    
    function initBackToTop() {
        const backToTopBtn = document.getElementById('backToTop');
        
        if (backToTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 500) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });
            
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
    
    initBackToTop();
    
    // =============================================
    // 🎯 SCROLL HEADER FIX
    // =============================================
    
    function initScrollHeader() {
        const header = document.getElementById('header');
        
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }
    }
    
    initScrollHeader();
    
    // =============================================
    // 🎭 AOS INITIALIZATION
    // =============================================
    
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic'
        });
    }
    
    console.log('✅ All Smartechn scripts initialized successfully');
});

// Simple loading screen removal
window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    if (loading) {
        setTimeout(() => {
            loading.style.opacity = '0';
            setTimeout(() => {
                if (loading.parentNode) {
                    loading.remove();
                }
            }, 500);
        }, 1000);
    }
});