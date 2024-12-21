class User {
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`Username is ${this.username}`);
        
    }
}


class teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai =new teacher("chai","chai@gmail.com","123")

chai.addcourse()
const masalachai = new User("masalachai")
masalachai.logme()