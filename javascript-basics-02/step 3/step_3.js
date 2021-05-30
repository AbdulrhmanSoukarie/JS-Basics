var newDiv = document.createElement('div');
newDiv.id = 'name_user' ;
document.body.appendChild(newDiv);


document.querySelector('#name').addEventListener('keyup', myNames);
   function myNames(){


    var Myname = document.querySelector('#name').value;

   document.querySelector('#name_user').innerHTML = Myname;

    
}
 

 
  
  