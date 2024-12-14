//this function
//this not used in function

const user = {
    username :"Prathamesh",
    price : 999 ,
    WelcomeMessage : function(){
        console.log(`${this.username},welcome to website`);
        
    }
}
console.log(user.WelcomeMessage());

console.log(user);

//=================================================================
const chai = function(){
    let username = "prathamesh"
    console.log(username);
}
console.log(chai());

//===================================================================


//ARROW Function


const addtwo = (num1,num2) => {
    return num1 +num2
}
console.log(addtwo(1,2));      // this is called implicit arrow function

//Aslo we can write this with arrow function

//==========================================================================


const addthree = (num1,num2) =>  (num1 + num2)
console.log(addthree(2,3));    //this is called explicit arrow function

const addfour =(num1,num2) => ({username : "prathamesh"})  //arrow function with object

console.log(addfour());





