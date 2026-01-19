// ===== 화이트서울치과 x 덴탈클리닉파인더 Main JavaScript =====

document.addEventListener('DOMContentLoaded', function() {

    // ===== Mobile Menu Toggle =====
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });
    }

    // ===== Navbar Scroll Effect =====
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
        }
    });

    // ===== Scroll Animation (Fade In) =====
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => {
        fadeInObserver.observe(el);
    });

    // ===== Score Bar Animation =====
    const scoreBars = document.querySelectorAll('.score-bar-fill');

    const scoreBarObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        });
    }, {
        threshold: 0.5
    });

    scoreBars.forEach(bar => {
        scoreBarObserver.observe(bar);
    });

    // ===== Counter Animation =====
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);

        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }

        updateCounter();
    }

    // ===== Gauge Animation =====
    const gaugeScore = document.querySelector('.gauge-score');

    if (gaugeScore) {
        const gaugeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(gaugeScore, 80, 1500);
                    gaugeObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });

        gaugeObserver.observe(gaugeScore);
    }

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== Active Nav Link Highlight =====
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href.includes(currentPage) || (currentPage === 'index.html' && href === '../index.html'))) {
            link.classList.add('active');
        }
    });

    // ===== Parallax Effect for Hero =====
    const hero = document.querySelector('.hero');

    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
            }
        });
    }

    // ===== Strategy Cards Hover Effect =====
    const strategyCards = document.querySelectorAll('.strategy-card');

    strategyCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // ===== Process Steps Animation =====
    const processSteps = document.querySelectorAll('.process-step');

    const processObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
            }
        });
    }, {
        threshold: 0.3
    });

    processSteps.forEach(step => {
        step.classList.add('fade-in');
        processObserver.observe(step);
    });

    // ===== Feature Cards Stagger Animation =====
    const featureCards = document.querySelectorAll('.feature-card');

    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
            }
        });
    }, {
        threshold: 0.2
    });

    featureCards.forEach(card => {
        featureObserver.observe(card);
    });

    // ===== Typing Effect for Hero Title =====
    const heroTitle = document.querySelector('.hero-title');

    if (heroTitle && !heroTitle.dataset.animated) {
        heroTitle.dataset.animated = 'true';
    }

    // ===== Form Validation Enhancement =====
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, select, textarea');

        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() !== '') {
                    this.style.borderColor = '#27ae60';
                } else if (this.required) {
                    this.style.borderColor = '#e74c3c';
                }
            });

            input.addEventListener('focus', function() {
                this.style.borderColor = '#2D5A3D';
            });
        });
    }

    // ===== Scroll to Top Button =====
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #2D5A3D 0%, #3D7A52 100%);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 5px 20px rgba(45, 90, 61, 0.3);
    `;
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });

    scrollTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });

    // ===== Image Lazy Loading =====
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // ===== Console Welcome Message =====
    console.log('%c화이트서울치과 x DentalClinicFinder', 'color: #2D5A3D; font-size: 24px; font-weight: bold;');
    console.log('%c신뢰는 우연이 아니라 설계되는 것입니다.', 'color: #C9A227; font-size: 14px;');
});

// ===== Utility Functions =====

// Debounce function for performance
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

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
