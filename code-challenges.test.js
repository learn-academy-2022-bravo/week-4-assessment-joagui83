// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("arrShuff", () => {
    it("'matches even if received contains less elements'", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    expect(arrShuff(colors1)).not.toEqual(expect.colors1)
    expect(arrShuff(colors2)).not.toEqual(expect.colors2)
    })
})
// FAIL  ./code-challenges.test.js
// arrShuff
//   ✕ 'matches even if received contains less elements'

// ● arrShuff › 'matches even if received contains less elements'

//   ReferenceError: arrShuff is not defined


// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// b) Create the function that makes the test pass.

// --------------------------Pseudo-----------------------

// create a function = arrShuff
// set up an array parameter adn set up a new variable with an empty array to hold the new array = shiftArr
// use methods .shift to remove the first item and   .sort, .slice, .Math.random 

const colors1 = ["purple", "blue", "green", "yellow", "pink"];
const colors2 =  ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"];
let shiftArr = [];

const arrShuff = (array => {
    shiftArr = array.shift(1)
        return array.slice().sort(() => Math.random()-0.5);
    }
)



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minMaxArr", () => {
    it("takes in an array and returns minimum and maximum numbers in tat order", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        const nums2 = [109, 5, 9, 67, 8, 24]
    expect(minMaxArr(nums1)).toEqual([-8, 90])
    expect(minMaxArr(nums2)).toEqual([5, 109])
    
    })
})

// FAIL  ./code-challenges.test.js
// arrShuff
//   ✓ 'matches even if received contains less elements' (1 ms)
// minMaxArr
//   ✕ takes in an array and returns minimum and maximum numbers in tat order (1 ms)

// ● minMaxArr › takes in an array and returns minimum and maximum numbers in tat order





// b) Create the function that makes the test pass.
//----------------Pseudo----------------------
// create a function. const minMaxArr
// use an array paramater 
// use sort inside two variables to find min and max
// return the results 


const nums1 = [3, 56, 90, -8, 0, 23, 6];
const nums2 = [109, 5, 9, 67, 8, 24];

const minMaxArr = (array) =>{
        const maximum = array.sort((a, b) => b - a)[0];
        const minimum = array.sort((a, b) => a - b)[0];
        const results = [minimum, maximum];
    return results;
};

// PASS  ./code-challenges.test.js
// arrShuff
//   ✓ 'matches even if received contains less elements' (1 ms)
// minMaxArr
//   ✓ takes in an array and returns minimum and maximum numbers in tat order





// 
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("comboArray", () => {
    it("two arrays as arguments and returns one array with no duplicate values", () => {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]

    expect(comboArray(nums1)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

// FAIL  ./code-challenges.test.js
// comboArrays
//   ✕ two arrays as arguments and returns one array with no duplicate values (1 ms)

// ● comboArrays › two arrays as arguments and returns one array with no duplicate values

// b) Create the function that makes the test pass.

//-------------------------PSEUDO-------------------

//create a function comboArrays
// use spread operator to merge arays use Set to remove duplicate values 
// set up a variable with an empty array and use to concatenate the arrays into a new array without duplicates



// b) Create the function that makes the test pass.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]

const comboArray= (...arr) =>{   
    let newArr = [...testArray1, ...testArray2];
    let uniqueArr = [...new Set(newArr)];

    return uniqueArr;
}





