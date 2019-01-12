const path = require('path');
const express = require('express');
const app = express();


// Initialize App
const PORT = 3000;
const HTML_DIR = path.resolve(__dirname, '../frontend/dist');
app.use(express.static(HTML_DIR));
app.get('/', (req, res) => {
  res.sendFile(path.join(HTML_DIR, 'index.html'))
});
app.get('/test', (req, res) => {
  res.json({success: 'this worked'})
});
app.listen(PORT, () => {
  console.log(`Running express app on port ${PORT}`);
  console.log(`http://localhost:${PORT}`)
});