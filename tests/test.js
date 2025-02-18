const request = require('supertest');
const app = require('../app'); // Import Express app
const emojiDatabase = require('../src/models/emojiModel');
const { appendEmojis } = require('../src/controllers/messageController'); // Import function directly

describe('Emoji API Tests', () => {
    // ✅ Test case for API endpoint response
    test('GET /api/process-message should append emojis correctly', async () => {
        const response = await request(app).get('/api/process-message?text=I am happy and cool');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('original', "I am happy and cool");
        expect(response.body).toHaveProperty('modified', `I am happy ${emojiDatabase.happy} and cool ${emojiDatabase.cool}`);
    });

    // ✅ Test case for unknown words (No modification)
    test('appendEmojis should not modify words without matching emojis', () => {
        const inputText = "this is a test";
        expect(appendEmojis(inputText)).toBe(inputText); // No emoji replacements
    });

    // ✅ Test case for case sensitivity
    test('appendEmojis should handle lowercase and uppercase words', () => {
        const inputText = "Fire FIRE";
        const expectedOutput = `Fire ${emojiDatabase.fire} FIRE ${emojiDatabase.fire}`; // 🔥🔥

        expect(appendEmojis(inputText)).toBe(expectedOutput);
    });

    // ✅ Test case for multiple matches
    test('appendEmojis should append emojis to multiple words in the sentence', () => {
        const inputText = "I love pizza and coffee";
        const expectedOutput = `I love ${emojiDatabase.love} pizza ${emojiDatabase.pizza} and coffee ${emojiDatabase.coffee}`;

        expect(appendEmojis(inputText)).toBe(expectedOutput);
    });

    // ✅ Test case for empty input
    test('appendEmojis should return an empty string for empty input', () => {
        expect(appendEmojis("")).toBe("");
    });
});
