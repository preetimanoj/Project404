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

const db = firebase.firestore();

function addData(databaseName, jsonObjData, callback = null) {
    db.collection(databaseName).add(jsonObjData)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            if (callback)
                callback();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}
//let task = { emailid: "memeber2@gmail.com", name: "asd", desc: "asdfsdfsdfs jlkj jkl l", hrs: "5", tpay: "1232", action: "0" };

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

// edits from merlin
function updateStatus(taskId, value) {
    db.collection(databaseName).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log("for doc id " + doc.id + " email id " + String(doc.data().tid) + " value:" + value);
            if (String(doc.data().tid) == taskId) {
                console.log("Updaing doc id " + String(doc.data().tid));

                db.collection(databaseName).doc(doc.id).update({
                    action: value
                })
            } else {

            }
        });
    });
}

//ends

function readData(databaseName) {
    db.collection(databaseName).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log("data " + doc.data());
        });
    });

}

function redirectBasedOnRole(email) {
    db.collection("UserDatabase").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log("for doc id " + doc.id + " email id " + doc.data().emailid + " value:" + email);
            if (String(doc.data().emailid) == String(email)) {
                console.log("logged in doc id " + doc.id);


                let docRef = db.collection("UserDatabase").doc(doc.id);

                docRef.get().then((doc) => {
                    if (doc.exists) {
                        console.log("Document data:", doc.data().role);
                        if (doc.data().role == "admin") {
                            console.log("admin")
                            window.location.assign('admin.html');
                        } else {
                            console.log("member")
                            window.location.assign('member.html');
                        }
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });

                return
            } else {
                console.log("didnt find role");
            }
        });
    });

}

function signOut() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        let url = "login.html";
        window.location.assign(url);
    }, function (error) {
        Alert("Error logging out " + error)  // An error happened.
    });
}