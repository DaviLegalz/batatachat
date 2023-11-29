const firebaseConfig = {
      apiKey: "AIzaSyAdX2REIU_c3rNeDIkNWDtA8wOsjTeAvD0",
      authDomain: "fnafconversation.firebaseapp.com",
      projectId: "fnafconversation",
      storageBucket: "fnafconversation.appspot.com",
      messagingSenderId: "115882023957",
      appId: "1:115882023957:web:8add129a7f60aa1223c21c"
    };
    
    const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
console.log(firebaseMessageId);
console.log(messageData);
name = messageData['name'];
message = messageData['message'];
like = messageData['like'];
nameWithTag = "<h4> "+ name + "<img class='user_tick' src='tick.png'></h4>";
messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updatelike(this.id)'>";
spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+ like +"</span></button> <hr>";

row = nameWithTag + messageWithTag + like_button + spanWithTag;
document.getElementById("output").innerHTML += row;
//Fim do código
      } });  }); }
getData();

function updateLike(messageId)
{
      console.log("botão de like pressionado - " + messageId);
      buttonId = messageId;
      likes = document.getElementById(buttonId).value;
      uptadeLikes = Number(likes) + 1;
      console.log(updateLikes);

      firebase.database().ref(roomName).child(messageId).update({
            like : updateLikes
      });

}

function logout(){
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      windom.location.replace("index.html");
}