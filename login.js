import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("msg");

loginBtn.addEventListener("click", async () => {
  if (email.value === "" || password.value === "") {
    msg.innerHTML = "Please enter email and password.";
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    window.location.href = "dashboard.html";
  } catch (error) {
    msg.innerHTML = error.message;
  }
});
