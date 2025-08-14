// Lightweight enhancements for a modern, accessible feel
// - Scroll spy (IntersectionObserver)
// - Reveal animations (prefers-reduced-motion aware)
// - Sticky header shadow on scroll
// - Mobile nav: close on link click, Esc to close
// - Back-to-top button

(function(){
  const doc = document;
  const header = doc.querySelector('.site-header');
  const nav = doc.getElementById('site-nav');
  const toggle = doc.querySelector('.nav-toggle');
  const links = Array.from(doc.querySelectorAll('.site-nav a[href^="#"]'));

  // Header shadow when scrolled
  const setHeaderShadow = () => {
    if (!header) return;
    const scrolled = window.scrollY > 6;
    header.classList.toggle('scrolled', scrolled);
  };
  setHeaderShadow();
  window.addEventListener('scroll', setHeaderShadow, { passive: true });

  // Mobile nav interactions
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });

    // Close nav on link click
    links.forEach(a => a.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    }));

    // Close on Escape
    doc.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Scroll spy: highlight active nav item
  const sections = Array.from(doc.querySelectorAll('main .section[id]'));
  const navMap = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const link = navMap.get(id);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.01, 0.5, 1] });
    sections.forEach(sec => spy.observe(sec));
  }

  // Reveal animations for section content, respecting reduced motion
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const revealTargets = Array.from(doc.querySelectorAll('.section .reveal, .cards .card, .cases .case, .about-grid > *'));
    revealTargets.forEach(el => el.classList.add('will-reveal'));
    const rev = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          entry.target.classList.remove('will-reveal');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    revealTargets.forEach(t => rev.observe(t));
  }

  // Back to top button
  const backTop = doc.getElementById('back-to-top');
  if (backTop) {
    const toggleBtn = () => backTop.classList.toggle('show', window.scrollY > 600);
    toggleBtn();
    window.addEventListener('scroll', toggleBtn, { passive: true });
    backTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }
})();
