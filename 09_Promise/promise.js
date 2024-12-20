const promiseOne = new Promise(function(resolve,reject){
 //Do an async Task
 //DB calls ,cryptography,newtork
setTimeout(function(){
console.log("Async Task Complete");
resolve()

},1000)
})

promiseOne.then(function(){
    console.log("promice consumed");
    
})
//==============================================
//or we can write this
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async task 2 resovled");
    
})

//==================================================
// new Promise(function(resolve,reject){
//    setTimeout(function(){
//     resolve({username:'chai',email:'chai@gmail.com'})
//    },1000)
// })
// .then(function(user)
// {
// console.log(user);
// })

//=======================================

// const newPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username:'prathamesh',pass:'123'})
//         }else{
//             reject('ERROR:Somethis went wrong')
//         }
        
//     },1000)
// })
// newPromise
// .then((user)=>{
// console.log(user);
// return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((error)=>{
//     console.log(error);   
// })
// .finally(()=>console.log('promise is either resolved or reject'))

//======================================

// const AsyncPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username:'JS',pass:'123'})
//         }else{
//             reject('ERROR:JS went wrong')
//         }
        
//     },1000)
// })

// async function consumedpromise() {
//     try {
//         const response = await AsyncPromise
//         console.log(response);
        
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }
// consumedpromise()


//===========Fetch from api=======================================
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data =await response.json()
    console.log(data);
    
    } catch (error) {
        console.log("E:",error);
        
    }
    
}

getAllUsers()