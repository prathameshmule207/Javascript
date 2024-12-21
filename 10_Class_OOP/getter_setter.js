class User {
    constructor(email,password){
        this.email=email;
        this.password=password
    }

    get email(){
     return this._email.toUpperCase()
    }

   set email(value){
  this._email=value
}
//get set is used for protection
//it overwrite on the const prathamesh value ...it getiing value in get then set as we want

    get password(){
     return this._password.toUpperCase()
    }

    set password(value){
  this._password=value
    }
}

const prathamesh = new User("prathamesh@gmail.com","abc")
console.log(prathamesh.password);
console.log(prathamesh.email);
