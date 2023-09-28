const name="hitesh"
const repocount=50
// console.log(name+repocount+"value")=>this is very old one
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

let gamename=new String("hiteshttp");
console.log(gamename[0]);
console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase())
console.log(gamename.charAt(0));
console.log(gamename.indexOf('t'));
// **********
const newstring=gamename.substring(0,4)
console.log(newstring);

const anotherstring=gamename.slice(-8,4)
console.log(anotherstring);
const newstringone="             hitesh      "
console.log(newstringone);
console.log(newstringone.trim());
const url="https://hitesh.com/hitesh.com/hitesh%bimal"
console.log(url.replace('%','_'))
console.log(url.includes('bimal'))
console.log(url.includes('sundar'))
const newgama=new String("hitesh bimal")
const newgamaone=newgama.split(" ")
console.log(newgamaone);
