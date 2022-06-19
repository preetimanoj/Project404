//Create new user
function createUser() {
    let email = document.getElementById('registerEmail').value;
    let password = document.getElementById('registerPassword').value;
    console.log("create----", email, password)
    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
        user = userCredential.user;
        console.log("user logged in")
        window.location.assign('login.html');
    })
        .catch((error) => {
           console.log("Error: ", error)
        });
}

function redirectToLogin() {
    let url = "login.html";
    window.location.assign(url);
}
