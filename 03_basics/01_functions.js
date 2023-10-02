
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
console.log(loginusermessage("hitesh"));
