//Create new user
function createUser() {
    let email = document.getElementById('registerEmail').value;
    let password = document.getElementById('registerPassword').value;
    let admin = document.getElementById("rolecheck").checked

    console.log("create----", email, password)
    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
        user = userCredential.user;
        let role = "member";
        if (admin) {
            role = "admin"
        }
        addData("UserDatabase", { emailid: email, role: role });
        console.log("user logged in");
        redirectBasedOnRole(email)
    })
        .catch((error) => {
            console.log("Error: ", error)
        });
}

function redirectToLogin() {
    let url = "login.html";
    window.location.assign(url);
}
