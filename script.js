// Main JS 

        /* ===================================
           HERO IMAGE SLIDER
        =================================== */

        const sliderImages = [
            "images/collection15.png",
            "images/collection34.jpg",
            "images/collection23.png",
            
        ];

        const sliderImage = document.getElementById("slider-image");

        let currentSlide = 0;

        function changeSlide() {

            if (!sliderImage) return;

            currentSlide++;

            if (currentSlide >= sliderImages.length) {
                currentSlide = 0;
            }

            sliderImage.style.opacity = "0";

            setTimeout(() => {

                sliderImage.src = sliderImages[currentSlide];

                sliderImage.style.opacity = "1";

            }, 300);

        }

        if (sliderImage) {

            sliderImage.style.transition =
                "opacity .6s ease";

            setInterval(changeSlide, 4000);
        }

// show more cards
const showMoreBtn =
document.getElementById("showMoreBtn");

const extraCollections =
document.getElementById("extraCollections");

if(showMoreBtn){

    showMoreBtn.addEventListener("click",()=>{

        extraCollections.classList.add("show");

        showMoreBtn.style.display="none";

        extraCollections.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    });

}





        /* ===================================
           PAGE SWITCHING
        =================================== */

        const navLinks =
            document.querySelectorAll(".nav-link");

        const pages =
            document.querySelectorAll(".page");

        function showPage(pageId) {

            pages.forEach(page => {
                page.classList.remove("active-page");
            });

            const selectedPage =
                document.getElementById(pageId);

            if (selectedPage) {
                selectedPage.classList.add("active-page");
            }

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            document
                .querySelector(`[data-page="${pageId}"]`)
                ?.classList.add("active");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            navbar.classList.remove("active");
        }

        navLinks.forEach(link => {

            link.addEventListener("click", function (e) {

                e.preventDefault();

                const pageId =
                    this.getAttribute("data-page");

                showPage(pageId);
            });

        });

        /* ===================================
           MOBILE MENU
        =================================== */

        const hamburger =
            document.getElementById("hamburger");

        const navbar =
            document.getElementById("navbar");

        if (hamburger) {

            hamburger.addEventListener("click", () => {

                navbar.classList.toggle("active");

            });

        }

        /* ===================================
           FAQ ACCORDION
        =================================== */

        const faqQuestions =
            document.querySelectorAll(".faq-question");

        faqQuestions.forEach(question => {

            question.addEventListener("click", () => {

                const answer =
                    question.nextElementSibling;

                const isOpen =
                    answer.style.display === "block";

                document
                    .querySelectorAll(".faq-answer")
                    .forEach(item => {

                        item.style.display = "none";

                    });

                if (!isOpen) {

                    answer.style.display = "block";

                }

            });

        });

        /* ===================================
           CONTACT FORM
        =================================== */

        const contactForm =
            document.querySelector(".contact-form");

        if (contactForm) {

            contactForm.addEventListener("submit", (e) => {

                e.preventDefault();

                alert(
                    "Thank you for contacting Eleganza by Ashraf. We will get back to you shortly."
                );

                contactForm.reset();

            });

        }

        /* ===================================
           CLOSE MOBILE MENU ON RESIZE
        =================================== */

        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {

                navbar.classList.remove("active");

            }

        });

        /* ===================================
           INITIAL PAGE
        =================================== */

        document.addEventListener(
            "DOMContentLoaded",
            () => {

                showPage("home");

            }
        );


    