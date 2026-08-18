(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;
  function desktop() { return window.matchMedia("(min-width: 48rem)").matches; }
  function close() { toggle.setAttribute("aria-expanded", "false"); nav.hidden = true; }
  function open() { toggle.setAttribute("aria-expanded", "true"); nav.hidden = false; }
  function sync() {
    if (desktop()) { nav.hidden = false; toggle.setAttribute("aria-expanded", "true"); }
    else if (toggle.getAttribute("aria-expanded") !== "true") nav.hidden = true;
  }
  toggle.addEventListener("click", function () {
    if (toggle.getAttribute("aria-expanded") === "true") close(); else open();
  });
  nav.addEventListener("click", function (e) {
    if (!desktop() && e.target.closest("a")) close();
  });
  window.addEventListener("resize", sync);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !desktop()) close();
  });
  sync();
})();
