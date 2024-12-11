const marvel = ["thor","ironmn","stange"]
const dc_heros = ["superman","spiderman"]

// marvel.push(dc_heros)
// console.log(marvel);

// console.log(marvel[3][1]);

// const all_heros = marvel.concat(dc_heros);
// console.log(all_heros);

const all_heros = [...marvel,...dc_heros]  //it spreads all values
// console.log(all_heros);

const anotherarray = [1,3,2,4,[1,2,4],4,5,7,8,9,[1,3,[1,2,3]],4.6]
const realarray = anotherarray.flat(Infinity)          //[ 1, 3, 2,4, 1, 2, 4,4, 5, 7,8, 9, 1, 3, 1, 2, 3, 4.6 ]
console.log(realarray);


let score1 = 100 ;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); //it combine all values



console.log(Array.isArray("prathamesh"))
console.log(Array.from("prathamesh"));
console.log(Array.from({name:"Prathamesh"}));




