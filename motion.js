/* MOTION ENGINE
    - Magnetic Cursor
    - Scroll-Linked Typography
    - Three.js Liquid Background
*/

document.addEventListener('mousemove', (e) => {
    gsap.to('#custom-cursor', {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
    });
});

// SCROLL REVEALS
gsap.utils.toArray('.reveal').forEach(elem => {
    gsap.from(elem, {
        scrollTrigger: elem,
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
    });
});

// VARIABLE FONT MORPHING
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const weight = 200 + (scrolled / 10);
    document.querySelector('h1').style.fontVariationSettings = `'wght' ${weight}`;
});
