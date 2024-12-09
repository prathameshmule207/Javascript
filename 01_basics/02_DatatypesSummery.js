//DATATYPES
//-----PRIMITIVE DATATYPES---------------------
// STRING, NUMBER ,BOOLEAN , NULL ,UNDEFINED , BIGINT , SYMOL


/*let undefined;

const Id = Symbol("123")
const NewId = Symbol("123")

//console.log(Id === NewId);*/

//--------REFERNCE(NON PRIMITIVE)-----------
//ARRAY , OBJECTS , FUNCTION


/*const  name = ["prathamesh" , "ravi"]; //ARRAY

const Obj ={
    name:Prathamesh,
    Age:22,
}                                     //Object
*/

//const MyFunction = function(){
 //   console.log("Hello World");
    
//}                                    // function



//---------------------STACK AND HEAP------------------

//All Primitive datatypes strored in Stack and all non primitive datatypes stored in heap

//STACK - original value remains the same , if we want to creat the same of original value then we get copy of that 
//HEAP - We get reference of original value inseat of get copy of that ,if we change value then original value aslo get changed.


// let Name ="prathamesh"
// let NewName =" Name"

// NewName ="Ravi"

// console.log(Name)       //Stack
// console.log(NewName)   //ans- original name remains same and also newname get the new declerd name instead of changing original name



let UserOne = {
    Email:"Prathameshmule207",
    UpiId:"prathamesh123"
}

let UserTwo = UserOne

UserTwo.Email ="prathamesh777"

console.log(UserOne)
console.log(UserTwo);


