document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('header')
    const toggleMobileMenu = document.querySelector("#mobile-menu-toggle")
    const toggleMobileMenuIcon = document.querySelector("#mobile-menu-toggle i")
    const menuLinks = document.querySelector(".menu-links")
    const menuLinksItem = document.querySelector(".menu-links ul")

    menuLinksItem.addEventListener("click", function () {
        menuLinks.classList.toggle("mobile-menu")
        toggleMobileMenuIcon.classList.replace("fa-xmark", "fa-bars")
    })
    
    toggleMobileMenu.addEventListener("click", function () {
        menuLinks.classList.toggle("mobile-menu")
        
        if (toggleMobileMenuIcon.classList.contains("fa-bars")) {
            toggleMobileMenuIcon.classList.replace("fa-bars", "fa-xmark")
        } else {
            toggleMobileMenuIcon.classList.replace("fa-xmark", "fa-bars")
        }
    })
    
    function highlightHeader () {
        if (window.scrollY > 0) {
            header.classList.add("highlight")
        } else {
            header.classList.remove("highlight")
        }
    }

    window.addEventListener("scroll", highlightHeader)
})
