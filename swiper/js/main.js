new Swiper(".sw-basic", {
    direction: "horizontal",
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {
        deley: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})