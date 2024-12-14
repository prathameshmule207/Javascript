///How to Js Program run
//Javascript is a single Threded bcz har chis process hoti hai

/*Javascript Exicution Context  stored in (this operator)
1)Global Exicution COntext
2)Global Exicution COntext

when we run any code first it goes to-
1) memory creaton phase (variables ,numbers like that... all delceared values are allocate memory in this pahse ...not any exicution takes place here)  )
2) Execution Pahse ( all alocated values run and execute here..like +,-,functions)

*/
//For Example:
let val1 = 10;
let val2 = 5;
function addnum(num1,nmu2){
    let total = num1+num2
    return total
}

let result1 = addnum(val1,val2)
let result2 = addnum(5,2)

/*
Global Excution done here and all values are stored in (this) variable

Step-1)Memory Pahse:(create memory for all declered values)
   val1-undefined
   val2-undefined
   addnum-Defination
   result1-undefined
   result2-undefined

step-2) Execution phase(asssigned all value and exicute here)

val1=10
val2=5
addnum=Defination
result1=>Addnum ========>here new environment is created + Execute thread

                       Step-1)Memory Phase : num1=val1=undefined
                                             num2=val2=undefined
                                             total=Undefined 

                        Sep-2)Execution Phase : num1=10
                                                num2=5
                                                total=10+5=15
                                                return total agian goes to global execution

reuslt1=>15

result2=Addnum===========>here new environment is created + Execute thread

                        Step-1)Memory Phase : num1==undefined
                                             num2==undefined
                                             total=Undefined 

                        Sep-2)Execution Phase : num1=10
                                                num2=2
                                                total=10+2=12
                                                return total agian goes to global execution

 result2=>12
                                                                   

 */


 //============================Calls Tag==============================================================
function one(){
    console.log("one");
    
}
function two(){
    console.log("two");
    
}
function three(){
    console.log("three");
    
}

//here first functin calls first then second then third 
//also fist function execute first then second then third

//=======================================================================

function one()
{
  
  
    function two()
    {

        function three()
        {
            console.log("three");
        }

        console.log("two");
     }
    console.log("one");
}

//here first function calls first but second and third function in it so they also called like ....firstly calls first function then calls second function then call third funtion
//but when it times to execute it then firstly third function execute then second then first.

//this is also called LAST IN FIRST OUT (LIFO METHOD)
