let userDetails = null;

// Login User
function signIn(email, password) {
    console.log("email", email)
    console.log("password", password)
    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
        userDetails = email;
        window.location.assign('member.html');
    })
        .catch((error) => {
            alert("Wrong Password")
            console.log("Error---->", JSON.stringify(error))
        });
}