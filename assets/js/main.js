/* =========================================

   HASSET DEREJE SYSTEM CONTROLLER

   ========================================= */



document.addEventListener("DOMContentLoaded", () => {

    

    // Page Load Animation

    setTimeout(() => {

        document.body.classList.add('loaded');

    }, 100);



    // Scroll Header Logic

    const header = document.getElementById('navbar');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 50) {

            header.classList.add('scrolled');

        } else {

            header.classList.remove('scrolled');

        }

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



    // Target elements

    document.querySelectorAll('.image-reveal, .text-content').forEach(el => {

        el.style.opacity = "0";

        el.style.transform = "translateY(30px)";

        el.style.transition = "all 0.8s ease-out";

        observer.observe(el);

    });

});



// Menu Toggle Logic

function toggleMenu() {

    const menu = document.getElementById('overlayMenu');

    menu.classList.toggle('active');

}

"
