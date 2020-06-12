export const login = (name,key)=>{
console.log(name+" , "+key);
if(document.cookie == null){
document.cookie = "username=John Doe";}
else{
    document.cookie = null;
}
//compare();
}

/*function inv(){
    console.log("shopa");
}

function getlist(){
    let users={};


    return users;
}

function compare(){
 var list=getlist();

 list
    if()
}*/