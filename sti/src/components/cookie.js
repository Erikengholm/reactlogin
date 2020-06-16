export const create = (name,key)=>{
    document.cookie = "username="+name;
    document.cookie = "password="+key;
    location.reload()

    console.log(document.cookie);
}