const {Blockchain, Block, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const { MerkleTree } = require('merkletreejs');

class WalletPSV{
    constructor(keyPair){
        this.keyPair = keyPair;
        this.transaction = [];   
        this.blocks = [] // Get from blockChain (Only Hash, Timestamp, root, nonce);      
    }

    executeTransaction(toAddress, amount){
        let tranc = new Transaction(myKey.getPublic('hex'), toAddress, amount);
        let singTranc = tranc.signTransaction(this.keyPair);
        return singTranc;
        /**
         * ליצור טרנזקציה
         * לחתום אותה
         * לשלוח לpending
         * לרשום אותה בארנק
         */
    }


    /**
     * 
     * @param {*} hash 
     */
    checkTransactionInBlock(hash){

        /**
         * לשלוח לבלוקצ'יין שיבדוק באמעות בלוםפילטר 
         * יחזיר את הטרנזקציה
         * יחזיר את הhash של הבלוק
         * יחזיר את המרקלטרי לבדיקה
         */
    }


    /**
     * 
     * @param {*} hash 
     * @param {*} MerklePath 
     */
    verifyTransactionInBlock(trancHash, blockHash, merklePath, merkleTree) {
        const merkleRoot = this.blocks.find(this.blocks.hash == blockHash).merkleRoot;
        return merkleTree.verify(merklePath, trancHash, merkleRoot);
    }
}