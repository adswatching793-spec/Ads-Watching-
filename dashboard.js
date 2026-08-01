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



// Gift Check

if(localStorage.getItem("giftOpened") === "yes"){

    let gift = document.getElementById("giftScreen");

    if(gift){
        gift.style.display="none";
    }

}




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


// First show zero until gift open

if(balanceElement){

if(localStorage.getItem("giftOpened") === "yes"){

balanceElement.innerHTML="PKR 2000";

}else{

balanceElement.innerHTML="PKR 0";

}

}



}


}else{


window.location.href="login.html";


}



});




// Gift Open Function

window.openGift = function(){

let gift = document.getElementById("giftScreen");

gift.classList.add("open-animation");


setTimeout(()=>{

gift.style.display="none";

document.getElementById("balance").innerHTML="PKR 2000";

localStorage.setItem("giftOpened","yes");

},1000);


}



setTimeout(()=>{


document.getElementById("giftScreen").style.display="none";

localStorage.setItem("giftOpened","yes");


document.getElementById("balance").innerHTML="PKR 2000";



},1000);



}





window.logout = function(){

localStorage.removeItem("userEmail");
localStorage.removeItem("userName");
localStorage.removeItem("balance");

window.location.href="login.html";

}
