/* 
    Accept a string as a parameter 
    and returns a string with the first letter of each word capitalized
    
    Exp:
    titleCase("hello world!") => Hello World!
*/

 function titleCase(str) {
    return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

 }
const word1 = "hello world !"
const result = titleCase(word1)
console.log(result)







  