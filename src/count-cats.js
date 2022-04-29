const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found

**/

function countCats(matrix) {
    let count = 0;
    matrix.filter(function(cat) {
        for (let i = 0; i < cat.length; i++) {
            if (cat[i] == "^^") {
                count++
            }
        }
    });
    return count;
}



module.exports = {
    countCats
};