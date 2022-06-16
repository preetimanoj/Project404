// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-PttqpVfYIafQZ-rERQkK4WoSps9AlGk",
    authDomain: "team-404-js-project.firebaseapp.com",
    projectId: "team-404-js-project",
    storageBucket: "team-404-js-project.appspot.com",
    messagingSenderId: "769973768801",
    appId: "1:769973768801:web:c40da4668e2309ab965020"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const auth = firebase.auth();
var user = null;

//Create new user
function createUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            user = userCredential.user;
            console.log("user logged in")
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error: " + errorCode + " " + errorMessage)
            user = null

            // ..
        });
}

//Login old user
function singnIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            user = null
        });
}

// set the auth change state
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});

function addData(databaseName, jsonObjData) {
    db.collection(databaseName).add(jsonObjData)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}
let task = { emailid: "memeber2@gmail.com", lastName: "Doe", age: 50, eyeColor: "blue" };

// addData("AdminData", task)


function readData(databaseName) {
    db.collection(databaseName).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log("data " + doc.data());
        });
    });

}

function memberReadData(databaseName) {
    var objlist = []
    db.collection(databaseName).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            if (doc.data().emailid === "memeber2@gmail.com") {
                objlist.push(doc.data())
            }
        });
    });
    return objlist
}


console.log(memberReadData("AdminData"))


