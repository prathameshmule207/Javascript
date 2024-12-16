//FIlter Function
 
const mynum = [1,2,3,4,5,6,7,8,9,10]

const newnum = mynum.filter( (num)=> num<=5)    //Arrow function  (num)we can use here whatever we want it auto declered to array
//console.log(newnum);

//===================================================================

const Myboks =[
    {
        title:"Book One" , genre: "History" , publish : "2020" , Edition:"1990"
    },
    {
        title:"Book Two" , genre: "History" , publish : "2020" , Edition:"1990"
    },
    {
        title:"Book Three" , genre: "Friction" , publish : "2021" , Edition:"1890"
    },
    {
        title:"Book Four" , genre: "History" , publish : "2022" , Edition:"1980"
    },
    {
        title:"Book Five" , genre: "Friction" , publish : "2023" , Edition:"1970"
    },
    {
        title:"Book Six" , genre: "History" , publish : "2024" , Edition:"1870"
    },
    {
        title:"Book Seven" , genre: "Science" , publish : "2025" , Edition:"2000"
    }
]

let userbooks = Myboks.filter( (item ) => item.genre === 'History' && item.publish >= 2022)


console.log(userbooks);

