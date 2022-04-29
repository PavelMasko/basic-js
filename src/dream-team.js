const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    let arr = false;
    if (Array.isArray(members)) {
        arr = members.filter(item => typeof(item) === "string")
        arr = arr.map(item => item.trim().toUpperCase())
        arr = arr.sort()
        arr = arr.map(item => item.slice(0, 1))
        arr = arr.join('')

    }
    return arr;
}
// console.log(createDreamTeam(['   Matt', 'ann', 'Dmitry', 1]));

module.exports = {
    createDreamTeam
};