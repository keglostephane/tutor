document.addEventListener("DOMContentLoaded", function () {
    const mainHeader = document.getElementById("main-header")
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
    const mobileMenuToggleIcon = document.getElementById("mobile-menu-toggle-icon")
    const mainMenu = document.getElementById("main-menu")
    const mainMenuLinks = document.getElementById("main-menu-links")

    mainMenuLinks.addEventListener("click", function () {
        mainMenu.classList.toggle("mobile-menu")
        mobileMenuToggleIcon.classList.replace("fa-xmark", "fa-bars")
    })
    
    mobileMenuToggle.addEventListener("click", function () {
        mainMenu.classList.toggle("mobile-menu")
        
        if (mobileMenuToggleIcon.classList.contains("fa-bars")) {
            mobileMenuToggleIcon.classList.replace("fa-bars", "fa-xmark")
        } else {
            mobileMenuToggleIcon.classList.replace("fa-xmark", "fa-bars")
        }
    })
    
    function highlightMainHeader () {
        if (window.scrollY > 0) {
            mainHeader.classList.add("highlight")
        } else {
            mainHeader.classList.remove("highlight")
        }
    }

    window.addEventListener("scroll", highlightMainHeader)
})
