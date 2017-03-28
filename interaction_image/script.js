var button = []
var selected;


button = document.getElementsByTagName('li');

function onclickbutton() {
    this.classList.toggle('selected')
    selected = document.getElementsByClassName('selected').length;
    document.querySelector('em').textContent = selected;
}
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', onclickbutton);
}
