const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

    constructor(option = true) {
        this.option = option;
    }

    encrypt(str, key) {
        if (!str || !key) {
            throw new Error('Incorrect arguments!');
        }

        const result = [],
            spaceIndex = [],
            alphabetLength = 26,
            maxCharCode = 90,
            minCharCode = 65,
            startCharCode = 'A'.charCodeAt(0),
            keyLength = Math.ceil(str.length / key.length);

        for (let i = 0; i < str.length; i++) {
            if (str[i] == ' ') spaceIndex.push([i])
        }

        key = key.repeat(keyLength).toUpperCase().slice(0, str.length);
        str = str.toUpperCase().split(' ').join('');


        for (let i = 0; i < key.length; i++) {
            if (str.charCodeAt(i) >= minCharCode && str.charCodeAt(i) <= maxCharCode) {
                const keyIndex = key.charCodeAt(i) - startCharCode;
                const strIndex = str.charCodeAt(i) - startCharCode;
                result.push(String.fromCharCode(startCharCode + (keyIndex + strIndex) % alphabetLength));
            } else {
                result.push(str[i]);
            }
        }

        spaceIndex.map(elem => {
            result.splice(elem, 0, ' ')
        });

        if (this.option == true) {
            return result.join('')
        } else {
            return result.reverse().join('');
        }
    }



    decrypt(str, key) {
        if (!str || !key) {
            throw new Error('Incorrect arguments!');
        }

        const result = [],
            spaceIndex = [],
            alphabetLength = 26,
            maxCharCode = 90,
            minCharCode = 65,
            startCharCode = 'A'.charCodeAt(0),
            keyLength = Math.ceil(str.length / key.length);

        for (let i = 0; i < str.length; i++) {
            if (str[i] == ' ') spaceIndex.push([i])
        }

        key = key.repeat(keyLength).toUpperCase().slice(0, str.length);
        str = str.toUpperCase().split(' ').join('');


        for (let i = 0; i < key.length; i++) {
            if (str.charCodeAt(i) >= minCharCode && str.charCodeAt(i) <= maxCharCode) {
                const keyIdx = key.charCodeAt(i) - startCharCode;
                const messageIdx = str.charCodeAt(i) - startCharCode;
                result.push(String.fromCharCode(startCharCode + (messageIdx - keyIdx + alphabetLength) % alphabetLength));
            } else {
                result.push(str[i]);
            }
        }

        spaceIndex.map(elem => {
            result.splice(elem, 0, ' ')
        });

        if (this.option == true) {
            return result.join('')
        } else {
            return result.reverse().join('');
        }
    }
}




module.exports = {
    VigenereCipheringMachine
};