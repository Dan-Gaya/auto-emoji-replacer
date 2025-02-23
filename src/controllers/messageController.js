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
      const { message } = req.body;

    if (!message) {
        return res.status(400).json({error: "Missing required fields: message" });
    }

    const modifiedMessage = exports.appendEmojis(message);
    // Build the response payload as per Telex spec
      const responsePayload = {    
        message: modifiedMessage,
        status: "success",
    
      };
      console.log("Body",responsePayload)
      res.json(responsePayload);
};
