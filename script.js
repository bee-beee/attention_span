/* ==========================================================
   WHY IS ATTENTION SPAN DECREASING?
   PREMIUM RESEARCH ARTICLE INTERACTIONS
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initReadingProgress();
    initScrollReveal();
    initActiveTOC();
    initNeuralParallax();
    initImageFadeIns();
    initCardInteractions();
    initReadingEnhancements();
    initSmoothSectionEffects();

});

/* ==========================================================
   READING PROGRESS BAR
========================================================== */

function initReadingProgress() {

    const progressBar =
        document.getElementById("progress-bar");

    window.addEventListener("scroll", () => {

        const scrollTop =
            window.scrollY;

        const docHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            (scrollTop / docHeight) * 100;

        progressBar.style.width =
            `${progress}%`;

    });

}

/* ==========================================================
   SCROLL REVEAL ANIMATION
========================================================== */

function initScrollReveal() {

    const elements =
        document.querySelectorAll(".reveal");

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    elements.forEach(element => {
        observer.observe(element);
    });

}

/* ==========================================================
   ACTIVE TABLE OF CONTENTS
========================================================== */

function initActiveTOC() {

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".toc a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {

                current =
                    section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("toc-active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {
                link.classList.add("toc-active");
            }

        });

    });

}

/* ==========================================================
   NEURAL BACKGROUND PARALLAX
========================================================== */

function initNeuralParallax() {

    const neurons =
        document.querySelectorAll(
            ".neural-background span"
        );

    window.addEventListener("mousemove", e => {

        const x =
            e.clientX / window.innerWidth;

        const y =
            e.clientY / window.innerHeight;

        neurons.forEach((node, index) => {

            const speed =
                (index + 1) * 4;

            const moveX =
                (x - 0.5) * speed;

            const moveY =
                (y - 0.5) * speed;

            node.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        });

    });

}

/* ==========================================================
   IMAGE PLACEHOLDER FADE INS
========================================================== */

function initImageFadeIns() {

    const images =
        document.querySelectorAll(
            ".image-placeholder"
        );

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.animate(
                            [
                                {
                                    opacity: 0,
                                    transform:
                                        "translateY(40px)"
                                },
                                {
                                    opacity: 1,
                                    transform:
                                        "translateY(0)"
                                }
                            ],
                            {
                                duration: 900,
                                easing:
                                    "cubic-bezier(.22,.61,.36,1)",
                                fill: "forwards"
                            }
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    images.forEach(image => {
        observer.observe(image);
    });

}

/* ==========================================================
   PREMIUM CARD INTERACTIONS
========================================================== */

function initCardInteractions() {

    const cards =
        document.querySelectorAll(
            ".info-card, .recovery-card, .practice-card"
        );

    cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            e => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    (y - centerY) / 20;

                const rotateY =
                    (centerX - x) / 20;

                card.style.transform =
                    `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-8px)
                    `;
            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "perspective(1000px) rotateX(0deg) rotateY(0deg)";

            }
        );

    });

}

/* ==========================================================
   READING ENHANCEMENTS
========================================================== */

function initReadingEnhancements() {

    const paragraphs =
        document.querySelectorAll(
            ".section p"
        );

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.transition =
                            "all 0.6s ease";

                        entry.target.style.opacity =
                            "1";

                    }

                });

            },
            {
                threshold: 0.3
            }
        );

    paragraphs.forEach(p => {

        p.style.opacity = "0.85";

        observer.observe(p);

    });

}

/* ==========================================================
   SMOOTH SECTION TRANSITIONS
========================================================== */

function initSmoothSectionEffects() {

    const sections =
        document.querySelectorAll(
            ".section"
        );

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.animate(
                            [
                                {
                                    opacity: 0.3,
                                    transform:
                                        "translateY(40px)"
                                },
                                {
                                    opacity: 1,
                                    transform:
                                        "translateY(0)"
                                }
                            ],
                            {
                                duration: 1000,
                                easing:
                                    "cubic-bezier(.16,1,.3,1)",
                                fill: "forwards"
                            }
                        );

                    }

                });

            },
            {
                threshold: 0.08
            }
        );

    sections.forEach(section => {
        observer.observe(section);
    });

}

/* ==========================================================
   FLOATING GLOW FOLLOWER
========================================================== */

const glow =
    document.createElement("div");

glow.className =
    "cursor-glow";

document.body.appendChild(glow);

window.addEventListener(
    "mousemove",
    e => {

        glow.style.left =
            e.clientX + "px";

        glow.style.top =
            e.clientY + "px";

    }
);

/* ==========================================================
   SECTION READING INDICATOR
========================================================== */

const headings =
    document.querySelectorAll(
        ".section h2"
    );

window.addEventListener(
    "scroll",
    () => {

        headings.forEach(
            heading => {

                const rect =
                    heading.getBoundingClientRect();

                if (
                    rect.top < 200 &&
                    rect.bottom > 0
                ) {

                    heading.style.textShadow =
                        "0 0 20px rgba(78,168,255,.45)";
                }
                else {

                    heading.style.textShadow =
                        "none";
                }

            }
        );

    }
);

/* ==========================================================
   SUBTLE HERO PARALLAX
========================================================== */

window.addEventListener(
    "scroll",
    () => {

        const hero =
            document.querySelector(".hero");

        if (!hero) return;

        const offset =
            window.scrollY * 0.2;

        hero.style.transform =
            `translateY(${offset}px)`;

    }
);

/* ==========================================================
   TOC SMOOTH NAVIGATION
========================================================== */

document
.querySelectorAll(".toc a")
.forEach(link => {

    link.addEventListener(
        "click",
        e => {

            e.preventDefault();

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );

            if (!target) return;

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});

/* ==========================================================
   PREMIUM MICRO-ANIMATION LOOP
========================================================== */

setInterval(() => {

    document
        .querySelectorAll(
            ".research-tag"
        )
        .forEach(tag => {

            tag.animate(
                [
                    {
                        boxShadow:
                            "0 0 0 rgba(78,168,255,0)"
                    },
                    {
                        boxShadow:
                            "0 0 25px rgba(78,168,255,.35)"
                    },
                    {
                        boxShadow:
                            "0 0 0 rgba(78,168,255,0)"
                    }
                ],
                {
                    duration: 3000
                }
            );

        });

}, 3500);

/* ==========================================================
   END
========================================================== */