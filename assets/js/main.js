(() => {
  const root = document.documentElement;
  const body = document.body;
  const header = document.querySelector('.site-header');
  const mobileNav = document.querySelector('.primary-nav');
  const config = window.AURALIS_CONFIG || {};
  root.classList.add('js-motion');
  if (mobileNav) {
    body.classList.add('has-mobile-nav');
    mobileNav.id = mobileNav.id || 'mobile-navigation';
    if (window.matchMedia('(max-width: 780px)').matches) mobileNav.setAttribute('aria-hidden', 'true');
    document.querySelector('[data-menu-toggle]')?.setAttribute('aria-controls', mobileNav.id);
  }

  const mobileNavBackdrop = mobileNav ? document.createElement('button') : null;
  if (mobileNavBackdrop) {
    mobileNavBackdrop.className = 'mobile-nav-backdrop';
    mobileNavBackdrop.type = 'button';
    mobileNavBackdrop.setAttribute('data-menu-close', '');
    mobileNavBackdrop.setAttribute('aria-label', 'Close menu');
    document.body.append(mobileNavBackdrop);
  }

  const setMobileNav = (open) => {
    mobileNav?.classList.toggle('is-open', open);
    body.classList.toggle('is-menu-open', open);
    mobileNavBackdrop?.classList.toggle('is-visible', open);
    mobileNav?.setAttribute('aria-hidden', String(!open));
    if (open) window.AURALIS_LENIS?.stop();
    else window.AURALIS_LENIS?.start();
    const menuButton = document.querySelector('[data-menu-toggle]');
    if (menuButton) {
      menuButton.innerHTML = `<i class="ti ${open ? 'ti-x' : 'ti-menu-2'}"></i>`;
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (open) window.setTimeout(() => mobileNav?.querySelector('[data-menu-close]')?.focus(), 180);
      else menuButton.focus();
    }
  };

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileNav?.classList.contains('is-open')) setMobileNav(false);
  });

  const savedTheme = window.localStorage.getItem('auralis-theme');
  const requestedTheme = new URLSearchParams(window.location.search).get('theme');
  root.dataset.theme = requestedTheme === 'light' || (requestedTheme !== 'dark' && savedTheme === 'light') ? 'light' : 'dark';

  const syncSnapshotTheme = () => {
    document.querySelectorAll('.snapshot-frame img').forEach((image) => {
      const lightSource = image.dataset.themeLight || image.getAttribute('src');
      const darkSource = image.dataset.themeDark || lightSource.replace(/\.svg$/i, '-dark.svg');
      image.dataset.themeLight = lightSource;
      image.dataset.themeDark = darkSource;
      image.src = root.dataset.theme === 'light' ? lightSource : darkSource;
    });
  };

  const syncThemeButton = () => {
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      const light = root.dataset.theme === 'light';
      button.innerHTML = `<i class="ti ${light ? 'ti-moon' : 'ti-sun'}"></i>`;
      button.setAttribute('aria-label', light ? 'Use dark theme' : 'Use light theme');
      button.dataset.tooltip = light ? 'Dark theme' : 'Light theme';
    });
  };
  syncThemeButton();
  syncSnapshotTheme();

  document.addEventListener('click', (event) => {
    const themeButton = event.target.closest('[data-theme-toggle]');
    if (themeButton) {
      const light = root.dataset.theme === 'light';
      if (light) root.dataset.theme = 'dark';
      else root.dataset.theme = 'light';
      window.localStorage.setItem('auralis-theme', light ? 'dark' : 'light');
      syncThemeButton();
      syncSnapshotTheme();
    }

    const menuButton = event.target.closest('[data-menu-toggle]');
    if (menuButton) {
      setMobileNav(!mobileNav?.classList.contains('is-open'));
    }

    const menuClose = event.target.closest('[data-menu-close]');
    if (menuClose) {
      setMobileNav(false);
    }

    const navLink = event.target.closest('.primary-nav a');
    if (navLink) {
      setMobileNav(false);
    }

    const passwordButton = event.target.closest('[data-password-toggle]');
    if (passwordButton) {
      const input = passwordButton.closest('.password-wrap')?.querySelector('input');
      if (!input) return;
      const visible = input.type === 'text';
      input.type = visible ? 'password' : 'text';
      passwordButton.innerHTML = `<i class="ti ${visible ? 'ti-eye' : 'ti-eye-off'}"></i>`;
      passwordButton.setAttribute('aria-label', visible ? 'Show password' : 'Hide password');
    }
  });

  const navKey = body.dataset.page;
  if (navKey) {
    document.querySelectorAll('[data-nav]').forEach((link) => {
      if (link.dataset.nav === navKey) link.classList.add('is-active');
    });
  }

  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  document.querySelectorAll('[data-billing-toggle]').forEach((toggle) => {
    toggle.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-billing]');
      if (!button) return;
      toggle.querySelectorAll('button[data-billing]').forEach((item) => item.classList.toggle('is-active', item === button));
      const billing = button.dataset.billing;
      document.querySelectorAll('[data-price]').forEach((price) => {
        price.textContent = price.dataset[billing] || price.textContent;
      });
      document.querySelectorAll('[data-price-period]').forEach((period) => {
        period.textContent = billing === 'yearly' ? '/mo, billed yearly' : '/mo';
      });
    });
  });

  document.querySelectorAll('[data-tab-group]').forEach((group) => {
    const buttons = group.querySelectorAll('[data-tab]');
    // Some tab controls own their panels; solution tabs place panels beside the control.
    const panelScope = group.querySelector('[data-tab-panel]') ? group : group.parentElement;
    const panels = panelScope ? panelScope.querySelectorAll('[data-tab-panel]') : [];
    buttons.forEach((button) => button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.toggle('is-active', item === button));
      panels.forEach((panel) => panel.classList.toggle('is-active', panel.dataset.tabPanel === button.dataset.tab));
    }));
  });

  document.querySelectorAll('[data-accordion-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('[data-accordion-item]');
      const open = item?.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', String(Boolean(open)));
      const content = item?.querySelector('[data-accordion-content]');
      if (content) content.style.maxHeight = open ? `${content.scrollHeight}px` : '0px';
    });
  });

  const filterButtons = document.querySelectorAll('[data-filter]');
  const articleCards = document.querySelectorAll('[data-category]');
  const searchInput = document.querySelector('[data-blog-search]');
  const applyFilters = () => {
    const active = document.querySelector('[data-filter].is-active')?.dataset.filter || 'all';
    const query = searchInput?.value.trim().toLowerCase() || '';
    articleCards.forEach((card) => {
      const matchesCategory = active === 'all' || card.dataset.category === active;
      const matchesQuery = !query || card.textContent.toLowerCase().includes(query);
      card.classList.toggle('is-hidden', !(matchesCategory && matchesQuery));
    });
  };
  filterButtons.forEach((button) => button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    applyFilters();
  }));
  searchInput?.addEventListener('input', applyFilters);

  document.querySelectorAll('form[data-validate]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      let valid = true;
      form.querySelectorAll('[required]').forEach((input) => {
        const field = input.closest('.form-field');
        const value = input.value.trim();
        const emailInvalid = input.type === 'email' && value && !/^\S+@\S+\.\S+$/.test(value);
        const invalid = !value || emailInvalid;
        field?.classList.toggle('has-error', invalid);
        if (invalid) valid = false;
      });
      if (!valid) return;
      const status = form.querySelector('.form-status');
      const endpoint = form.dataset.endpoint || config[form.dataset.endpointKey || ''];
      if (!endpoint) {
        if (status) {
          status.textContent = 'Demo mode: validation passed. Add your endpoint in assets/js/config.js to send this form live.';
          status.classList.add('is-visible');
        }
        form.reset();
        return;
      }
      const submit = form.querySelector('button[type="submit"]');
      if (submit) submit.disabled = true;
      fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form))) })
        .then((response) => { if (!response.ok) throw new Error('Request failed'); return response; })
        .then(() => { if (status) { status.textContent = form.dataset.success || 'Thanks. Your message has been received.'; status.classList.add('is-visible'); } form.reset(); })
        .catch(() => { if (status) { status.textContent = 'We could not send this yet. Please check your endpoint configuration and try again.'; status.classList.add('is-visible', 'is-error'); } })
        .finally(() => { if (submit) submit.disabled = false; });
    });
    form.querySelectorAll('input, select, textarea').forEach((input) => input.addEventListener('input', () => input.closest('.form-field')?.classList.remove('has-error')));
  });

  const revealItems = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealItems.length) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        instance.unobserve(entry.target);
      });
    }, { threshold: .1 });
    revealItems.forEach((item) => observer.observe(item));
  } else revealItems.forEach((item) => item.classList.add('is-visible'));

  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const node = entry.target;
        const target = Number(node.dataset.counter);
        const suffix = node.dataset.suffix || '';
        const duration = 900;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          node.textContent = `${Math.round(target * (1 - Math.pow(1 - progress, 3)))}${suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        instance.unobserve(node);
      });
    }, { threshold: .5 });
    counters.forEach((counter) => counterObserver.observe(counter));
  }

  const productViews = {
    overview: { title: 'Workspace overview', subtitle: 'System health across your active intelligence layer', values: ['12,842', '2.8m', '96.4%'], deltas: ['+18.4% vs last month', '-34s vs last month', '+2.1% vs last month'], chart: 'Automation volume', bars: [40, 55, 47, 75, 64, 86, 70, 92, 78, 100] },
    models: { title: 'Model graph', subtitle: 'Every provider, prompt, and release in one lineage', values: ['24', '1.4m', '98.1%'], deltas: ['+4 models this quarter', '+12.8% throughput', '+1.7 pts vs baseline'], chart: 'Model throughput', bars: [22, 38, 64, 52, 78, 68, 84, 73, 92, 88] },
    evals: { title: 'Evaluation center', subtitle: 'The scenarios your team uses to decide what ships', values: ['1,284', '96.0%', '184'], deltas: ['+18.4% vs last month', '-34s vs last month', '+2.1% vs last month'], chart: 'Scenario coverage', bars: [48, 62, 58, 76, 70, 82, 67, 94, 81, 100] },
    activity: { title: 'Activity stream', subtitle: 'A traceable record of what changed and when', values: ['7,462', '18m', '99.2%'], deltas: ['+8.6% vs last month', '-6m vs last month', '+0.8 pts vs baseline'], chart: 'Reviewed events', bars: [18, 42, 29, 73, 50, 88, 64, 95, 71, 84] }
  };
  document.querySelectorAll('[data-product-view]').forEach((button) => {
    button.addEventListener('click', () => {
      const view = productViews[button.dataset.productView];
      if (!view) return;
      document.querySelectorAll('[data-product-view]').forEach((item) => item.classList.toggle('is-active', item === button));
      const title = document.querySelector('[data-product-title]');
      const subtitle = document.querySelector('[data-product-subtitle]');
      const chartTitle = document.querySelector('[data-chart-title]');
      const chart = document.querySelector('.bar-chart');
      const bars = document.querySelectorAll('.chart-bar');
      if (title) title.textContent = view.title;
      if (subtitle) subtitle.textContent = view.subtitle;
      if (chartTitle) chartTitle.textContent = view.chart;
      if (chart) chart.setAttribute('aria-label', `${view.chart} chart`);
      bars.forEach((bar, index) => {
        bar.style.setProperty('--bar', `${view.bars[index]}%`);
        bar.style.setProperty('--delay', `${index * 0.05}s`);
        bar.classList.remove('is-refreshing');
        void bar.offsetWidth;
        bar.classList.add('is-refreshing');
      });
      ['runs', 'resolution', 'quality'].forEach((key, index) => {
        const metric = document.querySelector(`[data-product-metric="${key}"]`);
        const delta = document.querySelector(`[data-product-delta="${key}"]`);
        if (metric) metric.textContent = view.values[index];
        if (delta) delta.textContent = view.deltas[index];
      });
      const productMain = document.querySelector('.product-main');
      if (productMain) {
        productMain.classList.remove('is-updating');
        void productMain.offsetWidth;
        productMain.classList.add('is-updating');
        window.setTimeout(() => productMain.classList.remove('is-updating'), 900);
      }
      window.AURALIS_ANIMATE_PRODUCT?.();
    });
  });

  const demoTriggers = document.querySelectorAll('[data-open-demo]');
  if (demoTriggers.length) {
    const demo = document.createElement('dialog');
    demo.className = 'story-modal media-modal';
    demo.innerHTML = `<div class="story-dialog"><button class="icon-btn story-close" type="button" data-close-demo aria-label="Close product tour"><i class="ti ti-x"></i></button><p class="section-label">Product tour / 00:58</p><h2>The system behind the answer.</h2><div class="demo-output"><h3><i class="ti ti-player-play"></i> Interactive preview</h3><p>Use the live product surface below to move from workspace signal to model graph, evaluation, and activity views.</p><ul><li>Click any workspace view to change the live metrics.</li><li>Use the product navigation to inspect a different operating layer.</li><li>Connect your own form endpoint in <span class="mono">assets/js/config.js</span> when you package the template.</li></ul></div><a class="btn btn-primary" href="#product-demo" data-close-demo>Open the live product surface <i class="ti ti-arrow-down"></i></a></div>`;
    document.body.append(demo);
    const closeDemo = () => { demo.close(); body.classList.remove('modal-open'); };
    demoTriggers.forEach((trigger) => trigger.addEventListener('click', (event) => { event.preventDefault(); demo.showModal(); body.classList.add('modal-open'); }));
    demo.addEventListener('click', (event) => { if (event.target === demo || event.target.closest('[data-close-demo]')) closeDemo(); });
    demo.addEventListener('cancel', closeDemo);
  }
})();
