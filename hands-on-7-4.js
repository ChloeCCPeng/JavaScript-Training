/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


const array = ['pen', 'waterBottle', 'remote', 'hairtie'];
console.log(array);

array.pop();
console.log(array)

array.unshift(array.pop())
console.log(array)

array.sort();
console.log(array)

let found = array.find((item) => item.length > 5)
    console.log (found)
    //remote
    
let remove = 'hairtie';
array.splice(array.indexOf(remove), 1);
console.log(array)

// array.forEach(function(item) {
//     if(item.length > 5) {
//         console.log(array.pop())
//         console.log(array)
//     }
// })
