(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var form = document.querySelector("[data-quote-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (form.querySelector('[name="name"]') || {}).value || "";
      var email = (form.querySelector('[name="email"]') || {}).value || "";
      var phone = (form.querySelector('[name="phone"]') || {}).value || "";
      var address = (form.querySelector('[name="address"]') || {}).value || "";
      var message = (form.querySelector('[name="message"]') || {}).value || "";
      var lines = [
        "Free quote request from the Your Way site preview.",
        "",
        "Name: " + name,
        "Email: " + email,
        "Phone: " + phone,
        "Address: " + address,
        "",
        message
      ];
      var href =
        "mailto:YourwayHIHSllc@gmail.com?subject=" +
        encodeURIComponent("Quote request — Your Way Home Improvements") +
        "&body=" +
        encodeURIComponent(lines.join("\n"));
      window.location.href = href;
    });
  }
})();
