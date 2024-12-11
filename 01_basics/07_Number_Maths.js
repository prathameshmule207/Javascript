const score = 400
console.log(score);

const NewScore = new Number(100)
console.log(NewScore);  //Number:100
console.log(NewScore.toString().length);  //3
console.log(NewScore.toFixed(2));  //100.00

const otherNumber = 23.45654
console.log(otherNumber.toPrecision(4));  //23.46  pricision means total number index


const ToHundreds = 1000000
console.log(ToHundreds.toLocaleString('en-IN'))  // 10,00,000   taking ,




//++++++++++++++++++++++++++MATHS++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4));  // change only - value to +
console.log(Math.round(4.6));  //taking roundoff =5
console.log(Math.ceil(5.7));  //ceil means celing value means high value = 6
console.log(Math.floor(5.6)); //floor means taking low value =5
console.log(Math.min(1,5,8,3,2)); //1
console.log(Math.max(1,5,8,3,2));  //8

console.log (Math.floor(Math.random()*10+1)); // random value from 1

const max =10;
const min = 5;

console.log(Math.floor(Math.random() * (max-min +1)) + min)












