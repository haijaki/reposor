user_name = localStorage.getItem("user_name");
document.getElementById("user_name").value = "Welcome " + user_name + "!" ; 

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
 }