class WalletPSV{
    constructor(keyPair){
        this.keyPair = keyPair;
        this.transaction = [];   
        this.blocks = [] // Get from blockChain (Only Hash, Timestamp, root, nonce);      
    }

    executeTransaction(toAddress, amount){
        /**
         * ליצור טרנזקציה
         * לחתום אותה
         * לשלוח לpending
         * לרשום אותה בארנק
         */
    }

    checkTransactionInBlock(hash){
        /**
         * לשלוח לבלוקצ'יין שיבדוק באמעות בלוםפילטר 
         * יחזיר את הטרנזקציה
         * יחזיר את הhash של הבלוק
         * יחזיר את המרקלטרי לבדיקה
         */
    }

    verifyTransactionInBlock(hash, MerklePath) {
        /**
         * יבדוק אם מתאים לblock
         */
    }
}