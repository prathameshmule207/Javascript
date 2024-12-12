
//SINGLE TON OBJECT
//const tinderuser = new Object()

//NON SINGLETN OBJECT
const tinderuser ={}

tinderuser.id = "ABC123"
tinderuser.name = "prathamesh"
tinderuser.Email = "prathameshmule207@gmail.com"

console.log(tinderuser);

console.log(Object.keys(tinderuser));

console.log(Object.values(tinderuser));

console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("id"));




const newUser = {
    email: "sum@gmail.com",
    fullName : {
        userfullname: {
            fisrname:"prathamesh",
            lastname :"mule"
        }
    }
}

//console.log(newUser.fullName.userfullname.fisrname);  //nesting


const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj3 = {5:"a" , 6:"b"}

//console.log(obj1,obj2,obj3);

// const obj4 = Object.assign({} ,obj1,obj2,obj3)
//console.log(obj4);

const obj4 = {...obj1,...obj2,...obj3}
//console.log(obj4);






//DE Structuring in Object
const course = {
    courseName:"JavaScript",
    price: 999,
    courseIntrusctor : "Prathamesh"
}

//const {courseName} =course
const {courseName:Name} =course  //
console.log(Name);


// JSON = KEys and Values Are same i.e. string

// {
//     "Name" :"prathamesh",
//    "price" : "free",
//    "course" : "JS"

//  }