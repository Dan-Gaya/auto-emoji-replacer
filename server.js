//import modules
const http = require('http');
const app = require('./app');

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;


// Start server
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


