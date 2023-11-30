/**
 * Complete the countOcc function to accept two params and return how many times the 2nd param occured in the 1st param
 */

function countOcc(text, word) {

    let count = 0
  
    for (let i=0; i < text.length ; i++){
  
      if(text[i] === word){
  
      count++
  
    }
  
  }
  
   
  
  return count
  
  }