const arr = [1,2,3,4,5,6,7,8]

//const newarr = arr.map( (num) => num +1 )
// console.log(newarr);

//Chaining

const newarr = arr.map( (num) => num *10)  //10,20,30,40,50,60,70,80
                  .map( (num) => num +1)   // adding 1 to above array 11,21,31,41,51,61,71,81
                  .filter( (num) => num<=45)  //here it only take greater than 45 values form above array

                  console.log(newarr);
                  


