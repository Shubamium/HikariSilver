let carouselImgEl = document.getElementById('carousel-img');
let currentImgId = 0;

let imageList = [
    'https://i.ibb.co/X8qXSTD/fanart1-min-1.png',
    'assets/replaceable/schedules.webp',
]


function changeCarousel(input){
    currentImgId += input;
    // Clamp the value
    let res = Math.abs(currentImgId % imageList.length);

    console.log(res);
    updateCarouselImg(res);
}

function updateCarouselImg(index){
    carouselImgEl.setAttribute('src',imageList[index]);
}