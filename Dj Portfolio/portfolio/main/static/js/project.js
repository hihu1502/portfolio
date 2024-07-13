let slideIndex = 1;
showSlides(slideIndex)

function moveSlide(n) {
    slideIndex += n
    showSlides(slideIndex += n)
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-item")
    if (n > slideIndex.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].computedStyleMap.display = "none"
    }
    slides[slideIndex - 1].computedStyleMap.display = "flex"
}