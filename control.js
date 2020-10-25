var form = document.querySelector('form');
var inputEmail = document.getElementById('inputEmail');
var inputPass = document.getElementById('inputPass');
var submit = document.getElementById('submit');

form.onsubmit = function(e) {

 if (inputEmail.value === '' || inputPass.value === ''|| !inputEmail.value.includes("@")) {
 e.preventDefault();
 alert("Ambos campos deben estar completos y no olvide usar el @ en el usuario.");
 }

}
