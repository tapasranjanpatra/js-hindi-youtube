// primitive 
// 7 types:string,number,boolean,null,undefined,symbol,Bigint
const score=100
const scoreValue=100.3
const isLoggIn=false
const outsideTemp=null
let userEmail;
// ******
const id=Symbol('123');
const anotherId=Symbol('123')
// console.log(id==anotherId)//=>false bcz symbol can not be same even it same value
//
const bigNumber=353556555554n//=>Bigint
//************** *//
// reference type(non primitive)

// array,objects,functions=>(typeof)=object
const heros=["hitesh","trp","kumsr"]//=>array
let myObj={
    name:"tapas",
    age:22
}
let myFunction=function(){
// console.log("hello")
}
// console.log(typeof myFunction )


// ****************************************
// Stack and Heap Memory
//Satck(primitive),Heap(Nonprimitive)
let myYoutubename="hitesh.com" 
let anothername=myYoutubename
anothername="riya"
console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="tapasranjanpatra98"
console.log(userOne.email);
console.log(userTwo.email);