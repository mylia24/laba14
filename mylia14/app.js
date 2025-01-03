const express = require('express');
const path = require('path')
const app = express();
const PORT = 3000;

const staticFiles = path.join(__dirname, 'static');
app.use(express.static(staticFiles));

app.get('/', (req, res) => {
  res.sendFile(path.join(staticFiles, '/index.html'));
});
app.get('/task1', (req, res) => {
    res.sendFile(path.join(staticFiles, '/task1.html'));
});
app.get('/task2', (req, res) => {
    res.sendFile(path.join(staticFiles, '/task2.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});