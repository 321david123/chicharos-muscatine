/* =====================================================
   Chicharo's Mexican Grill — interactions
   ===================================================== */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = "2026";

  /* ============================================================
     MENU DATA  (real items + prices from Chicharo's menu)
     ============================================================ */
  const MENU = [
    { section: 'Appetizers', items: [
      { name: 'Gringo Guacachips', desc: 'Fresh avocado + lime + housemade corn chips.', price: '$4.25' },
      { name: 'Macho Guacachips', desc: 'Fresh avocado + lime + cilantro + onion + tomato + jalapeño + housemade corn chips.', price: '$3.95' },
      { name: 'Chips & Salsa', desc: 'Housemade corn chips + fire-roasted tomato + cilantro + onion + jalapeño.', price: '$3.15' },
      { name: 'Queso Dip', desc: 'Cheesy goodness + pico de gallo + chipotle + housemade corn chips.', price: '$4.75' },
      { name: 'Nachos Hidalgo', desc: 'Housemade corn chips + melting cheeses + chorizo + salsa.', price: '$5.50' },
    ]},
    { section: 'Tacos', items: [
      { name: 'Asada', desc: 'Seared marinated steak + cilantro + onion + lime + choice of house salsa.', price: '$2.00' },
      { name: 'Pastor', desc: 'Chile-marinated pork + cilantro + onion + lime + choice of house salsa.', price: '$2.00' },
      { name: 'Carnitas', desc: 'Braised pork + lime + pico de gallo.', price: '$2.00' },
      { name: 'Chorizo', desc: 'Mexican sausage + lime + pico de gallo.', price: '$2.00' },
      { name: 'Pollo Enchilado', desc: 'Marinated guajillo grilled chicken + lime + pico de gallo.', price: '$2.00' },
      { name: 'Picadillo', desc: 'Marinated ground beef + potatoes + lettuce + tomato + cheese + lime.', price: '$2.00' },
      { name: 'Taco Nevado', desc: 'Choice of asada, pastor or pollo enchilado + cheesy goodness + cilantro + onion + lime.', price: '$2.50' },
      { name: 'Taco Loco', desc: 'Asada + chorizo + pastor + bacon + cilantro + onion + lime.', price: '$2.75' },
    ]},
    { section: 'Burritos', items: [
      { name: "Chicharo's Burrito", desc: 'The house burrito — your choice of meat, rice, beans and cheese.', price: '$7.50' },
      { name: 'Burrito a la Mexicana', desc: 'Seared marinated steak + tomato + onion + jalapeños + rice + beans + cheese.', price: '$7.50' },
      { name: 'De Pastor', desc: 'Chile-marinated pork + rice + beans + cheese.', price: '$6.75' },
      { name: 'De Carnitas', desc: 'Braised pork + rice + beans + cheese.', price: '$6.75' },
      { name: 'De Pollo Enchilado', desc: 'Guajillo grilled chicken + rice + beans + cheese.', price: '$6.75' },
      { name: 'De Fajita', desc: 'Grilled peppers + onions + your choice of meat + rice + beans.', price: '$6.75' },
      { name: 'Veggie Burrito', desc: 'Grilled veggies + rice + beans + cheese.', price: '$6.75' },
      { name: 'Loco Burrito', desc: 'Chicken fajitas + chorizo + bacon + rice + beans + cheese + lettuce + tomato.', price: '$9.50' },
      { name: 'Burrito Gordo', desc: 'Seared asada + chorizo + chile-marinated pork + pollo enchilado + rice + beans.', price: '$11.00' },
    ]},
    { section: 'Smothered Burritos', items: [
      { name: 'Asada', desc: 'Rice + beans + seared marinated steak, smothered in queso.', price: '$9.00' },
      { name: 'Pastor', desc: 'Rice + beans + chile-marinated pork, smothered in queso.', price: '$8.50' },
      { name: 'Carnitas', desc: 'Rice + beans + braised pork, smothered in queso.', price: '$8.50' },
      { name: 'Chorizo', desc: 'Rice + beans + Mexican sausage, smothered in queso.', price: '$8.50' },
      { name: 'Pollo Enchilado', desc: 'Rice + beans + guajillo grilled chicken, smothered in queso.', price: '$8.50' },
    ]},
    { section: 'Bowls', items: [
      { name: "Chicharo's Bowl", desc: 'Rice + beans + your choice of meat + lettuce + tomato + cheese + sour cream.', price: '$7.50' },
      { name: 'Pastor', desc: 'Rice + beans + chile-marinated pork + toppings.', price: '$6.75' },
      { name: 'Carnitas', desc: 'Rice + beans + braised pork + toppings.', price: '$6.75' },
      { name: 'Pollo Enchilado', desc: 'Rice + beans + guajillo grilled chicken + toppings.', price: '$6.75' },
      { name: 'Picadillo', desc: 'Rice + beans + marinated ground beef + toppings.', price: '$6.75' },
    ]},
    { section: 'Quesadilla Grande', items: [
      { name: 'Asada', desc: 'Flour tortilla filled with cheese + seared marinated steak.', price: '$7.00' },
      { name: 'Pastor', desc: 'Flour tortilla filled with cheese + chile-marinated pork.', price: '$6.50' },
      { name: 'Pollo Enchilado', desc: 'Flour tortilla filled with cheese + guajillo grilled chicken.', price: '$6.50' },
      { name: 'Chorizo', desc: 'Flour tortilla filled with cheese + Mexican sausage.', price: '$6.50' },
    ]},
    { section: 'Tortas', items: [
      { name: 'De Asada', desc: 'Bolillo + beans + mayo + avocado + queso fresco + seared steak.', price: '$7.00' },
      { name: 'De Carnitas', desc: 'Bolillo + beans + mayo + avocado + queso fresco + braised pork.', price: '$7.00' },
      { name: 'De Pastor', desc: 'Bolillo + beans + mayo + avocado + queso fresco + chile-marinated pork.', price: '$7.00' },
      { name: 'De Chorizo', desc: 'Bolillo + beans + mayo + avocado + queso fresco + Mexican sausage.', price: '$7.00' },
      { name: 'De Pollo Enchilado', desc: 'Bolillo + beans + mayo + avocado + queso fresco + guajillo chicken.', price: '$7.00' },
    ]},
    { section: 'Platos Fuertes', items: [
      { name: 'Steak Fajitas', desc: 'Sizzling steak with grilled peppers and onions, rice, beans and tortillas.', price: '$10.50' },
      { name: 'Chicken Fajitas', desc: 'Grilled chicken with peppers and onions, rice, beans and tortillas.', price: '$9.00' },
      { name: 'Taco Platter', desc: 'A hearty plate of tacos with rice and beans.', price: '$10.50' },
      { name: 'Sarape Nevado', desc: 'House specialty layered with meat, cheese and salsa.', price: '$10.50' },
      { name: 'Chilaquiles con Bistec', desc: 'Corn tortillas simmered in salsa with steak, topped with cheese.', price: '$10.00' },
      { name: 'Huaraches', desc: 'Masa base topped with beans, meat, lettuce, cheese and salsa.', price: '$8.50' },
    ]},
  ];

  /* ---------- Build menu tabs + panels ---------- */
  const tabsEl = document.getElementById('menuTabs');
  const panelsEl = document.getElementById('menuPanels');
  if (tabsEl && panelsEl) {
    MENU.forEach((group, i) => {
      const id = 'mp-' + i;

      const tab = document.createElement('button');
      tab.className = 'menu__tab' + (i === 0 ? ' is-active' : '');
      tab.textContent = group.section;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
      tab.setAttribute('aria-controls', id);
      tabsEl.appendChild(tab);

      tab.tabIndex = i === 0 ? 0 : -1;

      const panel = document.createElement('div');
      panel.className = 'menu__panel' + (i === 0 ? ' is-active' : '');
      panel.id = id;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('tabindex', '0');
      if (i !== 0) panel.hidden = true;

      const list = document.createElement('div');
      list.className = 'menu__items';
      group.items.forEach((it) => {
        const item = document.createElement('div');
        item.className = 'menu__item';
        const desc = it.desc ? `<p class="menu__item-desc">${it.desc}</p>` : '';
        item.innerHTML = `
          <div class="menu__item-head">
            <span class="menu__item-name">${it.name}</span>
            <span class="menu__dots" aria-hidden="true"></span>
          </div>
          <span class="menu__item-price">${it.price}</span>
          ${desc}`;
        list.appendChild(item);
      });
      panel.appendChild(list);
      panelsEl.appendChild(panel);

      tab.addEventListener('click', () => activateTab(i));
    });

    const allTabs = () => Array.from(tabsEl.querySelectorAll('.menu__tab'));
    function activateTab(idx, focus) {
      const tabs = allTabs();
      const panels = panelsEl.querySelectorAll('.menu__panel');
      tabs.forEach((t, j) => {
        const on = j === idx;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
      });
      panels.forEach((p, j) => {
        const on = j === idx;
        p.classList.toggle('is-active', on);
        p.hidden = !on;
      });
      const active = tabs[idx];
      if (active) {
        active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        if (focus) active.focus();
      }
    }

    // Keyboard arrow navigation (WAI-ARIA tablist pattern)
    tabsEl.addEventListener('keydown', (e) => {
      const tabs = allTabs();
      const current = tabs.indexOf(document.activeElement);
      if (current === -1) return;
      let next = null;
      if (e.key === 'ArrowRight') next = (current + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = tabs.length - 1;
      if (next !== null) { e.preventDefault(); activateTab(next, true); }
    });
  }

  /* ---------- Build reviews (real guest quotes) ---------- */
  const REVIEWS = [
    { stars: 5, quote: 'Great authentic Mexican tacos! Best tasty tacos in town, hands down.', author: 'Local guest', source: 'From our reviews' },
    { stars: 5, quote: 'Staff is awesome. I love the burritos and tacos so much. Highly recommend.', author: 'Verified diner', source: 'From our reviews' },
    { stars: 5, quote: 'Affordable for what you receive — some of the biggest burritos around, and the service is terrific.', author: 'Local guest', source: 'From our reviews' },
  ];
  const revWrap = document.getElementById('reviewsWrapper');
  if (revWrap) {
    REVIEWS.forEach((r) => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `
        <blockquote class="review">
          <div class="review__stars" aria-label="${r.stars} out of 5 stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
          <p class="review__quote">${r.quote}</p>
          <footer><div class="review__author">${r.author}</div><div class="review__source">${r.source}</div></footer>
        </blockquote>`;
      revWrap.appendChild(slide);
    });
  }

  /* ============================================================
     NAV solidify + overlay
     ============================================================ */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 60) nav.classList.add('is-solid');
      else nav.classList.remove('is-solid');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const toggle = document.getElementById('navToggle');
  const overlay = document.getElementById('overlayMenu');
  if (toggle && overlay) {
    const closeMenu = () => {
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      overlay.setAttribute('aria-hidden', 'true');
    };
    toggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
      if (open) {
        const first = overlay.querySelector('a');
        if (first) first.focus();
      }
    });
    overlay.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
        closeMenu();
        toggle.focus();
      }
    });
  }

  /* ============================================================
     Lenis smooth scroll
     ============================================================ */
  let lenis = null;
  if (!prefersReduced && typeof Lenis !== 'undefined') {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }
  // anchor links -> lenis or native
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id === '#' || id === '#top') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -70 });
      else target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ============================================================
     GSAP reveals + parallax + counters
     ============================================================ */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    if (lenis) lenis.on('scroll', ScrollTrigger.update);

    if (!prefersReduced) {
      // hero parallax
      gsap.to('.hero__img', {
        yPercent: 14, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });

      // signature image parallax drift
      gsap.utils.toArray('.sig__img img').forEach((img) => {
        const row = img.closest('.sig__row');
        if (!row) return;
        gsap.fromTo(img, { yPercent: -6 }, {
          yPercent: 6, ease: 'none',
          scrollTrigger: { trigger: row, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });
    }
  }

  /* ---------- IntersectionObserver reveals ---------- */
  const revealEls = [];
  document.querySelectorAll('.story__text, .story__media, .sig__copy, .sig__img, .feature, .visit__info, .visit__map, .banner__inner, .menu__head, .sig__head, .features__head')
    .forEach((el) => { el.classList.add('reveal'); revealEls.push(el); });
  document.querySelectorAll('.sig__img').forEach((el) => el.classList.add('reveal-img'));

  if (prefersReduced) {
    revealEls.forEach((el) => el.classList.add('is-in'));
    document.querySelectorAll('.reveal-img').forEach((el) => el.classList.add('is-in'));
  } else if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-in'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => io.observe(el));
    document.querySelectorAll('.reveal-img').forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-in'));
    document.querySelectorAll('.reveal-img').forEach((el) => el.classList.add('is-in'));
  }

  /* ---------- Stat counters ---------- */
  const counters = document.querySelectorAll('.stat__num[data-count]');
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    if (prefersReduced) { el.textContent = target.toFixed(decimals) + suffix; return; }
    const dur = 1400; const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (counters.length && 'IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach((c) => cio.observe(c));
  } else {
    counters.forEach((c) => animateCount(c));
  }

  /* ============================================================
     Swipers
     ============================================================ */
  if (typeof Swiper !== 'undefined') {
    if (document.querySelector('.gallery__swiper')) {
      new Swiper('.gallery__swiper', {
        slidesPerView: 'auto', spaceBetween: 18, centeredSlides: false, grabCursor: true,
        navigation: { nextEl: '.gallery__swiper .swiper-button-next', prevEl: '.gallery__swiper .swiper-button-prev' },
        pagination: { el: '.gallery__swiper .swiper-pagination', clickable: true },
        breakpoints: { 768: { spaceBetween: 28 } },
      });
    }

    if (document.querySelector('.reviews__swiper')) {
      new Swiper('.reviews__swiper', {
        slidesPerView: 1, spaceBetween: 40, loop: REVIEWS.length > 1,
        autoplay: prefersReduced ? false : { delay: 5500, disableOnInteraction: false },
        pagination: { el: '.reviews__pag', clickable: true },
      });
    }
  }
})();
