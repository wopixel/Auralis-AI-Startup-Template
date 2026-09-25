import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { A11y, Autoplay, Keyboard } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const initSmoothScroll = () => {
  if (reduceMotion) return;

  const lenis = new Lenis({
    autoRaf: false,
    duration: 1.05,
    smoothWheel: true,
    syncTouch: false
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  window.AURALIS_LENIS = lenis;
};

const initLogoSlider = () => {
  document.querySelectorAll('[data-logo-swiper]').forEach((element) => {
    new Swiper(element, {
      modules: [A11y, Autoplay, Keyboard],
      a11y: { enabled: true },
      allowTouchMove: true,
      autoplay: reduceMotion ? false : { delay: 2400, disableOnInteraction: false },
      breakpoints: {
        701: { allowTouchMove: false, autoplay: false, slidesPerView: 5 }
      },
      keyboard: { enabled: true },
      loop: true,
      slidesPerView: 2.2,
      spaceBetween: 22,
      speed: 720
    });
  });
};

const initHeroParallax = () => {
  const hero = document.querySelector('.hero--home');
  if (!hero) return;

  const scene = hero.querySelector('.hero-scene');
  const copy = hero.querySelector('.hero-copy');
  const grid = hero.querySelector('.hero-grid');
  const atmosphere = hero.querySelector('.hero-atmosphere');
  if (!scene) return;

  const moveSceneX = gsap.quickTo(scene, 'x', { duration: .9, ease: 'power3.out' });
  const moveSceneY = gsap.quickTo(scene, 'y', { duration: .9, ease: 'power3.out' });
  const moveCopyX = copy ? gsap.quickTo(copy, 'x', { duration: 1.1, ease: 'power3.out' }) : null;
  const moveAtmosphereX = atmosphere ? gsap.quickTo(atmosphere, 'x', { duration: 1.6, ease: 'power3.out' }) : null;

  hero.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    const bounds = hero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    moveSceneX(x * 26);
    moveSceneY(y * 16);
    moveCopyX?.(x * -7);
    moveAtmosphereX?.(x * -22);
    if (grid) gsap.to(grid, { x: x * -10, duration: 1.2, ease: 'power3.out', overwrite: 'auto' });
  }, { passive: true });

  hero.addEventListener('pointerleave', () => {
    moveSceneX(0);
    moveSceneY(0);
    moveCopyX?.(0);
    moveAtmosphereX?.(0);
    if (grid) gsap.to(grid, { x: 0, duration: 1.2, ease: 'power3.out', overwrite: 'auto' });
  }, { passive: true });

  gsap.timeline({
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1.15 }
  })
    .to(scene, { yPercent: -13, scale: 1.08, ease: 'none' }, 0)
    .to(copy, { yPercent: -9, ease: 'none' }, 0)
    .to(grid, { yPercent: 8, ease: 'none' }, 0)
    .to(atmosphere, { yPercent: -6, xPercent: 7, ease: 'none' }, 0);
};

const initSurfaceParallax = () => {
  document.querySelectorAll('.product-stage, .snapshot-frame').forEach((surface) => {
    gsap.set(surface, { transformPerspective: 1200, transformOrigin: 'center center' });
    const rotateX = gsap.quickTo(surface, 'rotateX', { duration: .8, ease: 'power3.out' });
    const rotateY = gsap.quickTo(surface, 'rotateY', { duration: .8, ease: 'power3.out' });
    surface.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'touch') return;
      const bounds = surface.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      rotateX(y * -2.2);
      rotateY(x * 2.2);
    }, { passive: true });
    surface.addEventListener('pointerleave', () => {
      rotateX(0);
      rotateY(0);
    }, { passive: true });
  });
};

const initPremiumChrome = () => {
  const header = document.querySelector('.site-header');
  if (header) {
    ScrollTrigger.create({
      start: 18,
      onToggle: ({ isActive }) => header.classList.toggle('is-scrolled', isActive)
    });
  }

  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.append(progress);
  gsap.set(progress, { scaleX: 0, transformOrigin: 'left center' });
  gsap.to(progress, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: { start: 0, end: 'max', scrub: .18 }
  });

  document.querySelectorAll('.btn, .feature-link, .text-link').forEach((element) => {
    element.addEventListener('pointerenter', (event) => {
      if (event.pointerType === 'touch') return;
      gsap.to(element, { y: -2, duration: .28, ease: 'power2.out', overwrite: true });
    });
    element.addEventListener('pointerleave', () => {
      gsap.to(element, { x: 0, y: 0, duration: .45, ease: 'elastic.out(1, .55)', overwrite: true });
    });
  });
};

