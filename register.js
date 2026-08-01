import { auth, db } from "./firebase.js";

import { 
createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";


import {
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";



const registerBtn = document.getElementById("registerBtn");

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const msg = document.getElementById("msg");



registerBtn.addEventListener("click", async () => {


if(name.value === "" || email.value === "" || password.value === ""){

msg.innerHTML = "Please fill all fields.";
return;

}



try{


const userCredential = await createUserWithEmailAndPassword(
auth,
email.value,
password.value
);



const user = userCredential.user;



// Save user in Firestore

await setDoc(doc(db,"users",user.uid),{

name:name.value,
email:email.value,
balance:"0"

});



// Save local data

localStorage.setItem("userName",name.value);
localStorage.setItem("userEmail",email.value);
localStorage.setItem("balance","0");



msg.innerHTML="Account created successfully!";


setTimeout(()=>{

window.location.href="login.html";

},1000);



}catch(error){

msg.innerHTML = error.message;

}



});
