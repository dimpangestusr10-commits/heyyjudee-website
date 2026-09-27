// ======================================================
// HEYYJUDEE.OFFICIAL
// FINAL MULTI-PAGE JAVASCRIPT
// ======================================================

const whatsappNumber = "6282827128702";


// ======================================================
// MOBILE HAMBURGER MENU
// ======================================================

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

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

    });


    const navLinks =
        mainNav.querySelectorAll("a");


    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("show");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    document.addEventListener("click", (event) => {

        const clickedInsideNavbar =
            event.target.closest(".navbar");

        if (!clickedInsideNavbar) {

            mainNav.classList.remove("show");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}


// ======================================================
// ACTIVE MENU OTOMATIS
// ======================================================

const currentPage =
    window.location.pathname
        .split("/")
        .pop() || "index.html";


document
    .querySelectorAll("#mainNav a")
    .forEach((link) => {

        const linkPage =
            link
                .getAttribute("href")
                .split("/")
                .pop();


        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });


// ======================================================
// SERVICE MODAL
// ======================================================

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

        card.addEventListener("click", () => {

            const title =
                card.dataset.title || "Layanan";

            const description =
                card.dataset.description || "";

            const icon =
                card.dataset.icon || "✨";


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

Mohon informasi lebih lanjut mengenai harga, estimasi pengerjaan, dan prosedur order.`;


            modalWhatsapp.href =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


            modal.classList.add("show");

            document.body.style.overflow =
                "hidden";

        });

    });

}


// ======================================================
// CLOSE SERVICE MODAL
// ======================================================

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

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            closeServiceModal();

        }

    });

}


// ======================================================
// PRICE BUTTON → WHATSAPP
// ======================================================

const priceButtons =
    document.querySelectorAll(".price-wa");


priceButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const service =
            button.dataset.service || "Layanan";

        const price =
            button.dataset.price || "-";


        const message =
`Halo HeyyJudee.Official 👋

Saya tertarik dengan layanan berikut:

📌 Layanan: ${service}
💰 Harga: ${price}

Saya ingin konsultasi mengenai detail kebutuhan dan estimasi pengerjaannya.`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    });

});


// ======================================================
// FAQ ACCORDION
// ======================================================

const faqItems =
    document.querySelectorAll(".faq-item");


faqItems.forEach((item) => {

    const question =
        item.querySelector(".faq-question");

    if (!question) return;


    question.addEventListener("click", () => {

        const isActive =
            item.classList.contains("active");


        faqItems.forEach((otherItem) => {

            otherItem.classList.remove("active");

        });


        if (!isActive) {

            item.classList.add("active");

        }

    });

});


// ======================================================
// ESC KEY
// ======================================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeServiceModal();


        if (mainNav && menuToggle) {

            mainNav.classList.remove("show");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }

});