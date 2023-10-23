function arrayIntersection(arr1, arr2) {
    const arr3 = [];
  
    for (const item of arr1) {
        if(arr2.includes(item) && !arr3.includes(item)){
        arr3.push(item);
      }
    }
  
    return arr3
  }
  
  const result1 = arrayIntersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9])
  console.log(result1)

  const result2 = arrayIntersection([1, 1, 1, 1, 1], [2, 2, 2, 2, 2])
  console.log(result2)

const result3= arrayIntersection([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])
console.log(result3)
