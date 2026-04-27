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

document.addEventListener('DOMContentLoaded', function () {
    const scroll     = document.getElementById('expScroll');
    const arrowLeft  = document.getElementById('expArrowLeft');
    const arrowRight = document.getElementById('expArrowRight');
    const pathSvg    = document.getElementById('expPathSvg');
    const milestones = document.querySelectorAll('.exp-milestone');
    const contents   = document.querySelectorAll('.exp-content');
    const dots       = document.querySelectorAll('.exp-dot');
 
    function drawPath() {
        pathSvg.innerHTML = '';
        if (milestones.length < 2) return;
 
        /* 
         * Use offsetLeft/offsetTop relative to exp-scroll, not getBoundingClientRect.
         * This gives stable coords regardless of scroll position.
         */
        const points = [];
        milestones.forEach(function(m) {
            const dot = m.querySelector('.exp-dot');
            /* dot position relative to scroll container */
            let el = dot;
            let x = el.offsetWidth / 2;
            let y = el.offsetHeight / 2;
            while (el && el !== scroll) {
                x += el.offsetLeft;
                y += el.offsetTop;
                el = el.offsetParent;
            }
            points.push({ x: x, y: y });
        });
 
        /* SVG must be sized to the full scrollable width */
        pathSvg.setAttribute('width',  scroll.scrollWidth);
        pathSvg.setAttribute('height', scroll.offsetHeight);
        pathSvg.style.width  = scroll.scrollWidth  + 'px';
        pathSvg.style.height = scroll.offsetHeight + 'px';
 
        let d = 'M ' + points[0].x + ' ' + points[0].y;
        for (var i = 1; i < points.length; i++) {
            var cx = (points[i-1].x + points[i].x) / 2;
            d += ' C ' + cx + ' ' + points[i-1].y + ', '
                       + cx + ' ' + points[i].y   + ', '
                       + points[i].x + ' ' + points[i].y;
        }
 
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', 'rgba(245,222,179,0.35)');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('stroke-dasharray', '6 5');
        pathSvg.appendChild(path);
    }
 
    function updateArrows() {
        var atLeft  = scroll.scrollLeft <= 4;
        var atRight = scroll.scrollLeft >= scroll.scrollWidth - scroll.clientWidth - 4;
        arrowLeft.classList.toggle('hidden', atLeft);
        arrowRight.classList.toggle('hidden', atRight);
    }
 
    function updateDots() {
        var center = scroll.scrollLeft + scroll.clientWidth / 2;
        milestones.forEach(function(m, i) {
            /* milestone's left edge relative to scroll container */
            var mLeft = m.offsetLeft;
            var mCenter = mLeft + m.offsetWidth / 2;
            var isActive = Math.abs(mCenter - center) < scroll.clientWidth / 2;
            dots[i].classList.toggle('active', isActive);
            if (isActive) contents[i].classList.add('visible');
        });
    }
 
    function goDir(dir) {
        scroll.scrollBy({ left: dir * scroll.clientWidth, behavior: 'smooth' });
    }
 
    arrowLeft.addEventListener('click',  function() { goDir(-1); });
    arrowRight.addEventListener('click', function() { goDir(1);  });
 
    scroll.addEventListener('scroll', function() {
        updateArrows();
        updateDots();
        /* path stays fixed — no need to redraw on scroll since coords are scroll-relative */
    });
 
    window.addEventListener('resize', function() {
        drawPath();
        updateArrows();
        updateDots();
    });
 
    var expObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                document.querySelector('#experience h1').classList.add('animate');
                /* wait for layout then draw */
                setTimeout(function() {
                    drawPath();
                    updateArrows();
                    updateDots();
                }, 300);
                expObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
 
    expObserver.observe(document.getElementById('experience'));
 
    /* fallback: also draw after full page load */
    window.addEventListener('load', function() {
        setTimeout(function() { drawPath(); updateArrows(); updateDots(); }, 100);
    });
});