const fs = require('fs');

class Tokenizer {
    constructor(vocabFile = 'token_dictionary.json') {
        this.vocabFile = vocabFile;

        //loading the vocabulary from the file
        this.loadVocab();

        this.tokenPattern = /([a-zA-Z]+|[0-9]+|[.,!?;:'"()\-_]|\s+)/g;
    }

    loadVocab() {
        try {
            if (fs.existsSync(this.vocabFile)) {
                //reading the file
                const data = fs.readFileSync(this.vocabFile, 'utf8');
                const savedState = JSON.parse(data);

                this.vocab = savedState.vocab;
                this.nextId = savedState.nextId;
                return true;
            }
        } catch (error) {
            console.log(`Error loading vocabulary: ${error.message}`);
        }
        return false;
    }

    saveVocab(newToken) {
        try {
            const state = {
                vocab: this.vocab,
                nextId: this.nextId
            };

            fs.writeFileSync(this.vocabFile, JSON.stringify(state, null, 2));
            //displaying the newly added token 
            console.log(`\nNew token added to dictionary ===> ${newToken}:${this.vocab[newToken]}`);
            return true;
        } catch (error) {
            console.error(`Error saving vocabulary: ${error.message}`);
            return false;
        }
    }

    addToVocab(token) {
        if (!(token in this.vocab)) {
            this.vocab[token] = this.nextId;
            this.nextId++;
            // Auto-save when new tokens are added
            this.saveVocab(token);
        }
        return this.vocab[token];
    }

    tokenize(text) {
        const tokens = text.match(this.tokenPattern) || [];
        return tokens.filter(token => token.trim().length > 0);
    }

    encode(text) {
        const tokens = this.tokenize(text);
        const result = {
            tokens: [],
            tokenIds: [],
            tokenTypes: []
        };
        //adding "<BOS>"
        result.tokens.push('<BOS>');
        result.tokenIds.push(this.vocab['<BOS>']);

        tokens.forEach(token => {
            const tokenId = this.addToVocab(token);

            result.tokens.push(token);
            result.tokenIds.push(tokenId);
        });

        //adding "<EOS"
        result.tokens.push('<EOS>');
        result.tokenIds.push(this.vocab['<EOS>']);

        return result;
    }
}

module.exports = { Tokenizer };
