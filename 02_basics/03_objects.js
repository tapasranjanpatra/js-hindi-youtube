
//object laterals
 const mysym=Symbol("mykey1")// //how to use symbol inside object and access it.
const jsuser={
    name:"hitesh",
    "full name":"hitesh bimal",
     [mysym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    lastLoginDays:["monday","saturday"]
}
jsuser.email="hitesh@chatgpt.com"
// Object.freeze(jsuser)//=>no change after 
jsuser.email="hitesh@microsoft.com"
// console.log(jsuser);
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(typeof jsuser[mysym]);
jsuser.greeting=function(){
    console.log("hello js user");
}
jsuser.greetingtwo=function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());