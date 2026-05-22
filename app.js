
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            gold: '#C9A84C',
            'gold-light': '#E2C87A',
            'gold-dark': '#A8852D',
            charcoal: '#111111',
            'charcoal-mid': '#1A1A1A',
            'charcoal-card': '#161616',
            'charcoal-border': '#2A2A2A',
          },
          fontFamily: {
            display: ['Bebas Neue', 'sans-serif'],
            serif: ['Playfair Display', 'serif'],
            body: ['DM Sans', 'sans-serif'],
          },
          letterSpacing: {
            widest2: '0.3em',
          }
        }
      }
    }
  


  function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  // Subtle scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .testimonial-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
