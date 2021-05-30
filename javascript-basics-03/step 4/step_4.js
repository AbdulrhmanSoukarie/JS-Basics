var pass = document.getElementById('password');
var conf = document.getElementById('confirmation');

function confirmed() {
  if(pass.value != conf.value){
     pass.style.border= "2px solid red";
     conf.style.border= "2px solid red";
  }
  else {
      alert ("confirmed")
  }
}