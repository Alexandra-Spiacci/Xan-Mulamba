let sliderWrap = document.querySelector('.slider-wrap');
let slider = document.querySelector('.slider');
let clonesWidth;
let sliderWidth;
let clones = [];
let disableScroll = false;
let scrollPos;

let items = [...document.querySelectorAll('.slider-item')];
let images = [...document.querySelectorAll('.img-div')];

images.forEach((image, idx) => {
    image.style.backgroundImage = `url(./images/${idx + 1}.png)`
})


items.forEach(item => {
    let clone = item.cloneNode(false); // aqui que eu fiz parar o clone
    clone.classList.add('clone');
    slider.appendChild(clone);
    clones.push(clone);
})

function getClonesWidth() {
    let width = 0;
    clones.forEach(clone => {
        width += clone.offserWidth;

    })
    return width;
}
function getScrollPos() {
    return window.scrollY;
}

function ScrollUpdate() {
    scrollPos = getScrollPos();
    if (clonesWidth + scrollPos >= sliderWidth) {
        window.scrollTo({ top: 1 });
    } else if (scrollPos <= 0) {
        window.scrollTo({ top: sliderWidth - clonesWidth - 1 })
    }
    slider.style.transform = `translateX(${-window.scrollY}px)`
    requestAnimationFrame(ScrollUpdate)
}
function onLoad() {
    calculateDimensions()
    document.body.style.height = `${sliderWidth}px`
    window.scrollTo({ top: 1 });
    ScrollUpdate();
}
function calculateDimensions() {

    sliderWidth = slider.getBoundingClientRect().width;
    clonesWidth = getClonesWidth();
}
onLoad()