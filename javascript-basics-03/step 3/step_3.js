document.querySelector('.green').addEventListener('click' , green);
document.querySelector('.red').addEventListener('click' , red);
document.querySelector('.blue').addEventListener('click' , blue);

function green (){

var parg = document.getElementById('text');
parg.style.color = "green"
}

function red (){

var parg2 = document.getElementById('text');
parg2.style.color = "red"
}

function blue (){

var parg3 = document.getElementById('text');
parg3.style.color = "blue"
}