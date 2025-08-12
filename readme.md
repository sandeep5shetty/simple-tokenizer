# 📝 Simple Token Generator

A simple Node.js-based token generator that uses a persistent vocabulary to map words, numbers, and symbols to unique token IDs.  
New tokens are automatically added to the dictionary and saved for future runs.

## 📌 Features
- Tokenizes text into words, numbers, and punctuation.
- Assigns unique numeric IDs to each token.
- Maintains a persistent vocabulary in `token_dictionary.json`.
- Automatically saves newly encountered tokens.
- Special start/end tokens for wrapped sequences.

## 📂 Project Structure
.
├── main_file.js # Entry point - handles user input & displays results
├── simple_tokenizer.js # Tokenizer class with vocab management & encoding logic
└── token_dictionary.json # Vocabulary file (auto-created/updated)


## ⚙️ Installation & Usage

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/sandeep5shetty/simple-tokenizer
cd simple_tokenizer

###2️⃣ Install Dependencies

npm install prompt-sync

###3️⃣ Run the Program
node main_file.js


Example Run
Enter your text: Hello world!
INPUT: "Hello world!"

TOKENS:  | Hello | world | !
TOKEN IDs: 0 | 1 | 2 | 3
OUTPUT SET: [0, 1, 2, 3]


Author: Sandeep Shetty