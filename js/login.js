
// Login User
function signIn() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    console.log("email", email);
    console.log("password", password);
    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
        user = email;
        redirectBasedOnRole(email)
    })
        .catch((error) => {
            alert("Wrong Password")
            console.log("Error---->", JSON.stringify(error))
        });
}

function redirectToRegister() {
    let url = "register.html";
    window.location.assign(url);
}
