// =========================================
// YAHAN SE JAVASCRIPT KAAM KARTA HAI
// Bilkul simple code hai
// =========================================

// 1. Password dikhana / chupana
function togglePassword() {
    let passInput = document.getElementById("password");
    let eyeIcon = document.getElementById("eye");

    if (passInput.type === "password") {
        passInput.type = "text";
        eyeIcon.textContent = "🙈"; // band aankh
    } else {
        passInput.type = "password";
        eyeIcon.textContent = "👁️"; // khuli aankh
    }
}

// 2. Login form submit hone par
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // page reload rokna

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Simple check
    if (email === "" || password === "") {
        alert("Please email aur password bharein!");
    } else {
        alert("Login successful! Email: " + email);
        // YAHAN AAP APNA BACKEND CODE LAGA SAKTE HO
        // jaise: window.location.href = "dashboard.html"
    }
});

console.log("Login page ready hai!");
