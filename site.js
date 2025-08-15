(function() {
  'use strict';
  
  // Feature detection
  const hasIntersectionObserver = 'IntersectionObserver' in window;
  const hasRequestAnimationFrame = 'requestAnimationFrame' in window;
  
  // Only enhance if browser supports modern features
  if (!hasIntersectionObserver || !hasRequestAnimationFrame) {
    console.log('Modern features not supported - falling back to basic functionality');
    return;
  }

  // Scroll-triggered animations module
  const ScrollAnimations = {
    init() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);

      // Observe sections, cards, and other elements
      document.querySelectorAll('.section, .card, .case, .about-grid > div, .column').forEach(el => {
        el.classList.add('animate-fade-up');
        animateOnScroll.observe(el);
      });

      // Staggered card animations
      const animateCards = (container) => {
        const cards = container.querySelectorAll('.card, .case');
        cards.forEach((card, index) => {
          card.style.animationDelay = `${index * 100}ms`;
          card.classList.add('animate-stagger');
        });
      };

      // Apply to card containers when they come into view
      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCards(entry.target);
            cardObserver.unobserve(entry.target);
          }
        });
      });

      document.querySelectorAll('.cards, .cases').forEach(container => {
        cardObserver.observe(container);
      });
    }
  };

  // Enhanced navigation module
  const Navigation = {
    init() {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

      const updateActiveNav = () => {
        const scrollY = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        sections.forEach(section => {
          const { top, bottom } = section.getBoundingClientRect();
          const isVisible = top < windowHeight * 0.5 && bottom > windowHeight * 0.5;
          
          if (isVisible) {
            navLinks.forEach(link => {
              link.classList.toggle('active', 
                link.getAttribute('href') === `#${section.id}`);
            });
          }
        });
      };

      // Debounced scroll handler
      let scrollTimeout;
      window.addEventListener('scroll', () => {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveNav, 10);
      }, { passive: true });

      // Enhanced smooth scrolling
      const smoothScroll = (target, duration = 800) => {
        const targetElement = document.querySelector(target);
        if (!targetElement) return;
        
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        const animation = (currentTime) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        
        // Easing function
        const easeInOutQuad = (t, b, c, d) => {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        };
        
        requestAnimationFrame(animation);
      };

      // Apply to navigation links
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          smoothScroll(link.getAttribute('href'));
        });
      });
    }
  };

  // Scroll progress indicator module
  const ScrollProgress = {
    init() {
      // Create progress bar element
      const progressBar = document.createElement('div');
      progressBar.className = 'scroll-progress';
      document.body.appendChild(progressBar);

      const updateScrollProgress = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
      };

      window.addEventListener('scroll', updateScrollProgress, { passive: true });
    }
  };

  // Return to top button module
  const ReturnToTop = {
    init() {
      // Create return to top button
      const returnToTopBtn = document.createElement('button');
      returnToTopBtn.className = 'return-to-top';
      returnToTopBtn.innerHTML = '↗';
      returnToTopBtn.setAttribute('aria-label', 'Return to top of page');
      returnToTopBtn.setAttribute('title', 'Return to top');
      document.body.appendChild(returnToTopBtn);

      let isVisible = false;

      const toggleVisibility = () => {
        const scrolled = document.documentElement.scrollTop;
        const shouldShow = scrolled > 300;
        
        if (shouldShow && !isVisible) {
          returnToTopBtn.classList.add('visible');
          isVisible = true;
        } else if (!shouldShow && isVisible) {
          returnToTopBtn.classList.remove('visible');
          isVisible = false;
        }
      };

      const scrollToTop = () => {
        const scrollStep = -window.scrollY / (500 / 15);
        const scrollInterval = setInterval(() => {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        }, 15);
      };

      // Enhanced smooth scroll to top with racing effects
      const smoothScrollToTop = () => {
        const startPosition = window.pageYOffset;
        const duration = 800;
        let startTime = null;

        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        // Trigger racing effects if motion is allowed
        if (!prefersReducedMotion) {
          createRacingEffects(returnToTopBtn);
        }

        const animation = (currentTime) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = easeOutCubic(timeElapsed, startPosition, -startPosition, duration);
          window.scrollTo(0, run);
          
          // Trigger impact effect when reaching the top
          if (timeElapsed >= duration * 0.9 && window.pageYOffset <= 50 && !prefersReducedMotion) {
            createImpactEffect();
          }
          
          if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        // Easing function for smooth deceleration
        const easeOutCubic = (t, b, c, d) => {
          t /= d;
          t--;
          return c * (t * t * t + 1) + b;
        };

        requestAnimationFrame(animation);
      };

      // Create racing effects (skid marks and smoke)
      const createRacingEffects = (button) => {
        const buttonRect = button.getBoundingClientRect();
        const buttonX = buttonRect.left + buttonRect.width / 2;
        const buttonY = buttonRect.top + buttonRect.height / 2;

        // Create effects container
        const effectsContainer = document.createElement('div');
        effectsContainer.className = 'racing-effects';
        document.body.appendChild(effectsContainer);

        // Create 2 skid marks (left and right wheel)
        const leftSkid = document.createElement('div');
        leftSkid.className = 'skid-mark left';
        leftSkid.style.left = `${buttonX}px`;
        leftSkid.style.top = `${buttonY}px`;
        effectsContainer.appendChild(leftSkid);

        const rightSkid = document.createElement('div');
        rightSkid.className = 'skid-mark right';
        rightSkid.style.left = `${buttonX}px`;
        rightSkid.style.top = `${buttonY}px`;
        effectsContainer.appendChild(rightSkid);

        // Create realistic burnout smoke sequence
        // Phase 1: Initial tire smoke burst (when button is clicked)
        for (let i = 0; i < 4; i++) {
          setTimeout(() => {
            const smoke = document.createElement('div');
            smoke.className = 'smoke-particle initial';
            // Position around the button with spread for tire smoke
            const angle = (i / 4) * Math.PI * 2;
            const radius = 15;
            const offsetX = Math.cos(angle) * radius;
            const offsetY = Math.sin(angle) * radius;
            
            smoke.style.left = `${buttonX + offsetX}px`;
            smoke.style.top = `${buttonY + offsetY}px`;
            effectsContainer.appendChild(smoke);

            // Remove after animation
            setTimeout(() => {
              if (smoke.parentNode) {
                smoke.parentNode.removeChild(smoke);
              }
            }, 1000);
          }, i * 100);
        }

        // Phase 2: Trailing smoke that follows the scroll movement
        for (let i = 0; i < 6; i++) {
          setTimeout(() => {
            const smoke = document.createElement('div');
            smoke.className = 'smoke-particle trailing';
            // Position slightly behind and to sides of button
            smoke.style.left = `${buttonX + (Math.random() - 0.5) * 30}px`;
            smoke.style.top = `${buttonY + 20 + (Math.random() * 15)}px`;
            effectsContainer.appendChild(smoke);

            // Remove after animation
            setTimeout(() => {
              if (smoke.parentNode) {
                smoke.parentNode.removeChild(smoke);
              }
            }, 3500);
          }, 400 + (i * 300)); // Start after initial burst
        }

        // Remove skid marks after they fade
        setTimeout(() => {
          if (leftSkid.parentNode) leftSkid.parentNode.removeChild(leftSkid);
          if (rightSkid.parentNode) rightSkid.parentNode.removeChild(rightSkid);
        }, 3000);

        // Clean up container
        setTimeout(() => {
          if (effectsContainer.parentNode) {
            effectsContainer.parentNode.removeChild(effectsContainer);
          }
        }, 4000);
      };

      // Create impact effect at the top
      const createImpactEffect = () => {
        // Flash effect
        const flash = document.createElement('div');
        flash.className = 'impact-flash';
        document.body.appendChild(flash);

        // Screen glitch/shutter effect
        const glitch = document.createElement('div');
        glitch.className = 'screen-glitch';
        document.body.appendChild(glitch);

        // Add text distortion to main content
        const mainContent = document.querySelector('main, .container, body');
        if (mainContent) {
          mainContent.classList.add('text-glitch');
          setTimeout(() => {
            mainContent.classList.remove('text-glitch');
          }, 800);
        }

        // Remove flash and glitch after animation
        setTimeout(() => {
          if (flash.parentNode) flash.parentNode.removeChild(flash);
          if (glitch.parentNode) glitch.parentNode.removeChild(glitch);
        }, 600);

        // Create more visible falling debris
        const debrisTypes = ['large', 'medium', 'small', 'text-bit'];
        
        for (let i = 0; i < 20; i++) {
          setTimeout(() => {
            const debris = document.createElement('div');
            debris.className = `debris-particle ${debrisTypes[i % debrisTypes.length]}`;
            debris.style.left = `${Math.random() * window.innerWidth}px`;
            debris.style.top = '-30px';
            
            // Add random horizontal drift
            const randomDrift = (Math.random() - 0.5) * 300;
            debris.style.setProperty('--drift', `${randomDrift}px`);
            
            document.body.appendChild(debris);

            // Remove after animation
            setTimeout(() => {
              if (debris.parentNode) {
                debris.parentNode.removeChild(debris);
              }
            }, 2100);
          }, i * 80);
        }
      };

      // Event listeners
      window.addEventListener('scroll', toggleVisibility, { passive: true });
      returnToTopBtn.addEventListener('click', smoothScrollToTop);

      // Add click animation
      returnToTopBtn.addEventListener('mousedown', () => {
        returnToTopBtn.classList.add('clicked');
      });

      returnToTopBtn.addEventListener('mouseup', () => {
        setTimeout(() => {
          returnToTopBtn.classList.remove('clicked');
        }, 150);
      });
    }
  };

  // Interactive enhancements module
  const Interactions = {
    init() {
      // Enhanced button interactions
      document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('mouseenter', (e) => {
          e.target.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', (e) => {
          e.target.style.transform = 'translateY(-2px) scale(1)';
        });
        
        button.addEventListener('mousedown', (e) => {
          e.target.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', (e) => {
          e.target.style.transform = 'translateY(-2px) scale(1.02)';
        });
      });

      // Enhanced FAQ interactions
      document.querySelectorAll('details').forEach(details => {
        const summary = details.querySelector('summary');
        
        summary.addEventListener('click', (e) => {
          e.preventDefault();
          
          if (details.open) {
            details.classList.add('closing');
            setTimeout(() => {
              details.open = false;
              details.classList.remove('closing');
            }, 300);
          } else {
            details.open = true;
            details.classList.add('opening');
            setTimeout(() => {
              details.classList.remove('opening');
            }, 300);
          }
        });
      });

      // Card hover enhancements
      document.querySelectorAll('.card, .case').forEach(card => {
        card.addEventListener('mouseenter', () => {
          card.style.willChange = 'transform, box-shadow';
        });
        
        card.addEventListener('mouseleave', () => {
          card.style.willChange = 'auto';
        });
      });
    }
  };

  // Performance optimizations module
  const Performance = {
    init() {
      // Performance-optimized scroll handling
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Scroll-dependent functions here
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      // Intersection Observer with lazy loading preparation
      const createOptimizedObserver = (callback, options = {}) => {
        const defaultOptions = {
          threshold: 0.1,
          rootMargin: '50px',
          ...options
        };
        
        return new IntersectionObserver(callback, defaultOptions);
      };

      // Store for cleanup
      window.miaigiObservers = window.miaigiObservers || [];
    }
  };

  // Read More functionality module
  const ReadMore = {
    init() {
      // Only initialize on mobile/tablet screens
      if (window.innerWidth > 768) return;
      
      document.querySelectorAll('.expandable-content').forEach(container => {
        const btn = container.querySelector('.read-more-btn');
        if (!btn) return;
        
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          ReadMore.toggleContent(container);
        });
      });
      
      // Reinitialize on resize for responsive behavior
      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          ReadMore.handleResize();
        }, 250);
      });
    },
    
    toggleContent(container) {
      const isExpanded = container.classList.contains('expanded');
      const btn = container.querySelector('.read-more-btn');
      const btnText = btn.querySelector('.text');
      
      if (isExpanded) {
        container.classList.remove('expanded');
        btnText.textContent = 'Read More';
        
        // Smooth scroll to top of container
        container.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      } else {
        container.classList.add('expanded');
        btnText.textContent = 'Read Less';
      }
    },
    
    handleResize() {
      // Reset all expanded states on resize to handle viewport changes
      if (window.innerWidth > 768) {
        document.querySelectorAll('.expandable-content.expanded').forEach(container => {
          container.classList.remove('expanded');
          const btnText = container.querySelector('.read-more-btn .text');
          if (btnText) btnText.textContent = 'Read More';
        });
      }
    }
  };

  // Initialize when DOM ready
  function init() {
    ScrollAnimations.init();
    Navigation.init();
    ScrollProgress.init();
    ReturnToTop.init();
    Interactions.init();
    Performance.init();
    ReadMore.init();
    
    console.log('miaigi enhancements loaded successfully');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();