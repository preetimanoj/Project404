let taskStatus = 0;

// new modal - admin side
function modalNew() {
    let url = "modal.html";
    window.location.assign(url);

}

function cancelTask(){
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
