document.addEventListener("DOMContentLoaded", function () {
  // Only run animations if GSAP is available
  if (typeof gsap !== "undefined") {
    const heroTimeline = gsap.timeline();

    // Ensure the hero section starts at the top
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.style.top = "0";
      heroSection.style.left = "0";
      heroSection.style.right = "0";
    }

    // Darker background animation with reduced brightness
    heroTimeline.fromTo(
      "#hero-bg",
      {
        opacity: 0,
        scale: 1.05,
        filter: "brightness(0.4) contrast(1.1)", // Start darker
      },
      {
        opacity: 1,
        scale: 1,
        filter: "brightness(0.6) contrast(1.1)", // End with reduced brightness
        duration: 1.5,
        ease: "power2.out",
      }
    );

    // Animate coffee beans with subtle floating effect
    const coffeeBeans = [
      "#coffee-bean-1",
      "#coffee-bean-2",
      "#coffee-bean-3",
      "#coffee-bean-4",
    ];

    coffeeBeans.forEach((bean, index) => {
      // First make them visible
      gsap.set(bean, { opacity: 0 });

      // Then animate them
      gsap.to(bean, {
        opacity: 1,
        y: -15,
        duration: 2,
        delay: 1 + index * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Badge animation
    heroTimeline.fromTo(
      "#hero-badge",
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=1.0"
    );

    // Title animation
    heroTimeline.fromTo(
      "#hero-title",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power3.out",
      },
      "-=0.8"
    );

    // Description animation
    heroTimeline.fromTo(
      "#hero-description",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.7"
    );

    // Button animation
    heroTimeline.fromTo(
      "#hero-button",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.6"
    );

    // Social proof animation
    heroTimeline.fromTo(
      "#social-proof",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.5"
    );

    // Scroll indicator animation
    heroTimeline.fromTo(
      "#scroll-indicator",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    );
  } else {
    // Fallback: Show all elements if GSAP is not available
    const elements = document.querySelectorAll(
      '[id^="hero-"], #scroll-indicator, [id^="coffee-bean-"]'
    );
    elements.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });

    // Ensure hero section is positioned at top
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.style.top = "0";
    }

    // Apply darker filter to background
    const heroBg = document.getElementById("hero-bg");
    if (heroBg) {
      heroBg.style.filter = "brightness(0.6) contrast(1.1)";
    }
  }
});
