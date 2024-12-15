//For each loop

const coding= [ "pytho", "css"]

// coding.forEach( function (val1){
// console.log(val1)
// })

//===================================================================================================
//with arrow function
/*
coding.forEach( (item) =>
{
    console.log(item)
    
})


//=======================================
function printMe (item){
console.log(item)

}
//==================================

coding.forEach(printMe)

//======================================================

coding.forEach(( item,index,arr)=>
{
    console.log(item,index,arr)
    
})  
*/
//=================================================================================
// Acess object in array with for_each

const Mycoding = [
 {
    language : "js",
    FileName : "Javascript"
 }
 ,
 {
    language : "py",
    FileName : "Python"
 }
 ,
 {
    language : "C",
    FileName : "C++"
 },]

 Mycoding.forEach((item) => {
console.log(item.language)

 })








