/* 
    return a boolean if the passed string is palindrome

    Exp:
    isPalindrome("racecar") => true
    isPalindrome("Hello") => false
*/

// function isPalindrome( str) {
//     var x = ("racecar")
//     var y =("Hello")
//     if (str == x){
//         return true
        
//     }else if( str == y ){
//         return false
//     }
//     console.log( x, y)
// }
// isPalindrome() 
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
    if (cleanStr === cleanStr.split('').reverse().join('')) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isPalindrome("racecar")); 
  console.log(isPalindrome("Hello"));
  
  

