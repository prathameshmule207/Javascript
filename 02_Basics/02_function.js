
function setmyname() {
    console.log("p");
    console.log("p");
    console.log("p");
    console.log("p");
    console.log("p");
    
}
setmyname()

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

console.log(LogginUserMessege());



