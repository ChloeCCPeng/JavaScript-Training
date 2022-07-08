/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


let array = ['pen', 'waterBottle', 'remote', 'hairtie'];

let arrayRemove = array.pop();
console.log(array)

let arrayAdd = array.unshift('hairtie')
console.log(array)

let arraySort = array.sort();
console.log(array)

let found = array.find (function (item) {
    console.log (item.length > 5)
})
//true
//false
//true

// array.forEach(function(item) {
//     if(item.length > 5) {
//         console.log(array.pop())
//         console.log(array)
//     }
// })
