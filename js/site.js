/* Bru Hero Electrical — site scripts.
   Two jobs: the mobile menu, and turning the booking form into a pre-filled
   WhatsApp message. No dependencies. */

(function () {
  "use strict";

  var WHATSAPP_NUMBER = "27686214343";

  /* ---- Mobile menu ---------------------------------------------------- */
  var btn = document.getElementById("menuBtn"),
      nav = document.getElementById("mobileNav"),
      iconOpen = document.getElementById("iconOpen"),
      iconClose = document.getElementById("iconClose");

  if (btn && nav) {
    btn.addEventListener("click", function () {
      var isOpen = nav.style.display !== "block";
      nav.style.display = isOpen ? "block" : "none";
      iconOpen.style.display = isOpen ? "none" : "block";
      iconClose.style.display = isOpen ? "block" : "none";
      btn.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.style.display === "block") {
        btn.click();
        btn.focus();
      }
    });
  }

  /* ---- Booking form --------------------------------------------------- */
  var form = document.getElementById("bookingForm");
  if (!form) return;
  var status = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = form.elements.name.value.trim(),
        phone = form.elements.phone.value.trim(),
        service = form.elements.service.value,
        message = form.elements.message.value.trim();

    if (!name || !phone || !service) {
      status.textContent = "Add your name, phone number and the service you need so we can quote you.";
      status.className = "form-status form-status--error";
      form.elements[!name ? "name" : !phone ? "phone" : "service"].focus();
      return;
    }

    var text =
      "New job request from the website\n\n" +
      "Name: " + name + "\n" +
      "Phone: " + phone + "\n" +
      "Service: " + service + "\n" +
      "Details: " + (message || "-");

    status.textContent = "Opening WhatsApp with your details filled in. Send the message and we'll come back to you.";
    status.className = "form-status form-status--ok";

    window.open(
      "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text),
      "_blank",
      "noopener"
    );
  });
})();
