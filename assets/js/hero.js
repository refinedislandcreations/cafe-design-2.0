document.addEventListener("DOMContentLoaded", function () {
  // Only run animations if GSAP is available
  if (typeof gsap !== "undefined") {
    const heroTimeline = gsap.timeline();

    // Background animation
    heroTimeline.fromTo(
      "#hero-bg",
      {
        scale: 1.2,
        filter: "brightness(0.3) blur(10px)",
      },
      {
        scale: 1,
        filter: "brightness(0.6) blur(0px)",
        duration: 1.5,
        ease: "power2.inOut",
      }
    );

    // Badge animation
    heroTimeline.to(
      "#hero-badge",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=1.0"
    );

    // Title animation
    heroTimeline.to(
      "#hero-title",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.6"
    );

    // Description animation
    heroTimeline.to(
      "#hero-description",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Button animation
    heroTimeline.to(
      "#hero-button",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.4"
    );

    // Social proof animation
    heroTimeline.to(
      "#social-proof",
      {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Scroll indicator animation
    heroTimeline.to(
      "#scroll-indicator",
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.2"
    );

    // Parallax effect on scroll
    window.addEventListener("scroll", function () {
      const scrolled = window.pageYOffset;
      const hero = document.getElementById("hero");
      const background = document.getElementById("hero-bg");

      if (hero && background) {
        const heroHeight = hero.offsetHeight;
        const rate = scrolled * -0.5;

        if (scrolled < heroHeight) {
          background.style.transform = `translateY(${rate}px) scale(${
            1 + Math.abs(rate) * 0.0003
          })`;
        }
      }
    });
  } else {
    // Fallback: Show all elements if GSAP is not available
    const elements = document.querySelectorAll(
      '[id^="hero-"], #scroll-indicator'
    );
    elements.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }
});
