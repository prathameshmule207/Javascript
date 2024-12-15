//for_in loop print key & values 


const MyObject = {
  js : "Javascript",    //js is key  and kjavascript is its value
  py : "python",
  capp : "C++"

}

for (const key in MyObject) {
  // console.log(key);
  console.log(`${key} is shortcut for ${MyObject[key]}`);
  
   
}


const programming = ["IGI","Counter","PUBG"]

for (const key in programming) {
   console.log(programming[key]);
   
}
