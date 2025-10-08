// 🚀 EPIC Tech Loading Screen
document.addEventListener('DOMContentLoaded', function() {
    // Create epic loading screen
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

    // Remove loading screen after everything loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            const loading = document.getElementById('loading');
            if (loading) {
                loading.classList.add('hidden');
                setTimeout(() => loading.remove(), 800);
            }
        }, 1500);
    });

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic'
    });
    
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Back to top button visibility - Use existing button from HTML
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            if (currentScroll > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });
    
    // Mobile menu toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
            burgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Close mobile menu when clicking on a link - FIXED
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only prevent default for anchor links, not home reload
            if (targetId.startsWith('#') && targetId !== '#home') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close mobile menu
                    if (burgerMenu && navMenu) {
                        burgerMenu.classList.remove('active');
                        navMenu.classList.remove('active');
                        body.style.overflow = '';
                    }
                    
                    // Smooth scroll
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            } else if (targetId === '#home') {
                // For home link, just close menu without preventing default
                if (burgerMenu && navMenu) {
                    burgerMenu.classList.remove('active');
                    navMenu.classList.remove('active');
                    body.style.overflow = '';
                }
                // Let the onclick handler handle the home reload
            }
        });
    });
    
    // Counter animation
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    const startCounter = (counter) => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        
        const inc = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(() => startCounter(counter), 20);
        } else {
            counter.innerText = target;
        }
    };
    
    // Initialize counter when element is in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
    
    // Form submission with validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Add loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
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
                    
                    // Show success message
                    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                }, 2000);
            }, 2000);
        });
    }
    
    // Initialize particles.js if available
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
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
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }

    // Initialize back-to-top button from HTML
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', scrollToTop);
    }
});

// 🎯 Back to Top Functionality - FIXED
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 🏠 Home Reload Function - IMPROVED
function reloadHome(event) {
    // If we're already on home page and at top, do nothing
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 0) {
            // Scroll to top instead of reloading
            event.preventDefault();
            scrollToTop();
            return false;
        }
    }
    // Allow normal navigation for home link
    return true;
}

// 🚀 Get Started Button Functionality
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    const header = document.getElementById('header');
    
    if (contactSection && header) {
        const headerHeight = header.offsetHeight;
        const targetPosition = contactSection.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const burgerMenu = document.querySelector('.burger-menu');
        const navMenu = document.querySelector('.nav-menu');
        const body = document.body;
        
        if (burgerMenu && navMenu) {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        }
    }
}

// 📧 Notification System
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

// Add notification styles only once
if (!document.querySelector('style[data-notification]')) {
    const notificationStyles = document.createElement('style');
    notificationStyles.setAttribute('data-notification', 'true');
    notificationStyles.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 30px;
            background: white;
            padding: 20px 25px;
            border-radius: 15px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
            border-left: 4px solid var(--primary);
            transform: translateX(400px);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 10000;
            max-width: 350px;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification-success {
            border-left-color: var(--success);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
            color: var(--text-dark);
            font-weight: 500;
        }
        
        .notification-content i {
            font-size: 20px;
        }
        
        .notification-success .notification-content i {
            color: var(--success);
        }
    `;
    document.head.appendChild(notificationStyles);
}

// 🎮 Easter Eggs
document.addEventListener('keypress', function(e) {
    if (e.key === 's') {
        createSnowEffect();
    }
    if (e.key === 't') {
        createTechEffect();
    }
});

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

// 🎉 Console Welcome Message
console.log(`%c
🚀 WELCOME TO SMARTECHN! 🚀

%cReady to transform your digital world? 
We're excited to have you here!

✨ Features you're enjoying:
• Smooth animations and interactions
• Epic tech loading experience  
• Professional responsive design
• Cutting-edge digital solutions

Press 's' for snow or 't' for tech effects! 🎮

`, 'font-size: 18px; font-weight: bold; color: #2563eb;', 'font-size: 14px; color: #64748b;');

// 🛠️ FIX: Mobile Overflow Prevention
function fixMobileOverflow() {
    // Prevent zoom on input focus for iOS
    document.addEventListener('touchstart', function() {}, {passive: true});
    
    // Fix viewport height for mobile
    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
}

// Call this function in your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    fixMobileOverflow();
    
    // Your existing loading screen and other code...
    // FAQ functionality
document.addEventListener('DOMContentLoaded', function() {
    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Enhanced form handling for contact page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Add loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
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
                    
                    // Show success message
                    showNotification('Message sent successfully! We\'ll get back to you within 24 hours.', 'success');
                }, 2000);
            }, 2000);
        });
    }
});