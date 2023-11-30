/* 
    remove duplicates from an array
*/
function removeDuplicates(arr) {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}


const originalArray = [1, 2, 3, 2, 1, 4];
const uniqueArray = removeDuplicates(originalArray);
console.log(uniqueArray);  
