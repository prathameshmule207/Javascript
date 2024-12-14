
const userEmail =""

// truthy value means it automatically assums as true value
// Falsy value means it automatically assums as false value

//Falsy values: 0, -0 , False , NaN , Null , Undefined , Bigint on , ""
//Truthy Values: "0" , 'False' , " ",[] , {} ,function(){} 
//

//we do not write here usermail==true so it automatically assume as true

if(userEmail){
    console.log("this is truthy value");
    
}else
{
console.log("this is not truthy value");

}


//How to check it is true value or False

if (userEmail.length === 0){
    console.log("Array is empty")
}


//for Object
const Emptyobj = {}
if (Object.keys(Emptyobj).length === 0 ){
    console.log("Object is Empty");
    
}

//=========================================================================

//Eqality Comparison 
//False == 0 =>True
//false == '' => True
// 0 == '' =>  True

//==================================================================

//Nullish Coalescing Operator (??)  : null ,Undefined
//it used as take first value or take second value ...based on priority

val1 = 5 ?? 10 //it write first value  5
console.log(val1);

val2 = null ?? 10  //it write 10
console.log(val2);

val3 = undefined ?? 15  //it write 15
console.log(val3);

val4 = null ?? undefined //undefined
console.log(val4);

val5 = null ?? 200 ?? 20  //200
console.log(val5);


//==========================================================================

//Terniary Operator

//Condition ? (true Statement)  : (False Statement)

const IceTeaPrice = 100;

IceTeaPrice <= 80 ? console.log("less than 80"):console.log("Greater than 80");


