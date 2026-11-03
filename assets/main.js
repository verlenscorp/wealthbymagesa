(function () {
  "use strict";
  var S = window.SITE;
  function $(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function get(path) { return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, S); }
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }

  function unsplash(url, w) {
    return /images\.unsplash\.com/.test(url) ? url.split("?")[0] + "?auto=format&fit=crop&w=" + w + "&q=72" : url;
  }

  // ---------- Text bindings ----------
  $("[data-t]").forEach(function (n) { var v = get(n.getAttribute("data-t")); if (v != null) n.textContent = v; });
  $("[data-list]").forEach(function (ul) {
    (get(ul.getAttribute("data-list")) || []).forEach(function (t) { ul.appendChild(el("li", null, t)); });
  });
  $("[data-year]").forEach(function (n) { n.textContent = new Date().getFullYear(); });

  // ---------- Links ----------
  var digits = "+1" + S.phone.replace(/\D/g, "");
  $("[data-sms]").forEach(function (a) { a.href = "sms:" + digits + "?&body=" + encodeURIComponent(S.textKeyword); });
  $("[data-tel]").forEach(function (a) { a.href = "tel:" + digits; });
  $("[data-email]").forEach(function (a) { a.href = "mailto:" + S.email + "?subject=" + encodeURIComponent("Financial Check-Up"); });
  $("[data-ig]").forEach(function (a) { a.href = "https://instagram.com/" + S.instagram; });

  // ---------- Sections ----------
  $('[data-render="steps"]').forEach(function (ol) {
    S.steps.forEach(function (s, i) {
      var li = el("li", "step reveal");
      li.appendChild(el("span", "step__n", String(i + 1)));
      li.appendChild(el("h3", null, s.title));
      li.appendChild(el("p", null, s.text));
      ol.appendChild(li);
    });
  });
  $('[data-render="transparency"]').forEach(function (box) {
    S.transparency.points.forEach(function (p) {
      var d = el("div", "talk__item reveal");
      d.appendChild(el("h3", null, p.title));
      d.appendChild(el("p", null, p.text));
      box.appendChild(d);
    });
  });
  $('[data-render="credentials"]').forEach(function (ul) {
    if (!S.credentials || !S.credentials.length) { ul.remove(); return; }
    S.credentials.forEach(function (c) {
      var li = el("li");
      li.appendChild(el("b", null, c.label));
      var d = c.link ? el("a", null, c.detail + " — verify ↗") : el("span", null, c.detail);
      if (c.link) { d.href = c.link; d.target = "_blank"; d.rel = "noopener"; }
      li.appendChild(d);
      ul.appendChild(li);
    });
  });
  if (S.checkupLength) {
    $("ul.promises").forEach(function (ul) { ul.insertBefore(el("li", null, S.checkupLength), ul.firstChild); });
  }
  $('[data-render="audiences"]').forEach(function (box) {
    S.audiences.forEach(function (a, i) {
      var c = el("article", "person reveal person--" + (i % 4));
      if (a.image) {
        var fig = el("div", "person__img");
        var img = el("img");
        img.src = unsplash(a.image, 700);
        img.alt = a.alt || "";
        img.loading = "lazy";
        fig.appendChild(img);
        c.appendChild(fig);
      }
      c.appendChild(el("h3", null, a.title));
      c.appendChild(el("p", null, a.text));
      box.appendChild(c);
    });
  });
  $('[data-render="pillars"]').forEach(function (box) {
    S.pillars.forEach(function (p, i) {
      var c = el("article", "pillar reveal");
      c.appendChild(el("span", "pillar__n", "0" + (i + 1)));
      c.appendChild(el("h3", null, p.title));
      var ul = el("ul");
      p.items.forEach(function (t) { ul.appendChild(el("li", null, t)); });
      c.appendChild(ul);
      box.appendChild(c);
    });
  });
  $('[data-render="story"]').forEach(function (box) {
    S.story.paragraphs.forEach(function (t) { box.appendChild(el("p", "reveal", t)); });
  });
  if (S.reviews && S.reviews.length) {
    document.getElementById("reviews").hidden = false;
    $('[data-render="reviews"]').forEach(function (box) {
      S.reviews.forEach(function (r) {
        var f = el("figure", "review reveal");
        f.appendChild(el("blockquote", null, "“" + r.text + "”"));
        var cap = el("figcaption", null, r.name);
        if (r.detail) cap.appendChild(el("small", null, r.detail));
        f.appendChild(cap);
        box.appendChild(f);
      });
    });
  }
  $('[data-render="faq"]').forEach(function (box) {
    S.faq.forEach(function (f, i) {
      var d = el("details", "qa reveal");
      if (i === 0) d.open = true;
      d.appendChild(el("summary", null, f.q));
      d.appendChild(el("p", null, f.a));
      box.appendChild(d);
    });
  });

  // Hometown photo
  $('[data-img="hometown"]').forEach(function (img) {
    if (!S.hometown || !S.hometown.image) { img.closest("section").hidden = true; return; }
    img.src = unsplash(S.hometown.image, 1400);
    img.alt = S.hometown.alt || "";
  });

  $('[data-img="faq"]').forEach(function (img) {
    if (!S.faqImage) { img.parentNode.remove(); return; }
    img.src = unsplash(S.faqImage.image, 800);
    img.alt = S.faqImage.alt || "";
  });

  // Marquee of everything covered on the check-up (duplicated for a seamless loop)
  $('[data-render="marquee"]').forEach(function (track) {
    var items = [];
    S.pillars.forEach(function (p) { items = items.concat(p.items); });
    for (var k = 0; k < 2; k++) {
      items.forEach(function (t) { track.appendChild(el("span", null, t)); track.appendChild(el("i")); });
    }
  });

  // Geometric shapes drift with the mouse and the scroll
  var shapes = $(".g[data-depth]");
  if (shapes.length && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var mx = 0, my = 0, ticking = false;
    var paint = function () {
      ticking = false;
      shapes.forEach(function (s) {
        var d = +s.getAttribute("data-depth");
        var r = s.parentNode.getBoundingClientRect();
        var sy = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
        s.style.translate = (mx * d) + "px " + (my * d + sy * d * 3) + "px";
      });
    };
    var queue = function () { if (!ticking) { ticking = true; requestAnimationFrame(paint); } };
    addEventListener("mousemove", function (e) { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; queue(); }, { passive: true });
    addEventListener("scroll", queue, { passive: true });
    paint();
  }

  // ---------- Calendly (free embed, loads when the booking section is near) ----------
  var cal = document.querySelector("[data-calendly]");
  if (cal) {
    cal.setAttribute("data-url", S.calendly + "?hide_gdpr_banner=1");
    var loadCal = function () {
      if (loadCal.done) return; loadCal.done = true;
      var s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    };
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (e, o) { if (e[0].isIntersecting) { loadCal(); o.disconnect(); } }, { rootMargin: "800px" }).observe(cal);
    } else loadCal();
  }

  // ---------- Nav ----------
  var nav = document.querySelector(".nav"), btn = document.querySelector(".nav__toggle"), menu = document.getElementById("menu");
  function onScroll() { nav.classList.toggle("is-stuck", scrollY > 10); document.body.classList.toggle("show-mbar", scrollY > 500); }
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  function setMenu(open) {
    btn.setAttribute("aria-expanded", open); btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.hidden = !open; nav.classList.toggle("is-open", open);
  }
  btn.addEventListener("click", function () { setMenu(btn.getAttribute("aria-expanded") !== "true"); });
  $("a", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  // ---------- Reveal ----------
  var items = $(".reveal, .steps-wrap, .head, .book__copy");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -6% 0px" });
    items.forEach(function (n) { io.observe(n); });
  } else items.forEach(function (n) { n.classList.add("in"); });
})();
