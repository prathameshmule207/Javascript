let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let MyCreatedDate = new Date(2024,1,20)
console.log(MyCreatedDate.toDateString());

let Date_time = new Date(2024,1,20,5,4)
console.log(Date_time.toLocaleString());

let newdate = new Date ("2024-02-14")
console.log(newdate.toLocaleString());

let date = new Date("01-02-2024")
console.log(date.toLocaleString());

let GetDate = new Date ()
console.log(GetDate.getMonth() +1 ); //month start form 0 for this we write +1 to get month from 1
console.log(GetDate.getDay());



let timespan = Date.now()
console.log(timespan);
// console.log(timespan.getTime());


console.log(Math.floor(Date.now()/1000)); // to get tine value in minutes


newdate.toLocaleString(
    'default',
    {
        weekday:"long"
    
    }
)





