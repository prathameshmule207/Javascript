class user {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }
  
    encryptPassword(){
        return`${this.password}abc`
    }
    changeuser(){
        return`${this.username.toUpperCase()}`
    }
}

const chai = new user("chai","chai@gmail.com",123)
console.log(chai.encryptPassword());
console.log(chai.changeuser());


//=========================================================
//same as function

function newuser(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

newuser.prototype.encryptpass = function(){
     return`${this.password}abc`
}

newuser.prototype.changename = function(){
    return`${this.username.toUpperCase()}`
}

const tea = new newuser("tea","tea@gmail.com","1234")

console.log(tea.encryptpass());
console.log(tea.changename());

