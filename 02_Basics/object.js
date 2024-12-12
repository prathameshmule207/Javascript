//singleton

//object.create

//Object Literals

const mysym = Symbol("key1")
const JsUser  = {
    Name :"prathamesh",
    [mysym] : "mykey1",  //when we have to use as symbol use have to use []
    age: 22,
    Email: "prathameshmule207@gmail.com",
    IsLoggin : false ,
    LastLOggin :["Monday,tuesday"]


} 

//console.log(JsUser.Name)   //we can also take result from this

//console.log(JsUser["Name"]);  // for Object always use this

//console.log(typeof JsUser[mysym]);


JsUser.Email = "prathameshmule207@google.com"

Object.freeze(JsUser.Email) // use freeze for it will same permently we can not change it

//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}


JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${JsUser.Name}`);
   // console.log(`Hello Js User,${this.Name}`);

    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






