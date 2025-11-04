// =============================================
// 🚀 SMARTECHN - ENHANCED JAVASCRIPT
// =============================================

(function() {
    'use strict';

    // =============================================
    // 🛠️ UTILITY FUNCTIONS
    // =============================================

    /**
     * Debounce function to limit how often a function can be called
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Safe query selector with error handling
     */
    function $(selector, parent = document) {
        try {
            return parent.querySelector(selector);
        } catch (error) {
            console.warn('Query selector error:', error);
            return null;
        }
    }

    function $$(selector, parent = document) {
        try {
            return Array.from(parent.querySelectorAll(selector));
        } catch (error) {
            console.warn('Query selector all error:', error);
            return [];
        }
    }

    // =============================================
    // 🔢 COUNTER ANIMATION SYSTEM
    // =============================================

    /**
     * Universal counter animation function
     */
    function animateCounter(element, duration = 2000) {
        const target = parseInt(element.getAttribute('data-count')) || 0;
        const suffix = element.getAttribute('data-suffix') || '';
        let start = 0;
        const increment = target / (duration / 16);

        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.ceil(start) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + suffix;
            }
        }

        updateCounter();
    }

    /**
     * Initialize counter animations with Intersection Observer
     */
    function initCounterAnimation(selector, options = {}) {
        const counters = $$(selector);
        if (!counters.length) return;

        const observerOptions = {
            threshold: options.threshold || 0.5,
            rootMargin: options.rootMargin || '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    counter.textContent = '0';
                    animateCounter(counter, options.duration);
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);

        counters.forEach(counter => observer.observe(counter));
    }

    // =============================================
    // 🌀 CIRCULAR CAROUSEL SYSTEM
    // =============================================

    class CircularCarousel {
        constructor(containerSelector) {
            this.container = $(containerSelector);
            if (!this.container) return;

            this.items = $$('.carousel-item', this.container);
            this.indicators = $$('.indicator', this.container);
            this.prevBtn = $('.carousel-prev', this.container);
            this.nextBtn = $('.carousel-next', this.container);
            
            this.currentIndex = 0;
            this.autoRotateInterval = null;
            this.isAutoRotating = true;

            this.init();
        }

        init() {
            if (!this.items.length) return;

            // Event listeners
            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', () => this.next());
            }

            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', () => this.prev());
            }

            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => this.goTo(index));
            });

            this.items.forEach((item, index) => {
                item.addEventListener('click', () => this.goTo(index));
            });

            // Auto-rotation
            this.startAutoRotate();

            // Pause on hover
            this.container.addEventListener('mouseenter', () => this.stopAutoRotate());
            this.container.addEventListener('mouseleave', () => this.startAutoRotate());

            // Initialize first slide
            this.updateCarousel(0);
        }

        updateCarousel(index) {
            // Remove active classes
            this.items.forEach(item => item.classList.remove('active'));
            this.indicators.forEach(indicator => indicator.classList.remove('active'));

            // Add active classes
            this.items[index].classList.add('active');
            if (this.indicators[index]) {
                this.indicators[index].classList.add('active');
            }

            this.currentIndex = index;
        }

        next() {
            const nextIndex = (this.currentIndex + 1) % this.items.length;
            this.updateCarousel(nextIndex);
            this.resetAutoRotate();
        }

        prev() {
            const prevIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
            this.updateCarousel(prevIndex);
            this.resetAutoRotate();
        }

        goTo(index) {
            this.updateCarousel(index);
            this.resetAutoRotate();
        }

        startAutoRotate() {
            if (this.isAutoRotating) return;
            this.isAutoRotating = true;
            this.autoRotateInterval = setInterval(() => this.next(), 3000);
        }

        stopAutoRotate() {
            this.isAutoRotating = false;
            clearInterval(this.autoRotateInterval);
        }

        resetAutoRotate() {
            this.stopAutoRotate();
            this.startAutoRotate();
        }
    }

    // =============================================
    // 🚀 LOADING SYSTEM
    // =============================================

    function createLoadingScreen() {
        const loadingScreen = document.createElement('div');
        loadingScreen.id = 'loading';
        loadingScreen.className = 'loading';
        loadingScreen.innerHTML = `
            <div class="loader-container">
                <div class="tech-loader">
                    <div class="tech-loader-inner"></div>
                </div>
                <div class="loading-text">INITIALIZING SMARTECHN SYSTEMS</div>
                <div class="loading-dots">
                    <div class="loading-dot"></div>
                    <div class="loading-dot"></div>
                    <div class="loading-dot"></div>
                </div>
                <div class="loading-progress">
                    <div class="loading-progress-bar"></div>
                </div>
            </div>
        `;
        
        document.body.prepend(loadingScreen);

        // Remove loading screen after page loads
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loading = $('#loading');
                if (loading) {
                    loading.classList.add('hidden');
                    setTimeout(() => loading.remove(), 800);
                }
            }, 1500);
        });
    }

    // =============================================
    // 📧 NOTIFICATION SYSTEM
    // =============================================

    function showNotification(message, type = 'info') {
        // Remove existing notifications
        $$('.notification').forEach(notif => notif.remove());

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
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // =============================================
    // 🎯 SCROLL & NAVIGATION SYSTEM
    // =============================================

    function initScrollSystem() {
        const header = $('#header');
        const backToTopBtn = $('#backToTop');

        if (!header) return;

        const handleScroll = debounce(() => {
            const currentScroll = window.pageYOffset;
            
            // Header scroll effect
            header.classList.toggle('scrolled', currentScroll > 50);
            
            // Back to top button
            if (backToTopBtn) {
                backToTopBtn.classList.toggle('visible', currentScroll > 500);
            }
        }, 10);

        window.addEventListener('scroll', handleScroll);

        // Back to top functionality
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    function initMobileMenu() {
        const burgerMenu = $('.burger-menu');
        const navMenu = $('.nav-menu');
        const body = document.body;

        if (!burgerMenu || !navMenu) return;

        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on links
        $$('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                
                if (targetId && targetId.startsWith('#') && targetId !== '#home') {
                    e.preventDefault();
                    
                    const targetElement = $(targetId);
                    if (targetElement) {
                        // Close mobile menu
                        burgerMenu.classList.remove('active');
                        navMenu.classList.remove('active');
                        body.style.overflow = '';

                        // Smooth scroll
                        const headerHeight = $('#header').offsetHeight;
                        const targetPosition = targetElement.offsetTop - headerHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                } else if (targetId === '#home') {
                    // Just close menu for home link
                    burgerMenu.classList.remove('active');
                    navMenu.classList.remove('active');
                    body.style.overflow = '';
                }
            });
        });
    }

    // =============================================
    // 📝 FORM HANDLING SYSTEM
    // =============================================

    function initContactForm() {
        const contactForm = $('#contactForm');
        if (!contactForm) return;

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Add loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call (replace with actual form submission)
            setTimeout(() => {
                // Success animation
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                
                // Reset form
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    
                    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                }, 2000);
            }, 2000);
        });
    }

    // =============================================
    // ❓ FAQ SYSTEM
    // =============================================

    function initFAQ() {
        const faqItems = $$('.faq-item');
        faqItems.forEach(item => {
            const question = $('.faq-question', item);
            if (!question) return;

            question.addEventListener('click', () => {
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });
    }

    // =============================================
    // 📱 MOBILE OPTIMIZATION
    // =============================================

    function initMobileOptimization() {
        // Prevent zoom on input focus for iOS
        document.addEventListener('touchstart', () => {}, { passive: true });
        
        // Fix viewport height for mobile
        function setVH() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        
        setVH();
        window.addEventListener('resize', debounce(setVH, 100));
        window.addEventListener('orientationchange', setVH);
    }

    // =============================================
    // 🎮 EASTER EGGS & EFFECTS
    // =============================================

    function initEasterEggs() {
        document.addEventListener('keypress', (e) => {
            if (e.key === 's') createSnowEffect();
            if (e.key === 't') createTechEffect();
        });
    }

    function createSnowEffect() {
        const snowContainer = document.createElement('div');
        snowContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 10000;
        `;
        
        // Add fall animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);
        
        for (let i = 0; i < 50; i++) {
            const snowflake = document.createElement('div');
            snowflake.style.cssText = `
                position: absolute;
                top: -10px;
                left: ${Math.random() * 100}%;
                width: 8px;
                height: 8px;
                background: white;
                border-radius: 50%;
                opacity: ${Math.random() * 0.8 + 0.2};
                animation: fall linear infinite;
                animation-duration: ${Math.random() * 5 + 5}s;
                animation-delay: ${Math.random() * 5}s;
            `;
            
            snowContainer.appendChild(snowflake);
        }
        
        document.body.appendChild(snowContainer);
        
        // Remove after 10 seconds
        setTimeout(() => {
            snowContainer.remove();
            style.remove();
        }, 10000);
    }

    function createTechEffect() {
        const techContainer = document.createElement('div');
        techContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 10000;
            background: radial-gradient(circle, transparent 50%, rgba(37, 99, 235, 0.1) 100%);
            animation: techPulse 2s ease-in-out;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes techPulse {
                0% { opacity: 0; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.1); }
                100% { opacity: 0; transform: scale(1.2); }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(techContainer);
        
        setTimeout(() => {
            techContainer.remove();
            style.remove();
        }, 2000);
    }

    // =============================================
    // 🎉 MAIN INITIALIZATION
    // =============================================

    function init() {
        try {
            // Create loading screen
            createLoadingScreen();

            // Initialize AOS animations
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 1000,
                    once: true,
                    easing: 'ease-out-cubic'
                });
            }

            // Initialize systems
            initScrollSystem();
            initMobileMenu();
            initMobileOptimization();
            initContactForm();
            initFAQ();
            initEasterEggs();

            // Initialize counter animations
            initCounterAnimation('.stat-number');
            initCounterAnimation('.story-stat .stat-number', { duration: 1500 });
            initCounterAnimation('.testimonials-stats .stat-number', { duration: 1500 });

            // Initialize circular carousel
            new CircularCarousel('.circular-carousel-container');

            // Initialize particles if available
            if (typeof particlesJS !== 'undefined' && $('#particles-js')) {
                particlesJS('particles-js', {
                    particles: {
                        number: { value: 80, density: { enable: true, value_area: 800 } },
                        color: { value: "#ffffff" },
                        shape: { type: "circle" },
                        opacity: { 
                            value: 0.3, 
                            random: true,
                            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
                        },
                        size: { 
                            value: 3, 
                            random: true,
                            anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.2,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: "none",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: false
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: { enable: true, mode: "grab" },
                            onclick: { enable: true, mode: "push" },
                            resize: true
                        }
                    },
                    retina_detect: true
                });
            }

        } catch (error) {
            console.error('Initialization error:', error);
        }
    }

    // =============================================
    // 🚀 START APPLICATION
    // =============================================

    document.addEventListener('DOMContentLoaded', init);

    // =============================================
    // 🌟 CONSOLE WELCOME MESSAGE
    // =============================================

    console.log(`%c
🚀 WELCOME TO SMARTECHN! 🚀

%cReady to transform your digital world? 
We're excited to have you here!

✨ Features you're enjoying:
• Smooth animations and interactions
• Epic tech loading experience  
• Professional responsive design
• Cutting-edge digital solutions
• Modern circular carousel
• Beautiful artistic effects

Press 's' for snow or 't' for tech effects! 🎮

`, 'font-size: 18px; font-weight: bold; color: #2563eb;', 'font-size: 14px; color: #64748b;');

})();