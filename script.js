// Toggle Theme
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark for premium feel
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
    } else {
        themeIcon.classList.remove('bx-sun');
        themeIcon.classList.add('bx-moon');
    }
}


// Menu Icon Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// Sticky Navbar & Active Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');
const header = document.querySelector('.header');

window.onscroll = () => {
    let top = window.scrollY;

    // Sticky header
    if (top > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    // Active link on scroll
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Avoid selecting social links manually if they point outside, but here they point internally via href="#id"
            let targetLink = document.querySelector('.navbar a[href*=' + id + ']');
            if (targetLink) {
                targetLink.classList.add('active');
            }
        }
    });

    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// Typed.js Animation
const typed = new Typed('.multiple-text', {
    strings: ['Data Analyst.', 'CS Engineering Student.', 'Problem Solver.'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});


// Scroll Reveal Animation (Intersection Observer for better performance)
const revealElements = document.querySelectorAll('.about-content, .skills-box, .project-card, .timeline-item, .list-card, .contact-container, .heading');

revealElements.forEach(el => {
    el.classList.add('reveal');
});

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});



let netflixProject = document.getElementById("projectNetflix");
netflixProject.addEventListener("click", ()=>{

})