// Page behavior only — all text lives in index.html.
(function () {
  "use strict";
  function $(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }

  // ---------- Calendly (free embed, loads when the booking section is near) ----------
  var cal = document.querySelector("[data-calendly]");
  if (cal) {
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

  // ---------- Reveal on scroll ----------
  var items = $(".reveal");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -6% 0px" });
    items.forEach(function (n) { io.observe(n); });
  } else items.forEach(function (n) { n.classList.add("in"); });
})();
