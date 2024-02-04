document.addEventListener('DOMContentLoaded', function() {

  window.addEventListener('scroll', function() {
      var scrolled = window.scrollY;

      const nav = document.querySelector('nav');
      const bubbleNav = document.querySelector('.nav-test');

      if (scrolled > 90) {
          nav.style.opacity = '0';
          bubbleNav.style.opacity = '1';
          console.log('kaydoldu');
      }

      if (scrolled < 90) {
          nav.style.opacity = '1';
          bubbleNav.style.opacity = '0';
          console.log('geri geldi');
      }
  });
});
