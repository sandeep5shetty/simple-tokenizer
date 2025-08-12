// Final Clean Token Display with Encoding and Decoding
const { Tokenizer } = require('./simple_tokenizer.js');
const prompt = require('prompt-sync')();

//creating object of class Tokenizer
const obj = new Tokenizer();

const input = prompt('Enter your text: ');

console.log(`\nINPUT: "${input}"`);

// ENCODING: Convert text to tokens and token IDs
const result = obj.encode(input);

console.log("\n----ENCODING----");
console.log("Tokens : ", result.tokens.join(" | "));
console.log("Token IDs: ", result.tokenIds.join(" | "));
console.log("Output Set of Tokens : ", `[${result.tokenIds.join(", ")}]`);

// DECODING: Convert token IDs back to text
const decodedText = obj.decode(result.tokenIds);

console.log("\n----DECODING----");
console.log("Tokens : ",`[${result.tokenIds.join(", ")}]`);
console.log("Decoded Text : ", `"${decodedText}"`);


