const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

// repeatTimes устанавливает число повторений str
// separator это строка, разделяющая повторения str
// addition это дополнительная строка, которая будет добавлена после каждого повторения str
// additionRepeatTimes устанавливает число повторений addition
// additionSeparator это строка, разделяющая повторения addition

function repeater(str, options) {
    str = String(str);
    let result = "";
    let addition = "";


    const optionalParams = {
        repeatTimes: 1,
        separator: '+',
        addition: "",
        additionSeparator: '|',
        additionRepeatTimes: 1,
    }
    for (let key in options) {
        optionalParams[key] = options[key];
    }
    if (optionalParams['addition'] === '') {
        addition = "";
    } else if (optionalParams['repeatTimes'] == 1 && optionalParams['additionRepeatTimes'] > 1) {
        addition = (optionalParams['addition'] + optionalParams['additionSeparator']).repeat(optionalParams['additionRepeatTimes']).slice(0, -optionalParams['additionSeparator'].length);
    } else if (optionalParams['repeatTimes'] == 1) {
        addition = optionalParams['addition']
    } else if (optionalParams['additionRepeatTimes'] == 1) {
        addition = optionalParams['addition']
    } else {
        addition = (optionalParams['addition'] + optionalParams['additionSeparator']).repeat(optionalParams['additionRepeatTimes']).slice(0, -optionalParams['additionSeparator'].length);
    }

    result = (str + addition + optionalParams['separator']).repeat(optionalParams['repeatTimes']).slice(0, -optionalParams['separator'].length)

    return result;

}

module.exports = {
    repeater
};

const objWithSpecificCoercion = {
    [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};
console.log(objWithSpecificCoercion);