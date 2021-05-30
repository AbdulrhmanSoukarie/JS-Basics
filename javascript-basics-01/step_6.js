window.onload = alert("please Enter two numbes");

function multiply() {
  
    var firstNumber = document.getElementById('first_number').value ;
    var secondNumber = document.getElementById('second_number').value;
    var quotient = Math.floor(firstNumber/secondNumber) ;
    var result =  quotient * secondNumber;
    var final = firstNumber - result ;
    
    alert("Remainder: " +  final)
}

