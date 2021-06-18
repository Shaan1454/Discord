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

username=localStorage.getItem("username");
Server_name=localStorage.getItem("Server_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(Server_name).push({
        name:username,
        message:msg,
        like:0
  });
  document.getElementById("msg").value = "";

}

function getData() { firebase.database().ref("/"+Server_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot){ childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose")
{
     firebase_message_id = childKey;
     message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
likes=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>"+message + "</h4>";
likes_button ="<button class='btn btn-warning' id="+firebase_message_id+"value="+likes+"onclick='updateLikes(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Likes: "+likes+"</span></button><hr>";
row = name_with_tag + message_with_tag +likes_button + span_with_tag;
 document.getElementById("output").innerHTML += row;

//End code
  } });  }); }
getData();
function updateLike(message_id)
{
console.log("clicked on like button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(Server_name).child(message_id).update({
likes : updated_likes  
});

}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("Server_name");
  window.location="index.html";
}