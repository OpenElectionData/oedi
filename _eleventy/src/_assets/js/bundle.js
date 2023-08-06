const Navigation = () => {
  const trigger = document.querySelector('.site-header__nav-trigger');
  const menu = document.querySelector('.site-header__nav-links');

  trigger.addEventListener('click', function () {
    if (menu.classList.contains('is-active')) {
      this.setAttribute('aria-expanded', 'false');
      this.classList.remove('is-active');
      menu.classList.remove('is-active');
    } else {
      menu.classList.add('is-active');
      this.setAttribute('aria-expanded', 'true');
      this.classList.add('is-active');
    }
  });
};

const NavLang = () => {
  const trigger = document.querySelector('.nav-lang__trigger');
  const menu = document.querySelector('.nav-lang__menu');

  trigger.addEventListener('click', function () {
    if (menu.classList.contains('is-active')) {
      this.setAttribute('aria-expanded', 'false');
      this.classList.remove('is-active');
      menu.classList.remove('is-active');
    } else {
      menu.classList.add('is-active');
      this.setAttribute('aria-expanded', 'true');
      this.classList.add('is-active');
    }
  });
};

const Dialogue = () => {
  // Get the dialog element (with the accessor method you want)
  const el = document.getElementById('dialog');

  // Instantiate a new A11yDialog module
  const dialog = new A11yDialog(el);

  dialog
    .on('show', () => (document.documentElement.style.overflowY = 'hidden'))
    .on('hide', () => (document.documentElement.style.overflowY = ''));
};

window.addEventListener('DOMContentLoaded', () => {
  Dialogue();
  Navigation();
  NavLang();
});
