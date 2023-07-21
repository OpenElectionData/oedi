const NavLang = () => {
  const trigger = document.querySelector('.nav-lang__trigger')
  const menu = document.querySelector('.nav-lang__menu')

  trigger.addEventListener('click', function() {
    if (menu.classList.contains('is-active')) {
      this.setAttribute('aria-expanded', 'false')
      this.classList.remove('is-active')
      menu.classList.remove('is-active')
    } else {
      menu.classList.add('is-active')
      this.setAttribute('aria-expanded', 'true')
      this.classList.add('is-active')
    }
  })
}

export default NavLang
