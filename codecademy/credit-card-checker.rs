// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8] 
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]
const coba_batch = [mystery1,mystery2,mystery3,mystery4,mystery5]

// Add your functions below:
// Original Number:	4	5	5	6	7	3	7	5	8	6	8	9	9	8	5	5	
// Drop the last digit:	4	5	5	6	7	3	7	5	8	6	8	9	9	8	5		
// Reverse the digits:	5	8	9	9	8	6	8	5	7	3	7	6	5	5	4		
// Multiple odd digits by 2:	10	8	18	9	16	6	16	5	14	3	14	6	10	5	8		
// Subtract 9 to numbers over 9:	1	8	9	9	7	6	7	5	5	3	5	6	1	5	8		
// Add all numbers:	1	8	9	9	7	6	7	5	5	3	5	6	1	5	8		85
// Mod 10:	85 modulo 10 = 5 (last digit of card)

// step 1 ilangin angka blkg
const pop_last_digit = (array) =>  array.pop()
const array_reverse = (array) =>  array.reverse()




const validate = (array) => {
    // let newArray = array.slice()
    // pop_last_digit(newArray)
    // array_reverse(newArray)
    // console.log(newArray,valid1)
    const newArray = array
    pop_last_digit(newArray);
    console.log(array)
    console.log(newArray)
}

validate(valid1)
// var newArray1 = valid1
// newArray1.pop()
// console.log(valid1)
// // step 2 reverse
// var newArray2 = newArray1.reverse()
// console.log(valid1)
// // step 3 multiple 
// var newArray3 = newArra => {
    