// Home Page Buttons

let loginButton = document.querySelector(".login");
let registerButton = document.querySelector(".register");


if(loginButton){
    loginButton.addEventListener("click", function(){
        window.location.href = "login.html";
    });
}


if(registerButton){
    registerButton.addEventListener("click", function(){
        window.location.href = "register.html";
    });
}


// Save User Data Function

function saveUser(name,email){

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("balance", "0");

}


// Get User Data

function getUser(){

    return {
        name: localStorage.getItem("userName"),
        email: localStorage.getItem("userEmail"),
        balance: localStorage.getItem("balance")
    };

}
