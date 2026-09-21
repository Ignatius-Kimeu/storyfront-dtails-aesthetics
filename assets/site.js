/* D'tails Aesthetics — Storyfront demo. Vanilla, no dependencies. */
(function () {
  'use strict';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Splash: fade out once the page has painted ── */
  var splash = document.querySelector('.splash');
  if (splash) {
    var kill = function () {
      setTimeout(function () {
        splash.classList.add('gone');
        setTimeout(function () { splash.remove(); }, 800);
      }, reduced ? 0 : 520);
    };
    if (document.readyState === 'complete') kill();
    else window.addEventListener('load', kill);
    setTimeout(kill, 2600); // safety net on a slow connection
  }

  /* ── Smart sticky header: hides going down, returns on any upward scroll ── */
  var hdr = document.querySelector('.hdr');
  if (hdr) {
    var last = window.scrollY, ticking = false;
    var onScroll = function () {
      var y = window.scrollY;
      hdr.classList.toggle('scrolled', y > 10);
      if (y > last && y > 260) hdr.classList.add('tucked');
      else hdr.classList.remove('tucked');
      last = y; ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
    }, { passive: true });
  }

  /* ── Mobile nav ── */
  var burger = document.querySelector('.burger'), nav = document.querySelector('.nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Scroll reveal ── */
  var revealed = document.querySelectorAll('.rv, .arch, .eyebrow');
  if (!('IntersectionObserver' in window) || reduced) {
    Array.prototype.forEach.call(revealed, function (el) { el.classList.add('in-view'); });
  } else {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in-view'); ro.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    Array.prototype.forEach.call(revealed, function (el) { ro.observe(el); });

    // Failsafe. IntersectionObserver does not fire while a tab is hidden, so a
    // link opened in a background tab would sit on invisible content until it
    // gets focus. Reveal anything still waiting once the page is visible, and
    // again after a few seconds whatever happens — nothing should stay hidden.
    var revealAll = function () {
      Array.prototype.forEach.call(revealed, function (el) { el.classList.add('in-view'); });
    };
    if (document.visibilityState === 'hidden') {
      document.addEventListener('visibilitychange', function once() {
        if (document.visibilityState === 'visible') {
          document.removeEventListener('visibilitychange', once);
          setTimeout(revealAll, 1200);
        }
      });
    }
    setTimeout(revealAll, 4000);
  }

  /* ── Videos: muted autoplay on scroll, one soundtrack at a time ── */
  var films = document.querySelectorAll('.film video');
  if (films.length) {
    if ('IntersectionObserver' in window) {
      var vo = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          var v = en.target;
          if (en.isIntersecting) {
            if (v.preload === 'none') v.preload = 'auto';
            var p = v.play();
            if (p && p.catch) p.catch(function () { /* autoplay refused — poster stands in */ });
          } else {
            v.pause();
            if (!v.muted) { v.muted = true; syncBtn(v); }
          }
        });
      }, { threshold: 0.45 });
      Array.prototype.forEach.call(films, function (v) { vo.observe(v); });
    }

    var ON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
    var OFF = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="m23 9-6 6M17 9l6 6"/></svg>';

    function syncBtn(v) {
      var b = v.closest('.film').querySelector('.film__sound');
      if (!b) return;
      b.innerHTML = v.muted ? OFF : ON;
      b.setAttribute('aria-label', v.muted ? 'Turn sound on' : 'Turn sound off');
      b.setAttribute('aria-pressed', v.muted ? 'false' : 'true');
    }

    Array.prototype.forEach.call(document.querySelectorAll('.film__sound'), function (btn) {
      var v = btn.closest('.film').querySelector('video');
      syncBtn(v);
      btn.addEventListener('click', function () {
        var turningOn = v.muted;
        if (turningOn) {
          Array.prototype.forEach.call(films, function (o) {
            if (o !== v && !o.muted) { o.muted = true; syncBtn(o); }
          });
        }
        v.muted = !v.muted;
        if (!v.muted && v.paused) v.play().catch(function () {});
        syncBtn(v);
      });
    });
  }

  /* ── Gallery lightbox ── */
  var lb = document.querySelector('.lb');
  if (lb) {
    var shots = Array.prototype.slice.call(document.querySelectorAll('.gal button'));
    var img = lb.querySelector('img'),
        cap = lb.querySelector('.lb__cap'),
        num = lb.querySelector('.lb__n'),
        i = 0, opener = null;

    function show(n) {
      i = (n + shots.length) % shots.length;
      var t = shots[i].querySelector('img');
      img.src = t.dataset.full || t.src;
      img.alt = t.alt;
      cap.textContent = t.alt;
      num.textContent = (i + 1) + ' / ' + shots.length;
    }
    function open(n) {
      opener = shots[n];
      show(n);
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
      lb.querySelector('.lb__x').focus();
    }
    function close() {
      lb.classList.remove('open');
      document.body.style.overflow = '';
      if (opener) opener.focus();
    }
    shots.forEach(function (b, n) { b.addEventListener('click', function () { open(n); }); });
    lb.querySelector('.lb__x').addEventListener('click', close);
    lb.querySelector('.lb__p').addEventListener('click', function () { show(i - 1); });
    lb.querySelector('.lb__nx').addEventListener('click', function () { show(i + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') show(i + 1);
      else if (e.key === 'ArrowLeft') show(i - 1);
    });
  }

  /* ── Treatment filter (treatments page) ── */
  var filt = document.querySelector('[data-filter]');
  if (filt) {
    var rows = document.querySelectorAll('[data-cat]');
    var cats = document.querySelectorAll('.cat');
    filt.addEventListener('input', function () {
      var q = filt.value.trim().toLowerCase();
      Array.prototype.forEach.call(rows, function (r) {
        r.style.display = !q || r.textContent.toLowerCase().indexOf(q) > -1 ? '' : 'none';
      });
      Array.prototype.forEach.call(cats, function (c) {
        var any = c.querySelectorAll('[data-cat]:not([style*="none"])').length;
        c.style.display = any ? '' : 'none';
      });
      var empty = document.querySelector('.no-hits');
      if (empty) {
        var total = document.querySelectorAll('[data-cat]:not([style*="none"])').length;
        empty.hidden = total > 0;
      }
    });
  }
})();
