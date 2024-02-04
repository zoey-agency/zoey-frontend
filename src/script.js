document.addEventListener('DOMContentLoaded', function() {
  const text = "your business with our customized\n software solutions.";
  let charIndex = 0;
  const textContainer = document.querySelector('.home-description span');

  function type() {
    const currentText = text.slice(0, ++charIndex);
    textContainer.innerHTML = currentText.replace(/\n/g, '<br>');

    if (charIndex < text.length) {
      setTimeout(type, 5000);      
    }
  }

  setInterval(type, 120);
});