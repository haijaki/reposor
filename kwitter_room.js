
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAVoPfsBYRVz-_EZzakz5JzIUdB5Jsqg7Y",
    authDomain: "kwitter-afd38.firebaseapp.com",
    databaseURL: "https://kwitter-afd38-default-rtdb.firebaseio.com",
    projectId: "kwitter-afd38",
    storageBucket: "kwitter-afd38.appspot.com",
    messagingSenderId: "232737281832",
    appId: "1:232737281832:web:d5904512058cd3bd23e21d"
  };
  
  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  //room_name = localStorage.getItem("room_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }

  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Group_names = childKey; 
    Room_names = childKey;
     console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
  });
});
}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter.html";
}