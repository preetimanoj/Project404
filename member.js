
function memberReadData(databaseName, email) {
    var objlist = []
    db.collection(databaseName).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            if (doc.data().emailid === email) {
                objlist.push(doc.data())
            }
        });
        fetchCompleted(objlist);
    });
}

function fetchCompleted(objlist) {
    console.log(objlist[0].emailid)
    var col = ['name', 'desc', 'emailid', 'hrs', 'tpay', 'action'];

    var table = document.createElement("table");
    table.classList.add("table");
    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for (var i = 0; i < objlist.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = objlist[i][col[j]];
        }
    }

    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

}

memberReadData("AdminData", "memeber2@gmail.com")
