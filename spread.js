let arr1 = [1, 2, 3];
let arr2 = [arr1];               // Nested array
let arr3 = [...arr1];            // Spread operator to copy elements
console.log("arr2:", arr2);      // Output: arr2: [ [ 1, 2, 3 ] ]
console.log("arr3:", arr3);      // Output: arr3: [ 1, 2, 3 ]
console.log('length arr2 is ',arr2.length);    // Output: 1
console.log('length arr3 is ',arr3.length);    // Output: 3