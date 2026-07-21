(() => {
  'use strict';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const body = document.body;
  const rail = $('#siteRail');
  const menuButton = $('#mobileMenuToggle');
  const scrim = $('#railScrim');
  const heroImage = $('#heroImage');

  function releaseBoot() {
    if (typeof window.__AXIAL_RELEASE_BOOT__ === 'function') {
      window.__AXIAL_RELEASE_BOOT__();
      return;
    }
    const screen = $('#bootScreen');
    if (screen) screen.classList.add('is-hidden');
  }

  function setMenu(open) {
    body.classList.toggle('menu-open', open);
    menuButton?.setAttribute('aria-expanded', String(open));
  }

  menuButton?.addEventListener('click', () => {
    setMenu(!body.classList.contains('menu-open'));
  });

  scrim?.addEventListener('click', () => setMenu(false));

  $$('.site-nav a').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenu(false);
  });

  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: .12, rootMargin: '0px 0px -5% 0px' })
    : null;

  $$('.reveal').forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
    if (observer) observer.observe(element);
    else element.classList.add('is-visible');
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (heroImage && !reducedMotion && window.matchMedia('(pointer: fine)').matches) {
    heroImage.addEventListener('pointermove', event => {
      const rect = heroImage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      heroImage.style.transform =
        `perspective(1100px) rotateY(${x * 4.5}deg) rotateX(${y * -4.5}deg) translateZ(0)`;
    });

    heroImage.addEventListener('pointerleave', () => {
      heroImage.style.transform = '';
    });
  }

  document.addEventListener('click', event => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;

    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
  });

  try {
    window.setTimeout(releaseBoot, 1400);
  } catch (error) {
    console.error('[Terra Axial] Falha de inicialização:', error);
    releaseBoot();
  }
})();