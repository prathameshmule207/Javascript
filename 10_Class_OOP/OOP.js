//object literal

let user = {
    username:"prathamesh",
    logincount:8,
    signedin:true,

    getUserDetails: function(){
        //console.log(`username:${this.username}`);  //this means take in this function value
        console.log(this);
        
    }

}


//console.log(user.username);
//console.log(user.getUserDetails);

//============================

//constructor function

function User(username,loggincount,isloggedIn){
    this.username = username;
    this.loggincount = loggincount;
    this.isloggedIn = isloggedIn

    this.greeting = function(){{
        console.log(`welcome ${this.username}`);
        
    }}

    return this
}

const userOne = new User("prathamesh", 12 , true) //when we use new it create new instance (copy)
const userTwo = new User ("Js" , 12,false)   //when we dont write new keyword then this value will overwrite this value in one
console.log(userOne.constructor); //encapsulation is we store many value in this userOne
console.log(userTwo);

