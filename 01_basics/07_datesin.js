let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// +++++++++
// let createddate=new Date(2023,0,20,5,6)
// let createddate=new Date("2023-01-20")
let createddate=new Date("01-02-2023")
// console.log(createddate.toLocaleString());
// console.log(createddate.toDateString());
// console.log(createddate.toISOString());
let mytimestamp=Date.now()
// console.log(mytimestamp);
// console.log(createddate.getTime());
console.log(Math.floor(Date.now()/1000));//=>second me
let newdate=new Date()
console.log(newdate.getDate());
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());
// `${newdate.getDay()} and the time`
newdate.toLocaleDateString('default',{
       weekday:"long"
})
