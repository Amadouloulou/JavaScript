var button;

function ulclick() {
    if ($(this).find('ul').is(':hidden')){
        $(this).find('ul').slideDown();
    }

    else {
        $(this).find('ul').slideUp();
    }
}
$('.title').on('click', ulclick);
