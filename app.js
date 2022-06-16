function redirectToLogin() {
    let url = "login.html";
    window.location.assign(url);
}

function redirectToRegister() {
    let url = "index.html";
    window.location.assign(url);
}

function saveToFile() {
    const name = document.getElementById('fullName');
    const designation = document.getElementById('designation');
    const registerEmail = document.getElementById('registerEmail');
    const registerPassword = document.getElementById('registerPassword');
    let csvFileData = [[name.value, designation.value, registerEmail.value, registerPassword.value]];

    // console.log("data----", data)
    download_csv_file(csvFileData)
}

function download_csv_file(csvFileData) {
    console.log(csvFileData)
    var csv = 'Name,Designation,Email,Password\n';
    csvFileData.forEach(function (row) {
        csv += row.join(',');
        csv += "\n";
    });
    document.write(csv);


    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'Users.csv';
    hiddenElement.click();
    let url = "login.html";
    window.location.assign(url);
}



// new modal - admin side
function modalNew(){
    let url = "modal.html";
    window.location.assign(url);
   
}


var i=1;

function saveTaskToFile() {
    const tname = document.getElementById('tname');
    const tdesc = document.getElementById('tdesc');
    const temail = document.getElementById('temail');
    const tstart = document.getElementById('tstart');
    const tend = document.getElementById('tend');
    const tid = ++i;
    const thrs = 0;
    let csvFileData = [[tid, tname.value, tdesc.value, temail.value, tstart.value, tend.value, thrs]];

    // console.log("data----", data)
    download_csv_task_file(csvFileData)
}

function download_csv_task_file(csvFileData) {
    console.log(csvFileData)
    var csv = 'Id,Task Name,Desciption,Email,Start Date,End Date, Hours\n';
    csvFileData.forEach(function (row) {
        csv += row.join(',');
        csv += "\n";
    });
    document.write(csv);


    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'Tasks.csv';
    hiddenElement.click();
    let url = "admin.html";
    window.location.assign(url);
}


// var $ = jQuery;
// $('#exampleModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })
