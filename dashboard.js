const userName = localStorage.getItem("userName");
const userEmail = localStorage.getItem("userEmail");
const balance = localStorage.getItem("balance");


const nameElement = document.querySelector(".profile-box h2");
const emailElement = document.querySelector(".profile-box p");
const balanceElement = document.getElementById("balance");


// Show User Name
if(userName && nameElement){
    nameElement.innerHTML = "Welcome " + userName + " 👋";
}


// Show Email
if(userEmail && emailElement){
    emailElement.innerHTML = userEmail;
}


// Show Balance
if(balance && balanceElement){
    balanceElement.innerHTML = "PKR " + balance;
}
