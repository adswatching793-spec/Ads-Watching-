import { auth } from "./firebase.js";
import { 
signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";


const loginBtn = document.getElementById("loginBtn");

const email = document.getElementById("email");
const password = document.getElementById("password");

const msg = document.getElementById("msg");


loginBtn.addEventListener("click", async () => {


    if(email.value.trim()==="" || password.value.trim()===""){

        msg.innerHTML="Please enter email and password.";
        return;

    }


    try{


        await signInWithEmailAndPassword(
            auth,
            email.value.trim(),
            password.value
        );


        // Save login user info
        localStorage.setItem(
            "userEmail",
            email.value.trim()
        );


        msg.innerHTML="Login Successful ✅";


        setTimeout(()=>{

            window.location.href="dashboard.html";

        },1000);



    }catch(error){


        msg.innerHTML=error.message;


    }


});
