
const txtPassword = document.getElementById("txtPassword");
const LoginButton = document.getElementById("login");
const container = document.getElementById("container");
 const error =document.createElement("span");
 error.innerHTML ="";
const password = 123456;

LoginButton.addEventListener('click', (e)=>{
    e.preventDefault();

if (txtPassword.value === password.toString()){
  window.location= "/employee";
    
} else
{    
   
     error.innerHTML ="Passwords Don't Match";
     container.appendChild(error);
    
}

    
})