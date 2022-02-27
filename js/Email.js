function makeEmail(){
 console.log(document.getElementById('emailInput'));

 var email=document.getElementById('emailInput');
 console.log(email);
 console.log(document.getElementById('emailInput').value);
console.log(email.value);
}
function makeEmail(){
var emailInput=document.getElementById('emailInput');
var domainInput=document.getElementById('domainInput');
var nameInput=document.getElementById('nameInput');

   console.log(emailInput)
   console.log(nameInput)
   console.log(domainInput)
   console.log("=========================================");
    
    console.log(emailInput.value);
    console.log(nameInput.value);
    console.log(domainInput.value);
//

/*======================================================*/
var emailll=emailInput.Value;
console.log(emailll);
console.log( emailInput.Value.indexOf('@'));


console.log(emailInput.Value.splice(0,c))
nameInput.innerHTML=emailInput.Value.splice(0,c);
domainInput.innerHTML=emailInput.Value.splice(c+1);
    console.log('name: '+nameInput.value);
    console.log('domain'+domainInput.value);

 }
// /******************************************************************************************************************** */
function makeEmail(){
    emailInput=document.getElementById('emailInput');
    nameInput=document.getElementById('nameInput');
    domainInput=document.getElementById('domainInput');
    var n=emailInput.value.indexOf('@');
    
   console.log(emailInput.value.includes('@'));
     if(emailInput.value.includes('@')==true){
  nameInput.value=emailInput.value.slice(0,n);
  domainInput.value=emailInput.value.slice(n+1);
  console.log(emailInput.value);
    console.log(n);
    console.log(nameInput.value);
    console.log(domainInput.value)
    // var email=emailInput.value;
    // console.log(email.length);
     }
else{
emailInput.value='error';
    }
}
var str='eeeeeee@llll;'
console.log(emailInput.value.includes('@'));
/* ********************************************************************************************************** */





























