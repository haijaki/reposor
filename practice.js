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

  

function addUser() {

    user_name = document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
     })
    }