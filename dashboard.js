import { auth, db } from "./firebase.js";

import {
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";



const nameElement = document.querySelector(".profile-box h2");
const emailElement = document.querySelector(".profile-box p");
const balanceElement = document.getElementById("balance");



onAuthStateChanged(auth, async (user)=>{


if(user){


const userRef = doc(db,"users",user.uid);

const userSnap = await getDoc(userRef);



if(userSnap.exists()){


const data = userSnap.data();


if(nameElement){
nameElement.innerHTML = "Welcome " + data.name + " 👋";
}


if(emailElement){
emailElement.innerHTML = data.email;
}


if(balanceElement){
balanceElement.innerHTML = "PKR " + data.balance;
}



}


}else{


window.location.href="login.html";


}



});




function logout(){

localStorage.removeItem("userEmail");
localStorage.removeItem("userName");
localStorage.removeItem("balance");

window.location.href="login.html";

}
