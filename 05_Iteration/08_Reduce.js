const Arr = [1,2,3]

// const myarr = Arr.reduce( function(accumulator,CurrentValue) {
//     return accumulator+CurrentValue

// },0 )               //0 is initial value

// we can take it as arrow function

const myarr = Arr.reduce( (acc,curval)=>acc+curval,0)   //0 is initial value

console.log(myarr);

/*steps: 1. it take initial value first =0
         2. then accu take initial value 0
         3. acc + curr value    0+1=1
         4. then acc take this total then add to next current value 1+2=3
         5. like that 3+3=6
          */


// EX:  Total of Shopping Cart items

const ShoppingCart = [
    {
        itemName : "JS",
        Price : 2999
    },
    {
        itemName : "C++",
        Price : 999
    },
    {
        itemName : "Python",
        Price : 3999
    },
    {
        itemName : "NOdeJs",
        Price : 4999
    }
]

const TotalPrice = ShoppingCart.reduce( (acc,item) => acc + item.Price,0)
console.log(`total price is ${TotalPrice}`)


