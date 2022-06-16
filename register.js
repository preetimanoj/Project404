//Create new user
function createUser(email, password) {
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