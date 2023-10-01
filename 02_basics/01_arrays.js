// array
// const myarr=[0,1,2,3,4,5,6]
const myheros=["shaktiman","junior_zee"]
const arr2=new Array(5,6,4,5,8,7,4,)
// console.log(arr2[0]);
// console.log(myarr[1]);
// console.log(myheros[0]);
// array methods
// myarr.push(8)
// myarr.pop()//=>remove the last element of the array
// myarr.unshift(10)//=>add the value start in array
// myarr.shift()//=>remove the unshift value in array
// console.log(myarr.includes(9));
// console.log(myarr.indexOf(9));
// console.log(myarr.indexOf(3));
// const newarray=myarr.join()//=>join convert to string type
// console.log(myarr);
// console.log(newarray);
//slice,splice(interview question)
const myarr=[0,1,2,3,4,5,6]
// console.log("A",myarr);
const myn1=myarr.slice(1,3)
// console.log(myn1);
// console.log("B",myarr);//=>array will no change 0,1,2,3,4,5,6
// ******
const myn2=myarr.splice(1,3)
// console.log("C",myarr);//=>array change 0,4,5,6
// console.log(myn2);