const { NotImplementedError } = require('../extensions/index.js');


const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        this.chain.push("( " + value + " )");
        return this;
    },
    removeLink(position) {
        if (Number.isInteger(position) && 0 < position && position <= this.chain.length) {
            this.chain.splice(position - 1, 1);
            return this;
        } else {
            this.chain = [];
            throw new Error('You can\'t remove incorrect link!');
        }
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let result = this.chain.join("~~");
        this.chain = [];
        return result;
    }
};

module.exports = {
    chainMaker
};