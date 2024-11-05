const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function page4Animation() {
    var fixed = document.querySelector(".fixed-img")
    var container = document.querySelector(".elem-con")

    container.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    container.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })
    //-----------------For Single Elements Method-------------------


    // var elem1 = document.querySelector("#elem1")
    // elem1.addEventListener("mouseenter", function () {
    //     var image = elem1.getAttribute("data-image")
    //     fixed.style.backgroundImage = `url(${image})`
    // })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}
page4Animation()

function loaderAnimation() {
    var load = document.querySelector(".loader")
    setTimeout(function () {
        load.style.top = "-100%"
    }, 4000)
}
loaderAnimation()


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        // centeredSlides: true,
        spaceBetween: 30,
    });
}
swiperAnimation()