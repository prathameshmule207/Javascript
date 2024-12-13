
//{ }  when it use in if else , do vwhile loop  like statements it called as Scope

let c = 3

//console.log(c);  //it is called Global Scope it is outside bracket

if (true){       //  Block Scope means it is inside bracket
    let a=1;
   let b=2;
  let  c=3;
  //console.log("inner :", c)
}  

//----------------------------------------------------------------------------
function one(){

    Username ="prathamesh"
    
    function two(){
        website= "youtube"
        console.log(Username);     //child variable can access parent varable nut parent not access child
        
    }
    //console.log(website);  //we can not access child from parent element
    
    two()
}
one()

//----------------------------------------------------------------------------------
if (true){
   const username = "prathamesh"

   if(username=="prathamesh")
    {
    const website = " youtube"
    console.log(username + website);
    
   }

}

//---------------------------------------------------------------------------
console.log(one(3))

function one (num){            //it is called Function....bcz we can exicute function before it
return num +1;
}

//------------------------------------------------------------------------------


const two = function(num){    //it also called function but it we called it  a expression...we cannot exicute it before write
    return num+2
}
console.log(two(5))