const animateProductSurface = () => {
  const stage = document.querySelector('.product-stage');
  if (!stage) return;

  const bars = stage.querySelectorAll('.chart-bar');
  const activity = stage.querySelectorAll('.activity-row');
  const metrics = stage.querySelectorAll('.metric');
  gsap.set(metrics, { autoAlpha: 0, y: 16 });
  gsap.set(bars, { autoAlpha: 0, scaleY: 0, transformOrigin: 'bottom' });
  gsap.set(activity, { autoAlpha: 0, x: 12 });

  gsap.timeline({
    scrollTrigger: { trigger: stage, start: 'top 78%', once: true },
    defaults: { ease: 'power3.out' }
  })
    .to(stage.querySelector('.product-side'), { autoAlpha: 1, x: 0, duration: .55 }, 0)
    .to(metrics, { autoAlpha: 1, y: 0, duration: .5, stagger: .08 }, .16)
    .to(bars, { autoAlpha: 1, scaleY: 1, duration: .65, stagger: .045 }, .32)
    .to(activity, { autoAlpha: 1, x: 0, duration: .4, stagger: .08 }, .45);
};

const initScrollDepth = () => {
  const hero = document.querySelector('.hero--home');
  if (hero) {
    const satellite = hero.querySelector('.hero-satellite');
    const orbits = hero.querySelectorAll('.hero-orbit');
    const copy = hero.querySelector('[data-hero-copy]');
    const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } });
    if (satellite) timeline.fromTo(satellite, { autoAlpha: 0, y: 42, rotateZ: 3 }, { autoAlpha: 1, y: 0, rotateZ: 0, duration: 1.15 }, .45);
    if (orbits.length) timeline.fromTo(orbits, { autoAlpha: 0, scale: .72 }, { autoAlpha: 1, scale: 1, duration: 1.45, stagger: .12 }, .1);
    if (satellite || copy) {
      gsap.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1.2 } })
        .to(satellite, { yPercent: -22, rotateZ: -3, ease: 'none' }, 0)
        .to(orbits, { yPercent: 10, scale: 1.08, ease: 'none' }, 0)
        .to(copy, { yPercent: -8, ease: 'none' }, 0);
    }
  }

  gsap.utils.toArray('.snapshot-frame img, .quote-aside, .stat-grid').forEach((element) => {
    gsap.fromTo(element, { y: 34, autoAlpha: 0 }, {
      y: 0,
      autoAlpha: 1,
      duration: .95,
      ease: 'power3.out',
      scrollTrigger: { trigger: element, start: 'top 88%', once: true }
    });
  });

  gsap.utils.toArray('.section--tint').forEach((section) => {
    gsap.to(section, {
      backgroundPosition: '0 56px',
      ease: 'none',
      scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });
};

const initGsapMotion = () => {
  if (reduceMotion) return;

  const intro = gsap.timeline({ defaults: { ease: 'power4.out' } });
  const header = document.querySelector('.site-header');
  const heroCopy = document.querySelector('.hero-copy');
  const heroScene = document.querySelector('.hero-scene');

  if (header) intro.fromTo(header, { y: -24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .8 });
  if (heroCopy) {
    gsap.set(heroCopy, { autoAlpha: 1 });
    intro.fromTo(heroCopy.querySelectorAll(':scope > *'), { y: 46, autoAlpha: 0, filter: 'blur(7px)' }, {
      y: 0,
      autoAlpha: 1,
      filter: 'blur(0px)',
      duration: 1.05,
      stagger: .1
    }, header ? '-=.42' : 0);
  }
  if (heroScene) intro.fromTo(heroScene, { autoAlpha: 0, scale: .9, filter: 'blur(8px)' }, { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: 1.55 }, '-=1.1');

  const pageHero = document.querySelector('.page-hero .container');
  if (pageHero) {
    gsap.fromTo(pageHero.children, { y: 34, autoAlpha: 0, filter: 'blur(5px)' }, {
      y: 0,
      autoAlpha: 1,
      filter: 'blur(0px)',
      duration: 1,
      ease: 'power4.out',
      stagger: .1,
      delay: .18
    });
  }

  const cards = gsap.utils.toArray('.feature-card, .value, .price-card, .team-card, .case-card, .article-card, .integration, .mini-card');
  cards.forEach((card, index) => {
    gsap.fromTo(card, { y: 40, autoAlpha: 0 }, {
      y: 0,
      autoAlpha: 1,
      duration: .95,
      ease: 'power3.out',
      delay: (index % 4) * .06,
      scrollTrigger: { trigger: card, start: 'top 90%', once: true }
    });
  });

  document.querySelectorAll('.product-stage, .snapshot-frame, .quote-block, .cta-band').forEach((section) => {
    gsap.fromTo(section, { y: 30, autoAlpha: 0 }, {
      y: 0,
      autoAlpha: 1,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: section, start: 'top 88%', once: true }
    });
  });

  document.querySelectorAll('.section-heading:not([data-reveal]), .split-copy:not([data-reveal])').forEach((section) => {
    const children = section.querySelectorAll(':scope > .section-label, :scope > h2, :scope > p');
    if (!children.length) return;
    gsap.from(children, {
      y: 24,
      autoAlpha: 0,
      duration: .72,
      stagger: .09,
      ease: 'power3.out',
      scrollTrigger: { trigger: section, start: 'top 84%', once: true }
    });
  });

  initHeroParallax();
  initSurfaceParallax();
  initPremiumChrome();
  animateProductSurface();
  initScrollDepth();
  window.setTimeout(() => ScrollTrigger.refresh(), 120);
};

initSmoothScroll();
initLogoSlider();
initGsapMotion();
