import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

const registerBtn = document.getElementById("registerBtn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("msg");

registerBtn.addEventListener("click", async () => {
  if (email.value === "" || password.value === "") {
    msg.innerHTML = "Please fill all fields.";
    return;
  }

  try {
    await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    msg.innerHTML = "Account created successfully!";
    window.location.href = "login.html";
  } catch (error) {
    msg.innerHTML = error.message;
  }
});
