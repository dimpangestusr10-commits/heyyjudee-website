/* ======================================================
   HEYYJUDEE.OFFICIAL
   PREMIUM WEBSITE — FINAL JAVASCRIPT
====================================================== */

"use strict";


/* ======================================================
   CONFIG
====================================================== */

const whatsappNumber = "6282287128702";


/* ======================================================
   NAVBAR — ACTIVE PAGE
====================================================== */

const currentPage =
    window.location.pathname.split("/").pop() ||
    "index.html";

const navLinks =
    document.querySelectorAll("#mainNav a");

navLinks.forEach((link) => {

    const href =
        link.getAttribute("href");

    if (!href) return;

    const linkPage =
        href.split("/").pop();

    if (linkPage === currentPage) {

        link.classList.add("active");

    }

});


/* ======================================================
   MOBILE MENU
====================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            const isOpen =
                mainNav.classList.toggle("show");

            menuToggle.classList.toggle(
                "active",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        }
    );


    navLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                closeMobileMenu();

            }
        );

    });


    document.addEventListener(
        "click",
        (event) => {

            if (
                !event.target.closest(".navbar")
            ) {

                closeMobileMenu();

            }

        }
    );

}


function closeMobileMenu() {

    if (!mainNav || !menuToggle) return;

    mainNav.classList.remove("show");

    menuToggle.classList.remove("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

}


/* ======================================================
   NAVBAR SCROLL EFFECT
====================================================== */

const navbar =
    document.querySelector(".navbar");


function updateNavbar() {

    if (!navbar) return;


    if (window.scrollY > 30) {

        navbar.style.background =
            "rgba(6, 16, 28, 0.94)";

        navbar.style.boxShadow =
            "0 15px 45px rgba(0,0,0,0.28)";

    } else {

        navbar.style.background =
            "rgba(6, 16, 28, 0.84)";

        navbar.style.boxShadow =
            "0 10px 40px rgba(0,0,0,0.18)";

    }

}


window.addEventListener(
    "scroll",
    updateNavbar,
    {
        passive: true
    }
);

updateNavbar();


/* ======================================================
   SERVICE MODAL
====================================================== */

const modal =
    document.getElementById("layananModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalIcon =
    document.getElementById("modalIcon");

const modalWhatsapp =
    document.getElementById("modalWhatsapp");

const closeModalBtn =
    document.getElementById("closeModalBtn");

const serviceCards =
    document.querySelectorAll(".open-modal");


if (
    modal &&
    modalTitle &&
    modalDescription &&
    modalIcon &&
    modalWhatsapp
) {

    serviceCards.forEach((card) => {

        card.addEventListener(
            "click",
            () => {

                const title =
                    card.dataset.title ||
                    "Layanan";

                const description =
                    card.dataset.description ||
                    "";

                const icon =
                    card.dataset.icon ||
                    "✨";


                modalTitle.textContent =
                    title;

                modalDescription.textContent =
                    description;

                modalIcon.textContent =
                    icon;


                const message =
`Halo HeyyJudee.Official 👋

Saya ingin bertanya mengenai layanan:

📌 ${title}

Mohon informasi mengenai harga, estimasi pengerjaan, dan prosedur order.`;


                modalWhatsapp.href =
                    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


                modal.classList.add("show");

                document.body.style.overflow =
                    "hidden";

            }
        );

    });

}


/* ======================================================
   CLOSE SERVICE MODAL
====================================================== */

function closeServiceModal() {

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow =
        "";

}


if (closeModalBtn) {

    closeModalBtn.addEventListener(
        "click",
        closeServiceModal
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        (event) => {

            if (event.target === modal) {

                closeServiceModal();

            }

        }
    );

}


/* ======================================================
   PRICE → WHATSAPP
====================================================== */

const priceButtons =
    document.querySelectorAll(".price-wa");


priceButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const service =
                button.dataset.service ||
                "Layanan";

            const price =
                button.dataset.price ||
                "-";


            const message =
`Halo HeyyJudee.Official 👋

Saya tertarik dengan layanan:

📌 Layanan: ${service}
💰 Harga: ${price}

Saya ingin konsultasi mengenai detail kebutuhan dan estimasi pengerjaannya.`;


            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

});


