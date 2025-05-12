document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const contactButton = document.querySelector('.contactbutton');
  const nav = document.querySelector('nav');
  const floatingLogo = document.querySelector('.floating-logo'); // logo
  const form = document.querySelector('.contact-form');

  // Otevření/uzavření menu
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  }

  // Scroll efekt pro skrytí navigace, tlačítka a loga
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
      if (nav) nav.classList.add('nav-hidden');
      if (contactButton) contactButton.classList.add('hidden');
      if (floatingLogo) floatingLogo.classList.add('hidden');  // Skrýt logo
    } else {
      if (nav) nav.classList.remove('nav-hidden');
      if (contactButton) contactButton.classList.remove('hidden');
      if (floatingLogo) floatingLogo.classList.remove('hidden');  // Zobrazit logo
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  // Odeslání formuláře pomocí AJAX
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let formData = new FormData(form);
  
      fetch('https://formspree.io/f/mnndjdaq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          alert('Děkujeme, vaše zpráva byla odeslána!');
        } else {
          alert('Došlo k chybě při odesílání formuláře.');
        }
      })
      .catch(error => {
        alert('Chyba odesílání formuláře.');
      });
    });
  }
});
