// ============ PARTICLES.JS CONFIG ============
document.addEventListener('DOMContentLoaded', function () {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 40,
          density: { enable: true, value_area: 800 }
        },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: {
          value: 0.3,
          random: true,
          anim: { enable: false }
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.15,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 0.4 } },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  }

  // ============ SMOOTH SCROLL ============
  document.querySelectorAll('a[data-scroll]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
