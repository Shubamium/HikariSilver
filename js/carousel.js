let carouselImgEl = document.getElementById('carousel-img');
let linkEl = document.getElementById('carousel-link');
let currentImgId = 0;

let imageList = [
    'https://i.ibb.co/j5nrrsk/E25-BF1-B4-18-B3-49-DD-B301-A49-EEC4-C5-D97-1.png',
    'https://i.ibb.co/X8qXSTD/fanart1-min-1.png',
    'https://i.ibb.co/wS7KvBp/sheet.jpg'
]

let rippu = {
    name:'@ripkremit - Rippu Hoshimi ',
    link:'https://twitter.com/ripkremit'
};
let noartist = {
    name:'Anonymous',
    link:'#'
};
let artistList = [
    noartist,
    {name:'AnimeDiffusion',link:'#'},
    rippu

]
updateCarouselImg(0);

function changeCarousel(input){
    currentImgId += input;
    // Clamp the value
    let res = Math.abs(currentImgId % imageList.length);

    console.log(res);
    updateCarouselImg(res);
}

function updateCarouselImg(index){
    carouselImgEl.setAttribute('src',imageList[index]);
    linkEl && linkEl.setAttribute('href',artistList[index].link);
    linkEl && (linkEl.innerText = artistList[index].name);
}