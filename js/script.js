document.addEventListener('DOMContentLoaded', function () {
  const toggleMenu = document.querySelector('#toggle-menu')
  const toggleMenuIcon = document.querySelector('#toggle-menu i')
  const mobileMenu = document.querySelector('.mobile-links')
  const navBar = document.querySelector('nav')

  toggleMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle('active')

    if (toggleMenuIcon.classList.contains('fa-bars')) {
      toggleMenuIcon.classList.replace('fa-bars', 'fa-xmark')
    } else {
      toggleMenuIcon.classList.replace('fa-xmark', 'fa-bars')
    }
  })

  function toggleNavbarTransparency () {
    if (window.scrollY > 0) {
      navBar.classList.add('transparent')
    } else {
      navBar.classList.remove('transparent')
    }
  }

  window.addEventListener('scroll', toggleNavbarTransparency)
})
