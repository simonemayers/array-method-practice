let numbers = [1, 2, 3, 4]
let letters = ["a", "b", "c"]
function getFirstValue(arr){
    return arr[0]
}
function incrementItems(arr){
    return arr.map(x => x+1)
}
function rotate(arr){
    let first = arr.shift(); 
    arr.push(first); 
    return arr
}
console.log(getFirstValue(numbers)); 
console.log(incrementItems(numbers))
console.log(rotate(letters))