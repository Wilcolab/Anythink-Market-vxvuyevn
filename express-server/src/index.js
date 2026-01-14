const express = require('express');

const app = express();
const PORT = 8001;

const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

app.get('/items', (req, res) => {
    res.json(items);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});