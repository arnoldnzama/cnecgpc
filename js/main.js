document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.lg\\:hidden');
  if (mobileMenuButton) {
    let mobileMenu = document.getElementById('mobile-nav');
    if (!mobileMenu) {
      mobileMenu = document.createElement('div');
      mobileMenu.id = 'mobile-nav';
      mobileMenu.className = 'fixed inset-0 bg-white z-50 hidden flex-col items-center justify-center';
      mobileMenu.innerHTML = `
        <button class="absolute top-6 right-6 text-gray-700" id="close-mobile-nav">
          <i class="ri-close-line text-3xl"></i>
        </button>
        <nav class="flex flex-col items-center gap-8">
          <a href="index.html" class="text-2xl text-gray-700 hover:text-primary nav-link py-2">Accueil</a>
          <a href="propos.html" class="text-2xl text-gray-700 hover:text-primary nav-link py-2">À propos</a>
          <a href="#" class="text-2xl text-gray-700 hover:text-primary nav-link py-2">Services</a>
          <a href="#" class="text-2xl text-gray-700 hover:text-primary nav-link py-2">Projets</a>
          <a href="#" class="text-2xl text-gray-700 hover:text-primary nav-link py-2">Actualités</a>
          <a href="#" class="text-2xl text-gray-700 hover:text-primary nav-link py-2">Contact</a>
        </nav>
      `;
      document.body.appendChild(mobileMenu);
    }

    // Ouvre le menu mobile
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
    });

    // Ferme le menu mobile
    document.getElementById('close-mobile-nav').addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
    });

    // Ferme le menu quand on clique sur un lien
    mobileMenu.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      });
    });
  }

  // Scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in, .scale-in').forEach((el) => {
    observer.observe(el);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});