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
    
function send() {
      nsg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message:msg,
            like:0
      });
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
