
function saymyname(){
    console.log("T");
    console.log("A");
    console.log("P");
    console.log("A");
    console.log("S");
}
// saymyname()
//********* */
// function addtwonumber(number1,number2){//parametre
//     console.log(number1+number2);
//  }
//  const result=addtwonumber(3,5)//argument
// console.log("result:",result);
// ************
function addtwonumber(number1,number2){
//  let result=number1+number2
//  return result
 console.log("hitesh")//this is not execute bcz ret.done
return number1+number2
}
//  const result=addtwonumber(3,5)
//  console.log("result:",result);
// *************
    function loginusermessage(username="sam"){
        if(username===undefined){
            console.log("please enter user name first")
            return

        }
        return `${username} just logged in`
    }
//  console.log(loginusermessage("hitesh"));
// console.log(loginusermessage("hitesh"));
//**********2day function*********** */
function calculatecartprice(...num1){//=>rest operator(...)
return num1
}
// console.log(calculatecartprice(200,300,400,500));
const user={
    username:"hitesh",
    price:199
}
function handleobject(anyobject){
console.log(`user name is${anyobject.username} and the price is ${anyobject.price} `)
}
// handleobject(user)
// handleobject({
//     username:"sam",//=>function undar vi object pass kar sakte he
//     price:600
// })
const mynewarray=[200,300,500,600,900]
function returnsecondvalue(getarray){
return getarray[1]
}
// console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200,300,400,500,600,900]));