let taskStatus = 0;

// new modal - admin side
function modalNew() {
    let url = "modal.html";
    window.location.assign(url);

}

function cancelTask() {
    let url = "admin.html";
    window.location.assign(url);

}

//change status
function changeStatus() {
    const statusBtn = document.getElementById("status");
    if (statusBtn.innerHTML == "Finish") {
        statusBtn.innerHTML = "Done";
        statusBtn.style.background = "#6c757d";
        taskStatus = 2;
    } else {
        statusBtn.innerHTML = "Finish";
        statusBtn.style.background = "#28a745";
        taskStatus = 1;
    }
}


function memberReadData(databaseName, email) {
    let objlist = []
    db.collection(databaseName).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            //            console.log(doc.data())
            if (doc.data().emailid === email) {
                objlist.push(doc.data())
            }
        });
        fetchCompleted(objlist);
    });
}


// var buttonStat = document.createElement("button"); //button
function fetchCompleted(objlist) {
    let col = ['name', 'desc', 'emailid', 'hrs', 'tpay', 'action'];

    let table = document.createElement("table");
    table.classList.add("table");
    let tr = table.insertRow(-1);                  

    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");     
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (let i = 0; i < objlist.length; i++) {

        tr = table.insertRow(-1);

        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);

            if (j == 5) {
                let buttonStat = document.createElement("button");

                if (objlist[i][col[j]] == 0) {
                    buttonStat.innerHTML = "Start"
                    buttonStat.onclick = function () { console.log("btn " + i) };
                }
                if (objlist[i][col[j]] == 1) {
                    buttonStat.innerHTML = "In Progress"
                    // buttonStat.onclick = function(){buttonStat.innerHTML = "Finish"};
                }
                if (objlist[i][col[j]] == 2) {
                    buttonStat.innerHTML = "Finish"
                    buttonStat.disabled = "true"

                }
                console.log(buttonStat)
                tabCell.appendChild(buttonStat);
                console.log(tabCell)
                buttonStat = null
            } else {
                tabCell.innerHTML = objlist[i][col[j]];
            }

        }
    }

    let divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

}

firebase.auth().onAuthStateChanged((currentUser) => {
    if (currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(currentUser.email)
        memberReadData(databaseName, currentUser.email)

    } else {
        console.log("User is signed out");
        let url = "login.html";
        window.location.assign(url);
    }
});
