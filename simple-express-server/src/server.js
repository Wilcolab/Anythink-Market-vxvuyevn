const express = require('express');

const app = express();
const PORT = 8001;

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Sample GET endpoint
app.get('/api/message', (req, res) => {
    res.status(200).json({
        message: 'Hello from Node.js Express server'
    });
});

// Sample POST endpoint
app.post('/api/message', (req, res) => {
    const data = req.body;

    if (!data || !data.text) {
        return res.status(400).json({ error: 'Text is required' });
    }

    res.status(201).json({
        received: data.text
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});