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
const auth = firebase.auth();
var user = null;

const db = firebase.firestore();

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

