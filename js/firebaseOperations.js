// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-PttqpVfYIafQZ-rERQkK4WoSps9AlGk",
    authDomain: "team-404-js-project.firebaseapp.com",
    projectId: "team-404-js-project",
    storageBucket: "team-404-js-project.appspot.com",
    messagingSenderId: "769973768801",
    appId: "1:769973768801:web:c40da4668e2309ab965020"
};
const databaseName = "AdminData"

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
let task = { emailid: "memeber2@gmail.com", name: "asd", desc: "asdfsdfsdfs jlkj jkl l", hrs: "5", tpay: "1232", action: "0" };

// addData("AdminData", task)


function updateData(columnName, value, actionid) {
    db.collection(databaseName).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log("for doc id " + doc.id + " email id " + doc.data().emailid + " value:" + value);
            if (String(doc.data().emailid) == String(value)) {
                console.log("Updaing doc id " + doc.id);

                db.collection(databaseName).doc(doc.id).update({
                    action: actionid
                })
            } else {

            }
        });
    });
}

// updateData("emailid", "member102@gmail.com", 6)

function readData(databaseName) {
    db.collection(databaseName).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log("data " + doc.data());
        });
    });

}