//Immidiatly Invoked Function Expression (IIFE)
//it is used for reduce globle scope pollution variables and for immidiety Exicute the function


//it is called named iife
(function chai(){     
    console.log("DB Connected");
    
})

();   //use (); before writing function   .....  ; is compulsary after ():


//unNameed iife
( () => {
    console.log("DB2 Connected");
    
} )

();   // IIfe with arrow function


( (name) => {
    console.log(`DB2 Connected ,${name}`);
    
} )

("prathamesh");  
