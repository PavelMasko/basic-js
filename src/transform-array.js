const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    let result = [];

    if (!(Array.isArray(arr))) {
        throw new Error('\'arr\' parameter must be an instance of the Array!');
    } else if (arr.length == 0) {
        return result;
    }

    let newArr = [...arr]

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] == '--discard-next') {
            delete newArr[i + 1]
        } else if (newArr[i] == '--discard-prev') {
            if (result[i - 1] == newArr[i - 1]) {
                delete result[i - 1]
            }
            delete newArr[i - 1]
        } else if (newArr[i] == '--double-next') {
            if (newArr[i + 1] != undefined) {
                result.push(newArr[i + 1])
            }
        } else if (newArr[i] == '--double-prev') {
            if (newArr[i - 1] != undefined)
                result.push(newArr[i - 1])
        } else if (newArr[i] != undefined) {
            result.push(newArr[i])
        }
    }
    return result.filter(item => item != undefined)
}

// // [1, 2, 3, 4, 4, 5]
module.exports = {
    transform
};