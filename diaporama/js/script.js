var diaporama = document.querySelector('nav.toolbar ul');
var a = document.getElementById('toolbar-toggle');
var eltImage = document.querySelector('img');
var state = {
    index : 0,
    timer : null
};
var button1 = document.querySelector('#slider-next');
var button2 = document.querySelector('#slider-previous');
var title = document.querySelector('figcaption');
var play = document.querySelector('#slider-toggle');
var rand = document.getElementById('slider-random');
var timer = null;



var slides =
[
    { image: 'images/1.jpg', legend: 'Street Art'          },
    { image: 'images/2.jpg', legend: 'Fast Lane'           },
    { image: 'images/3.jpg', legend: 'Colorful Building'   },
    { image: 'images/4.jpg', legend: 'Skyscrapers'         },
    { image: 'images/5.jpg', legend: 'City by night'       },
    { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' },
];

function ShowToolbar() {
diaporama.classList.toggle('hide');
}

function refreshSlider() {
    eltImage.src=slides[state.index].image;
    title.textContent=slides[state.index].legend;
}
refreshSlider()

function previous() {
    state.index = state.index + 1;
    if (state.index>5) {state.index=0};
    refreshSlider();
}

function carrousel() {
    play.querySelector('i').classList.toggle("fa-pause");
    play.querySelector('i').classList.toggle("fa-play");

    if (timer == null){
        timer = setInterval(next , 1000);
    }
    else {
        clearInterval (timer);
        timer =  null;
    }
}

function next() {
    state.index = state.index + 1;
    if (state.index>5) {state.index=0};
    refreshSlider();
}

function random() {
    state.index = getRandomInteger(0,5);
    refreshSlider();
}

function keyBoard(event) {
    event.KeyCode;
    if(event.keyCode == 39) {next()}
    else if (event.keyCode == 37) {previous()}
    else if (event.keyCode == 32) {carrousel()}
    else {}
}
document.addEventListener('keyup', keyBoard);

a.addEventListener('click' , ShowToolbar);
button1.addEventListener('click', next);
play.addEventListener('click', carrousel);
button2.addEventListener('click', previous);
rand.addEventListener('click', random);
