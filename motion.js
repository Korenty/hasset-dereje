/* motion.js - The Brain of the Royal System */
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial Fade In
    gsap.to("body", { opacity: 1, duration: 1.2 });

    // Hero Reveals
    gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
    });

    // Global Scroll Reveals
    gsap.utils.toArray('.reveal-up').forEach(elem => {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 90%"
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "expo.out"
        });
    });

    // Image Frame Reveals
    gsap.utils.toArray('.reveal-frame').forEach(frame => {
        ScrollTrigger.create({
            trigger: frame,
            start: "top 80%",
            onEnter: () => frame.classList.add('active')
        });
    });

    // Page Transition Interceptor
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) return; // Ignore anchors
            
            e.preventDefault();
            const tl = gsap.timeline();
            
            tl.to(".page-transition-overlay", {
                y: "0%",
                duration: 0.8,
                ease: "power4.inOut"
            }).to(".transition-logo", {
                opacity: 1,
                duration: 0.4
            }).then(() => {
                window.location.href = href;
            });
        });
    });

    // Navbar Background on Scroll
    ScrollTrigger.create({
        start: "top -100",
        onUpdate: (self) => {
            const nav = document.getElementById('navbar');
            if(self.direction === 1) {
                nav.style.background = "rgba(10, 47, 31, 0.95)";
                nav.style.padding = "20px 50px";
            } else if (self.scroll() < 100) {
                nav.style.background = "transparent";
                nav.style.padding = "32px 50px";
            }
        }
    });
});
