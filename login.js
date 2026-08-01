import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

alert("login.js loaded");

const loginBtn = document.getElementById("loginBtn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("msg");

if (!loginBtn) {
    alert("Login button not found!");
} else {
    loginBtn.addEventListener("click", async () => {
        if (email.value.trim() === "" || password.value.trim() === "") {
            msg.innerHTML = "Please enter email and password.";
            return;
        }

        try {
            await signInWithEmailAndPassword(
                auth,
                email.value.trim(),
                password.value
            );

            alert("Login Successful");
            window.location.href = "dashboard.html";

        } catch (error) {
            alert(error.code);
            msg.innerHTML = error.message;
        }
    });
}
