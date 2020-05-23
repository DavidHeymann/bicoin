const LENGTH_OF_ARRAY = 11;

function hexStringToByte(str) {
    if (!str) {
        return new Uint8Array();
    }

    var a = [];
    for (var i = 0, len = str.length; i < len; i += 2) {
        a.push(parseInt(str.substr(i, 2), 16));
    }

    return new Uint8Array(a);
}

/**
 * 
 * @param {*} modulo 
 * @param {*} isOdd 
 * @param {*} byteOfArray 
 */
function CodeFunction(modulo, byteOfArray, isEven = undefined) {
    let sumOfClac = byteOfArray.reduce((sum, byte) => {
        strBinary = byte.toString(2);
        [even, odd] = [...strBinary].reduce((r,char,i) => (r[i%2].push(char), r), [[],[]])
        sum[0] += parseInt(even.join(''), 2);
        sum[1] += parseInt(odd.join(''), 2);
        
        return sum;
    }, [0,0])

    if(isEven == undefined) {
        return [sumOfClac[0] % modulo, sumOfClac[1] % modulo];
    }
    if (isEven) {
        return [sumOfClac[0] % modulo];
    }
    
    return [sumOfClac[1] % modulo];
}

function ResultsHashFunctionFromHex(hashTrnsctn) {
    byteArray = hexStringToByte(hashTrnsctn)
    return CodeFunction(LENGTH_OF_ARRAY, byteArray) 
}

class BloomFilter {

    constructor() {
        this.bitArray = Array(LENGTH_OF_ARRAY).fill(0);
    }

    add(hashTrnsctn) {
        const indecies = ResultsHashFunctionFromHex(hashTrnsctn);
        indecies.forEach( index => this.bitArray[index] = 1);
    }

    isExist(hashTrnsctn) {
        const indecies = ResultsHashFunctionFromHex(hashTrnsctn);
        for (const index of indecies) {
            if (this.bitArray[index] != 1) {
                return false;
            }
        }

        return true;
    }

}

module.exports = BloomFilter;