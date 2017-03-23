var button = document.querySelector ('button');
var menu = document.getElementById ('menu-panel');

function addShow() {
    button.classList.toggle('is-active');

    if (button.classList.contains('is-active')) {
        menu.classList.add('show');

    }
    else {
        menu.classList.remove('show');
    }
}

button.addEventListener('click', addShow);
