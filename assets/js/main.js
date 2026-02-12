/* =========================================
   HASSET DEREJE SYSTEM CONTROLLER
   VERSION: 2.1 (UNIFIED NAVIGATION)
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    
    // Fail-safe Page Visibility
    document.body.style.opacity = "1";
    document.body.classList.add('loaded');

    // Navigation Elements
    const header = document.getElementById('navbar');
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // Scroll Header Logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Logic
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Lock Scroll
        });
    }

    if (closeBtn && mobileMenu) {
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto'; // Unlock Scroll
        });
    }

    // Close Mobile Menu on Link Click
    const menuLinks = document.querySelectorAll('.overlay-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Target elements for reveal animations
    document.querySelectorAll('.image-reveal, .text-content, .news-card, .stat-card').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)";
        observer.observe(el);
    });
});

// Legacy Toggle (Maintained for backward compatibility)
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
        const isActive = mobileMenu.classList.contains('active');
        document.body.style.overflow = isActive ? 'hidden' : 'auto';
    }
}
