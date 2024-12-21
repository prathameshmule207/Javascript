let myheros = ["thor","spiderman"]

let heroPower = {
    thor :"hammer",
    spiderman :"sling",

    getspidermanPower: function(){
        console.log(`spidy poer is ${this.spiderman}`);
        
    }

}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all object`);
    
}

Array.prototype.heyhitesh = function(){
    console.log(`hitesh seys hello`);
    
}
heroPower.hitesh()
//heroPower.heyhitesh()


//Inheritance

const User = {
    name:"chai",
    email:"chai@gmail.com"
}

const teacher = {
    makevideo:true
}

const Teachingsupport = {
    isAvaiables : false
}

const TASupport = {
    makdeassisment : 'js Assignment'
}

Object.setPrototypeOf(Teachingsupport,teacher)


let anotherUsername ="chai aur code"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is :${this.trim().length}`);
    
    
}
anotherUsername.trueLength()

"prthamesh".trueLength()
"ice Tea ".trueLength()