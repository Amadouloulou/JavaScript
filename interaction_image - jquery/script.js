
var remove;
var selected;

function onclickbutton() {
    $(this).toggleClass('selected');
    selected = $('.selected').length;
    $('em').text(selected);
}

function remove() {
    $(this).toggleClass('remove');

}

$('li').on('click', onclickbutton);
$('li').on('mouseenter mouseout', remove);
