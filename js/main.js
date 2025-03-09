document.addEventListener("DOMContentLoaded", function () {
   
    const navLinks = document.querySelectorAll(".nav-link");
    
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                navLinks.forEach(nav => nav.classList.remove("active"));
                this.classList.add("active");
            });
        });
    }

  
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,  
            once: true      
        });
    }

   
    function startCounter(id, start, end, duration) {
        let element = document.getElementById(id);
        if (!element) {
            console.warn(`Element with ID '${id}' not found.`);
            return;
        }

        let range = end - start;
        let stepTime = Math.abs(Math.floor(duration / range));
        let current = start;
        
        let timer = setInterval(function () {
            current += 1;
            element.innerText = current;
            if (current >= end) {
                clearInterval(timer);
            }
        }, stepTime);
    }


    startCounter('clients', 0, 32, 2000);
    startCounter('projects', 0, 1453, 2000);
    startCounter('hours', 0, 521, 2000);
    startCounter('workers', 0, 233, 2000);


    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function () {
            this.classList.toggle('btn-dark');
            this.classList.toggle('btn-light');
        });
    } else {
        console.warn("Element with ID 'learnMoreBtn' not found.");
    }
});



// section 7
  var swiper = new Swiper('.swiper-container', {
    loop: true, 
    slidesPerView: 3, 
    spaceBetween: 0, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});




