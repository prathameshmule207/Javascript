class user {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`Username ${this.username}`);
        
    }

    static createId(){   //static stop acces of this method or property to any other method
        return`123`
    }
}

const prathamesh = new user("prathamesh")
console.log(prathamesh.createId());
