// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD7LDH0efcjZkHvjilBu9rw27ttUPaOGR8",
  authDomain: "kwitter-e823e.firebaseapp.com",
  databaseURL: "https://kwitter-e823e-default-rtdb.firebaseio.com",
  projectId: "kwitter-e823e",
  storageBucket: "kwitter-e823e.appspot.com",
  messagingSenderId: "1062004170715",
  appId: "1:1062004170715:web:3c651a8f0738e90eeb11fe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var username=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome "+username;

function addServer(){
      Server_name=document.getElementById("Server_name").value;
      firebase.database().ref("/").child(Server_name).update({
            purpose:"adding server"
      });
      localStorage.setItem("Server_name",Server_name);
      window.location="discord_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot)
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
   Server_name = childKey;
  console.log("server-name"+Server_name);
  row = "<div class='Server_name' id="+Server_name+"onclick='redirectToRoomName(this.id)'>#"+ Server_name +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("Server_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("Server_name");
  window.location="index.html";
}