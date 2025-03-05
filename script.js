import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged} 
from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"; 
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
 const firebaseConfig = {
    apiKey: "AIzaSyCTSFBNTJJCijfSf3IPujjE0OyeDI4NG90",
    authDomain: "auth-373e7.firebaseapp.com",
    projectId: "auth-373e7",
    storageBucket: "auth-373e7.firebasestorage.app",
    messagingSenderId: "682820014881",
    appId: "1:682820014881:web:a5b7ed182a1505d2136460",
    measurementId: "G-5GFHBQN0J8"
  };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
document.getElementById("signup-btn")?.addEventListener('click',(e)=>{
e.preventDefault();
let email=document.getElementById("signup-email").value;
 let password=document.getElementById("signup-password" ).value;
 createUserWithEmailAndPassword(auth, email, password)   
      .then(() => {    
    alert("Sign Up Successful!"); 
 window.location.href = "welcome.html";   
  })  
 .catch((error) => {     
    alert(error.message);   
  }) 
});  
//login with email and password
document.getElementById("login-btn")?.addEventListener("click", (e) => {  
    e.preventDefault();
     const email = document.getElementById("login-email").value;  
      const password = document.getElementById("login-password").value;   
       signInWithEmailAndPassword(auth, email, password)    
        .then(() => {   
    alert("Login Successful!");  
     window.location.href = "welcome.html";    
     })    
      .catch((error) => {    
           alert(error.message);     
        }); 
    }); 
//continue with google//
document.getElementById("google-btn")?.addEventListener("click", (e) => { 
    e.preventDefault();
signInWithPopup(auth, provider)  
    .then(() => {     
alert("Login Successful!");   
 window.location.href = "welcome.html"; 
    })     
.catch((error) => {      
 alert(error.message); 
   }); 
 }); 

//logout//
 document.getElementById("logout-btn")?.addEventListener("click", () => { 
      signOut(auth)    
       .then(() => {      
         alert("Logged Out Successfully!"); 
       window.location.href = "index.html";    
     })     
     .catch((error) => {   
    alert(error.message);   
  });
 }); 
 // Reset Password 
 document.getElementById("reset-password-link")?.addEventListener("click", (e) => { 
      e.preventDefault(); 
const email = prompt("Please enter your email address:");   
 if (email) {     sendPasswordResetEmail(auth, email)      
     .then(() => {     
alert("Password reset email sent! Check your inbox.");     
  })     
    .catch((error) => {       
          alert("Error: " + error.message);    
           });  
         } else {   
              alert("Please enter a valid email address.");   } }); 

 // Show User Email on Welcome Page 
 onAuthStateChanged(auth, (user) => { 
if (user && window.location.pathname.includes("welcome.html"))
 {    
 document.getElementById("user-email").textContent = user.email; 
 }
  else if (!user && window.location.pathname.includes("welcome.html"))
   {    
     
    window.location.href = "index.html"; 
  } 
}); 