var button = document.getElementById('myButton');
var list = document.getElementById('dropdown-list');

/* 3 On déclare les fonctions qui seront appelées lorsqu'un évènement est déclenché */
function showDropdown() {
	if(list.style.display=='block') {
  		list.style.display='none';
  	}
  	else {
  		list.style.display='block';
  	}
}


function hideDropdown(event) {
	if(event.target!=button) {
		list.style.display='none';
    }

}


// 2 on pose nos écouteurs d'évènements sur nos éléments HTML (Le bouton)
button.addEventListener('click', showDropdown);
document.addEventListener('click', hideDropdown);
