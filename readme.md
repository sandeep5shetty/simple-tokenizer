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
```
.
├── main_file.js           # Entry point - handles user input & displays results
├── simple_tokenizer.js    # Tokenizer class with vocab management & encoding logic
└── token_dictionary.json  # Vocabulary file (auto-created/updated)
```

## ⚙️ Installation & Usage

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/sandeep5shetty/simple-tokenizer
cd simple-tokenizer
```

### 2️⃣ Install Dependencies
```bash
npm install prompt-sync
```

### 3️⃣ Run the Program
```bash
node main_file.js
```

### Example Run
```
INPUT: "My name is Sandy"

New token added to dictionary ===> My:165

New token added to dictionary ===> name:166

New token added to dictionary ===> Sandy:167

----ENCODING----
Tokens :  <BOS> | My | name | is | Sandy | <EOS>
Token IDs:  1 | 165 | 166 | 149 | 167 | 2
Output Set of Tokens :  [1, 165, 166, 149, 167, 2]

----DECODING----
Tokens :  [1, 165, 166, 149, 167, 2]
Decoded Text :  "My name is Sandy"
```

## 🛠 How It Works
1. **Tokenization** – Splits input into words, numbers, punctuation using regex.
2. **Vocabulary Management** – Checks if token exists in `token_dictionary.json`;  
   - If yes → retrieves its ID.  
   - If no → assigns next ID


