
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyB93a1i-EyzP7uLGIDDmnenTGYvjwxfrhQ",
      authDomain: "kwitter-a823e.firebaseapp.com",
      databaseURL: "https://kwitter-a823e-default-rtdb.firebaseio.com",
      projectId: "kwitter-a823e",
      storageBucket: "kwitter-a823e.appspot.com",
      messagingSenderId: "870597535784",
      appId: "1:870597535784:web:6034905989061daa71ad1d",
      measurementId: "G-WNR7KGVD6L"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    user_name1=localStorage.getItem("user_name");
    document.getElementById("user_name1").innerHTML="Welcome   "+user_name1+"!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"addingRoomName"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room Name"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}