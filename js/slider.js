// game swiper start

;(function() {
    const swiper = new Swiper(".game__swiper", {
        effect: "cards",
        grabCursor: true,
        pagination: {
            el: ".game__swiper-pagination",
            clickable: true,
        },
    });
    })();

// game swiper end