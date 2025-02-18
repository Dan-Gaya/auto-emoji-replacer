const emojiDatabase = require('../models/emojiModel');

// Function to append emojis instead of replacing words
exports.appendEmojis = (text)=> {
    if (typeof text !== 'string') return text;

    let words = text.split(" ");
    let modifiedWords = words.map(word => {
        let emoji = emojiDatabase[word.toLowerCase()];
        return emoji ? `${word} ${emoji}` : word; // Append emoji instead of replacing
    });

    return modifiedWords.join(" ");
}

// API Handler for Telex GET Request
exports.processMessage = (req, res, next) => {
    const message = req.query.text;

    if (!message) {
        return res.status(400).json({ error: "No text provided in query parameters" });
    }

    const modifiedMessage = exports.appendEmojis(message);

    res.json({
        original: message,
        modified: modifiedMessage
    });
};
