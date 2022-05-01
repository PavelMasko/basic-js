const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let newArr1 = s1.split(''),
        newArr2 = s2.split(''),
        result = 0;

    for (let elem = 0; elem < newArr1.length; elem++) {
        if (newArr2.includes(newArr1[elem])) {
            newArr2.splice(newArr2.indexOf(newArr1[elem]), 1);
            result += 1;
        }
    }
    return result;
};

console.log(getCommonCharacterCount('abca', 'xyzbac'));
module.exports = {
    getCommonCharacterCount
};