/* ======================================================
   FAQ ACCORDION
====================================================== */

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach((item) => {

    const question =
        item.querySelector(".faq-question");

    if (!question) return;


    question.addEventListener(
        "click",
        () => {

            const isActive =
                item.classList.contains(
                    "active"
                );


            faqItems.forEach(
                (faq) => {

                    faq.classList.remove(
                        "active"
                    );

                }
            );


            if (!isActive) {

                item.classList.add(
                    "active"
                );

            }

        }
    );

});


/* ======================================================
   PREMIUM SCROLL REVEAL
====================================================== */

const revealSelectors = [

    ".premium-service-card",

    ".trust-strip-item",

    ".experience-highlight-card",

    ".process-card",

    ".premium-testimonial-card",

    ".service-card",

    ".price-card",

    ".why-grid article",

    ".testimonial-card",

    ".contact-info-card",

    ".certificate-grid article",

    ".order-flow-grid article"

];


const revealElements =
    document.querySelectorAll(
        revealSelectors.join(",")
    );


revealElements.forEach(
    (element, index) => {

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(24px)";

        element.style.transition =
            `
            opacity 0.65s ease,
            transform 0.65s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease
            `;

        element.dataset.revealDelay =
            String(
                Math.min(
                    index % 4,
                    3
                ) * 80
            );

    }
);


/* ======================================================
   INTERSECTION OBSERVER
====================================================== */

if (
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        const element =
                            entry.target;

                        const delay =
                            Number(
                                element.dataset
                                    .revealDelay ||
                                0
                            );


                        setTimeout(
                            () => {

                                element.style.opacity =
                                    "1";

                                element.style.transform =
                                    "translateY(0)";

                            },
                            delay
                        );


                        observer.unobserve(
                            element
                        );

                    }
                );

            },

            {
                threshold: 0.12,
                rootMargin:
                    "0px 0px -40px 0px"
            }

        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        (element) => {

            element.style.opacity =
                "1";

            element.style.transform =
                "translateY(0)";

        }
    );

}


/* ======================================================
   HERO LOAD ANIMATION
====================================================== */

const heroContent =
    document.querySelector(
        ".premium-hero-content"
    );

const heroVisual =
    document.querySelector(
        ".premium-hero-visual"
    );


if (heroContent) {

    heroContent.style.opacity =
        "0";

    heroContent.style.transform =
        "translateY(20px)";

    heroContent.style.transition =
        `
        opacity 0.8s ease,
        transform 0.8s ease
        `;

}


if (heroVisual) {

    heroVisual.style.opacity =
        "0";

    heroVisual.style.transform =
        "translateY(20px) scale(0.98)";

    heroVisual.style.transition =
        `
        opacity 0.9s ease,
        transform 0.9s ease
        `;

}


window.addEventListener(
    "load",
    () => {

        if (heroContent) {

            setTimeout(
                () => {

                    heroContent.style.opacity =
                        "1";

                    heroContent.style.transform =
                        "translateY(0)";

                },
                100
            );

        }


        if (heroVisual) {

            setTimeout(
                () => {

                    heroVisual.style.opacity =
                        "1";

                    heroVisual.style.transform =
                        "translateY(0) scale(1)";

                },
                240
            );

        }

    }
);


/* ======================================================
   HERO CARD MOUSE EFFECT
====================================================== */

const heroLogoCard =
    document.querySelector(
        ".hero-logo-card"
    );


if (
    heroLogoCard &&
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    heroLogoCard.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroLogoCard.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateY =
                ((x - centerX) /
                    centerX) * 5;

            const rotateX =
                -(
                    (y - centerY) /
                    centerY
                ) * 5;


            heroLogoCard.style.animation =
                "none";


            heroLogoCard.style.transform =
                `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-5px)
                `;

        }
    );


    heroLogoCard.addEventListener(
        "mouseleave",
        () => {

            heroLogoCard.style.transform =
                "";

            heroLogoCard.style.animation =
                "";

        }
    );

}


/* ======================================================
   ESCAPE KEY
====================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key !== "Escape") {
            return;
        }


        closeServiceModal();

        closeMobileMenu();

    }
);


/* ======================================================
   REDUCED MOTION ACCESSIBILITY
====================================================== */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (prefersReducedMotion.matches) {

    revealElements.forEach(
        (element) => {

            element.style.opacity =
                "1";

            element.style.transform =
                "none";

        }
    );


    if (heroContent) {

        heroContent.style.opacity =
            "1";

        heroContent.style.transform =
            "none";

    }


    if (heroVisual) {

        heroVisual.style.opacity =
            "1";

        heroVisual.style.transform =
            "none";

    }

}