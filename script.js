function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".humberger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// typed js

var options = {
    strings: [
        'Nafisatur Ramadhan'
    ],
    typeSpeed: 40,
    loop: false,
    loopCount: Infinity,
};

var typed = new Typed('#hero-titles', options);