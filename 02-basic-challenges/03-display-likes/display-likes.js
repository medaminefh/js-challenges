function displayLikes(likesArray=[]) {
    const length = likesArray.length
    switch (length) {
        case 0 :
           return  'no one likes this'
                  
        case 1 :
          return   ` ${likesArray[0]}likes this`
        case 2:
            return      ` ${likesArray[0]} , ${likesArray[1]} like this}`   
        case 3:
               return    `${likesArray[0]},  ${likesArray[1]} ,and ${likesArray[2]}like this}` 

          
        default:
        return ` ${likesArray[0]},${likesArray[1]}, and ${likesArray.length - 2} others like this`

      }



    }

  
 console.log(displayLikes([])) // 'no one likes this'
 console.log(displayLikes(['Peter'])) // 'Peter likes this'
 console.log(displayLikes(['Jacob', 'Alex'])) // 'Jacob and Alex like this'
 console.log(displayLikes(['Max', 'John', 'Mark'])) // 'Max, John and Mark like this'
 console.log(displayLikes(['Alex', 'Jacob', 'Mark', 'Max'])) // 'Alex, Jacob and 2 others like this'
 console.log(displayLikes(['Alex', 'Jacob', 'Mark', 'Max', 'Jill']) )// 'Alex, Jacob and 3 others like this'

  
  