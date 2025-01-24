document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');
    const navItems = navLinks.querySelectorAll('a'); // Get all navigation links

    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Add event listener to each navigation link
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});
