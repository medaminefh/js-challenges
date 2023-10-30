function fizzBuzzArray(number , any =[]) {
   
    for (let i = 1; i<= number; i++){
        if ( i % 3 === 0 && i % 5 ===0){
        any.push("FizzBuzz")
    
    } else if( i % 3 === 0){
        any.push("fizz")
    } else if( i % 5 === 0){
        any.push("Buzz")
    } 
else {
    any.push(i)
}
    }

return any

}
 const number = 35
 const output= fizzBuzzArray(number)
 console.log(output)



  

  
