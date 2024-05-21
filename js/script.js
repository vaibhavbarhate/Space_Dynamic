document.addEventListener('DOMContentLoaded', function () {
    // Get the navbar toggler button and the navbar collapse element
    var navbarToggle = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    // Function to close the dropdown menu
    function closeDropdown() {
        if (navbarCollapse.classList.contains('show')) {
            navbarToggle.click(); // Close the dropdown menu
        }
    }

    // Add click event listeners to all nav links to close the dropdown
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', closeDropdown);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    function changeActiveLink() {
        const scrollPosition = window.scrollY;

        navLinks.forEach((link) => {
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                navLinks.forEach((link) => link.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', changeActiveLink);
    changeActiveLink(); // Call the function to set the initial active link

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default behavior of anchor links
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById('loader').style.display = 'none';
    }, 3000); // 25 seconds
});

