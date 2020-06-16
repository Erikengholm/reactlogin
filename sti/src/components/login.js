import config from "./config";
import Firebase from "firebase";
Firebase.initializeApp(config);
Firebase.firestore;

var db =Firebase.firestore();
const us = db.collection('users');
var users = []
createList(us);
function createList(us){
   us.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        users.push(doc);
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
}
export const login = (n)=>{
if(readCookie() ==null){
}
else{
    return false;
}
return true;
}


function readCookie() {
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        if (c.localeCompare(" username=erik") == 0) {
            let newa=c.split("=");
            let split = ca[++i].split("=");
            var usernamn =newa[1];
            newa=null;
            var password = split[1];
            split=null; 
            login
        return "c+";
    }
    }
    return null;
}

function getlist(){
    let users={};


    return users;
}



//compare();


/*function inv(){
    console.log("shopa");
}



function compare(){
 var list=getlist();

 list
    if()
}*/