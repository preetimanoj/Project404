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

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })