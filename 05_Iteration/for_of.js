
//For_of loop
//it doesn`t need to tell any condition it automatically take actions
//it cannot use on aboject
const Arr =[1,2,3,4,5]
for (const val of Arr) {
    console.log(val);
    
}

let greetings = "Hello World!"

for (const greet of greetings) {
    console.log(`Each char is : ${greet}`);
    
}

//Map
//it take only unique value...dont repeat same 

const map = new Map;
map.set ('IN' , "India")
map.set ('US' , "United State")
map.set ('FR' , "France")


//console.log(map);

for (const [key ,value] of map) {
    console.log(key ,":-" ,map);
    
}

