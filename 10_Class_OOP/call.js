function SetName(username){
this.username = username
}

function createusername(username,email,password){
    SetName.call(this,username)  //call this from another function
    this.email=email
    this.password=password

}

const chai =  new createusername("chai","chai@gmail.com",123)
console.log(chai);
