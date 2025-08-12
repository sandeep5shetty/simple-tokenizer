// Final Clean Token Display
const { Tokenizer } = require('./simple_tokenizer.js');
const prompt = require('prompt-sync')();

//creating object of class Tokenizer
const obj = new Tokenizer();

const input = prompt('Enter your text: ');

console.log(`\nINPUT: "${input}"`);

const result = obj.encode(input);

console.log("\nTOKENS:", result.tokens.join(" | "));
console.log("\nTOKEN IDs:", result.tokenIds.join(" | "));
console.log("\nOUTPUT SET:", `[${result.tokenIds.join(", ")}]\n`);

