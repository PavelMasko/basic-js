const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */


function encodeLine(str) {
    // if (!str) return '';
    let arrLetter = []
    let numLetter = 0
    let letter

    let newArr = str.split('');


    newArr.forEach((item, index) => {
        if (index === 0) {
            letter = item
        }
        if (item === letter) {
            numLetter++
        }
        if (item !== letter) {
            arrLetter.push([numLetter, letter])
            letter = item
            numLetter = 1
        }
        if (index === str.length - 1) {
            arrLetter.push([numLetter, letter])
        }
    })

    let result = [];
    for (let i = 0; i < arrLetter.length; i++) {
        result.push(arrLetter[i].join(''))
    }
    return result.join('').replace(/1/g, '')
}
console.log(encodeLine('aaaatttt'));





// function encodeLine(str) {

//     let arr = Array.from(str.split('').reduce((acc, el) => {
//         acc.set(el, (acc.get(el) || 0) + 1);
//         return acc;
//     }, new Map()));
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i].join(''))
//     }
//     return newArr.join('').replace(/1/g, '')

// }
// console.log(encodeLine('abbcca'));
module.exports = {
    encodeLine
};