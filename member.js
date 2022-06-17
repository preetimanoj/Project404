
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

// var buttonStat = document.createElement("button"); //button
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
          
            if(j==5){
                var buttonStat = document.createElement("button");
                
                if(objlist[i][col[j]] == 0){
                    buttonStat.innerHTML = "Start"
                    buttonStat.onclick = function(){console.log("btn "+i)};
                }
                if(objlist[i][col[j]] == 1){
                    buttonStat.innerHTML = "In Progress"
                    // buttonStat.onclick = function(){buttonStat.innerHTML = "Finish"};
                }
                if(objlist[i][col[j]] == 2){
                    buttonStat.innerHTML = "Finish"
                    buttonStat.disabled ="true"
                    
                }
                console.log(buttonStat)
                tabCell.appendChild(buttonStat) ;
                console.log(tabCell)
                buttonStat = null
            }else{
                tabCell.innerHTML = objlist[i][col[j]];
            }
           
        }
    }

    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);

}

memberReadData("AdminData", "memeber2@gmail.com")
