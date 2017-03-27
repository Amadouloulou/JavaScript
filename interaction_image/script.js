var button = []
button = document.getElementsByTagName('li');

function onclickbutton() {
    this.classList.toggle('hide')
}
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', onclickbutton);
}
