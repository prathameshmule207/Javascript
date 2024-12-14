//if else statement

//

const userloggIn = true;
const DebitCard = true;
const logginFromGoogle = false;
const logginFromEmail = true;

//when we want all conditions are true then we can &&
if(userloggIn && DebitCard && 1000==1000){
console.log("Allow to buy Course");

}
else{
console.log("sorry");

}


//OR Function

if(logginFromGoogle || logginFromEmail){
    console.log("You can loggin");
    
}


//===========================================
//< , > ,<= , >= ,== ,!= , === ,!==
const Amount = 9000

if(Amount<5000){
    console.log("Amount is Less");
    
}
else if (Amount>12000){
    console.log("Amount is more");
    
}
else if (Amount ==9000){
    console.log("Correct Amount");
    
}
else{
    console.log("Amount Does not Match");
    
}