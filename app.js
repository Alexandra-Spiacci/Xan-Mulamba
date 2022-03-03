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

/*
items.forEach(item => {
    let clone = item.cloneNode(true);
    clone.classList.add('clone');
    slider.appendChild(clone);
    clones.push(clone);
}) */