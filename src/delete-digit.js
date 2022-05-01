const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let array = ("" + n).split("").map(Number);
    let arrOfArray = [];
    let allNumber = [];
    let result = 0;
    array.forEach((elem) => {
        arrOfArray.push(array)
    })

    let newArrOfArray = JSON.parse(JSON.stringify(arrOfArray))

    for (let i = 0; i < newArrOfArray.length; i++) {
        newArrOfArray[i].splice(i, 1)
    }
    for (let i = 0; i < newArrOfArray.length; i++) {
        allNumber.push(Number(newArrOfArray[i].join('')))
    }

    return result = Math.max(...allNumber);;
}


console.log(deleteDigit(13421));
module.exports = {
    deleteDigit
};