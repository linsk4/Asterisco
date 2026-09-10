/* ==========================================================================
   ASTERISCO* — the only JavaScript on the site.

   Scope, deliberately: the mobile navigation toggle. Nothing here creates,
   measures or positions layout — all layout is CSS flexbox, so this file can
   be dropped entirely when the site is rebuilt in Elementor (its own nav
   widget handles the mobile menu).
   ========================================================================== */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("primary-menu");
  if (!toggle || !menu) return;

  var MOBILE = "(max-width: 860px)";

  function setOpen(open) {
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  toggle.addEventListener("click", function () {
    setOpen(!menu.classList.contains("is-open"));
  });

  // Close after following a link (same-page anchors would otherwise stay open)
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  // Close on Escape, returning focus to the toggle
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Close when clicking outside the header
  document.addEventListener("click", function (e) {
    if (!menu.classList.contains("is-open")) return;
    if (!e.target.closest(".site-header")) setOpen(false);
  });

  // Reset state when resizing back up to desktop
  var mq = window.matchMedia(MOBILE);
  var onChange = function (e) { if (!e.matches) setOpen(false); };
  if (mq.addEventListener) mq.addEventListener("change", onChange);
  else if (mq.addListener) mq.addListener(onChange);
})();
