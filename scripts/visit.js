/* ============================================
   EGYPTIAN MUSEUM - Visit Page
   Contact form + ticket booking button.
   Requires base.js (for window.showToast) first.
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // ---- Contact Form ----
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      if (name) {
        showToast('Thank you, ' + name + '! Your message has been sent.');
        this.reset();
      }
    });
  }

  // ---- Ticket Booking ----
  const ticketBtn = document.getElementById('book-tickets');
  if (ticketBtn) {
    ticketBtn.addEventListener('click', () => showToast('Redirecting to ticket booking...'));
  }
});
