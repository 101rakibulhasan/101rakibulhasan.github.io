//document.getElementById("about").addEventListener("click", about);
//document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('DOMContentLoaded', function () {
    const aboutStatus = document.querySelector('.about_status');
    const about_texts = document.querySelector('.about_texts');
    const service_items = document.querySelectorAll('#service_items li');
    const typewriterH1 = document.querySelector('.project_box h1');
    const typewriterSH1 = document.querySelector('#services h1');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is in view
    });

    observer.observe(aboutStatus);
    observer.observe(about_texts);
    observer.observe(typewriterH1);
    observer.observe(typewriterSH1);
    service_items.forEach(item => observer.observe(item));
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#pages ul li a');

    // Step 2: Add event listeners to the navigation links
    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const sectionId = link.id.replace('-link', '');
            const section = document.getElementById(sectionId);
            if (section) {
                // Step 3: Scroll to the corresponding section
                section.scrollIntoView({
                    behavior: 'smooth' // Smooth scrolling
                });
            }
        });
    });
});