document.addEventListener('DOMContentLoaded', function () {
  const toggleMenu = document.querySelector('#toggle-menu')
  const toggleMenuIcon = document.querySelector('#toggle-menu i')
  const mobileMenu = document.querySelector('.mobile-links')

  toggleMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle('active')

    if (toggleMenuIcon.classList.contains('fa-bars')) {
      toggleMenuIcon.classList.replace('fa-bars', 'fa-xmark')
    } else {
      toggleMenuIcon.classList.replace('fa-xmark', 'fa-bars')
    }
  })
})
