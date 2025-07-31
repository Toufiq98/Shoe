// Initialize Animate on Scroll
AOS.init({
  duration: 1000,
  once: true,
  offset: 50,
});

// Simple parallax effect
window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".parallax-bg");
  if (parallax) {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
  }
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    // Close mobile nav on link click
    if (document.getElementById("mobile-nav").classList.contains("open")) {
      document.getElementById("mobile-nav").classList.remove("open");
    }
  });
});

document
  .getElementById("subscribeBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent actual form submission (if needed)

    Swal.fire({
      title: "Subscribed!",
      text: "Thank you for subscribing.",
      icon: "success",
      confirmButtonText: "OK",
    });
  });

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileNav = document.getElementById("mobile-nav");

mobileMenuButton.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});
