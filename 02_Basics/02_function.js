
function setmyname() {
    console.log("p");
    console.log("p");
    console.log("p");
    console.log("p");
    console.log("p");
    
}
//setmyname()

function AddTwoNumber (number1 ,number2){
    console.log(number1+number2);
    
}

// AddTwoNumber(1,2)
// AddTwoNumber(1,"2")
// AddTwoNumber(1,"a")
AddTwoNumber(1,null)


//another way to get function


function AddTwoNumber (number1 ,number2){
    return number1+number2
    
}

const result = AddTwoNumber(1,3)
//console.log("result:" ,result);



//=======================================================================================================

function LogginUserMessege(username = "Prathamesh"){
    if(!username){                            // ! is used for flase value means username==undefined
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}

//console.log(LogginUserMessege("prathamesh"));

//console.log(LogginUserMessege());

//----------------------------------------------------------------------------------------

//FUNCTION IN OBJECT

function CalculateCartPrice(val1,val2,...num1){    //this time ... means rest operator this use for store many value in one function
   return num1
}

//console.log(CalculateCartPrice(200,300,566,567));


const User = {
    userName : "prathamesh",
    price : 399

   }

function HandleObject(anyObject){
      console.log(`user name is ${anyObject.userName} and price is ${anyObject.price}`);
      
    }

 //HandleObject(User);

 //we can also use this method

//  HandleObject(
//     {
//    userName :"pm",
//     price : 455
//  })


 const NewUser = {
    uname: "prathamesh",
    mail:"prathamesh@gmail.com"
 }

 function FindObject(FindUser){
    console.log(`my name is${FindUser.uname} and mail is ${FindUser.mail}`);
    
 }
 
 FindObject(NewUser);

 FindObject({
    uname :"pm",
     mail :"pm@gmail.com"
    
 })




 //------------------------------------------------------------
 //FUNCTION IN ARRAY

 const MyAraay = [11,233,5678]

 function ReturnValue(NewArray){
   return NewArray[1]
 }
 
 //console.log(ReturnValue(MyAraay));

 //also we can use this method

 //console.log(ReturnValue([11,233,5678]))



 const mynumber = [1,2,3,4]

 function Findnumber(secondnumber){
     return secondnumber[2]
 }

// console.log(Findnumber(mynumber));
 
 //console.log(Findnumber([1,2,3,4]));


 