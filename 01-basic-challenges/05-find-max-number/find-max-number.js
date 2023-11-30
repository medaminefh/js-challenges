/*  return the max number in the array, 
 so the function accept an array of numbers as a paramater and should return the greatest one
 exp

 findMaxNumber("hello world!") => Hello World!
 */
 function findMaxNumber(arr) {
    if (Array.isArray(arr)) {
        // Find the maximum number in the array
        return Math.max(...arr);
    } else {
        return "Not a valid array of numbers";
    }
}
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Maximum number:", findMaxNumber(numbersArray));
var Input = "hello world!";
console.log("Result:", findMaxNumber(Input));