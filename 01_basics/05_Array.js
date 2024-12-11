const Arr = [1,2,3,4,5]  //also we can write["Ironman","shaktiman","thor" , 1,2,3,'marvel]
// console.log(Arr1[0]);

//ARRAY Methods

//Arr1.push(6);
//console.log(Arr1); //add value

//Arr1.pop()
//console.log(Arr1); //remove last value

//Arr1.unshift(1);  //it insert value at start
//console.log(Arr1)

//Arr1.shift();
// console.log(Arr1);  //it remove start value

//quetion method

let arr2 = [1,2,3,4,5,6,7]
// console.log(arr2.includes(7));
// console.log(arr2.includes("prathamesh"));
// console.log(arr2.indexOf(3));

// const newarr = arr2.join()
// console.log(newarr);


//slice and splice
const Arr1 = [1,2,3,4,5,6,7,8]
console.log("A" , Arr1);

const myn1 = Arr1.slice(1,4) // it take indext from 1 to 3 but original array remains same
console.log(myn1);

console.log("B", Arr1);

const myn2 = Arr1.splice(1,4)  //it cut from index 1 to 4 permentlly ,original arr also change
console.log(myn2);
console.log("c",Arr1);
















