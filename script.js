document.addEventListener("DOMContentLoaded", function () {

  // ================= LIGHTBOX =================
  const galleryImages = document.querySelectorAll('.gallery-grid img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-image');
  const lightboxClose = document.querySelector('.lightbox .close');

  if (galleryImages.length && lightbox && lightboxImg && lightboxClose) {
    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
      });
    });

    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }

  // ================= FORM =================
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for reaching out! We'll get back to you soon.");
      this.reset();
    });
  }

  // ================= CAROUSEL =================
  const track = document.querySelector('.logos-track');
  if (track) {
    track.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });

    track.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
  }

  // ================= HAMBURGER =================
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

});

  // ================= Hero ganti ganti =================


const hero = document.querySelector('.hero');

const images = [
  'images/hero1.jpg',
  'images/hero2.jpg',
  'images/hero3.jpg'
];

let index = 0;

function changeHeroBg() {
  index = (index + 1) % images.length;
  hero.style.backgroundImage = `url(${images[index]})`;
}

// initial load
hero.style.backgroundImage = `url(${images[0]})`;

// ganti tiap 7 detik
setInterval(changeHeroBg, 7000);