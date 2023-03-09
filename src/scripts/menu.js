let navbar = document.getElementById("navbar")

if (window.screen.width > 800) {

    window.onscroll = function (e) {
        var distanceScrolled = document.documentElement.scrollTop
        let screenLog = document.querySelector('body');

        if (window.screen.width < 768) {
            if (distanceScrolled > 20) {
                navbar.classList.add("navbar-glass")
            } else { navbar.classList.remove("navbar-glass") }
        } else {
            if (distanceScrolled > 20) {
                navbar.classList.add("navbar-glass")
            } else {
                navbar.classList.remove("navbar-glass")
                document.addEventListener('mousemove', logKey)
            }
        }
    }

    function logKey(e) {
        var distanceScrolled = document.documentElement.scrollTop
        if (e.clientY < 80 || distanceScrolled == 0) {
            navbar.style.top = "0px";
        } else {
            navbar.style.top = "-70px";
        }
    }
}