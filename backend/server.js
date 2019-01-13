const path = require('path');
const https = require('https');
const express = require('express');
const app = express();


// Initialize App
const PORT = 3000;
const HTML_DIR = path.resolve(__dirname, '../frontend/dist');
app.use(express.static(HTML_DIR));
app.get('/', (req, res) => {
  res.sendFile(path.join(HTML_DIR, 'index.html'))
});

// Return data for stock chart
app.get('/chartData', (req, res) => {
  // https.get({
  //   hostname: 'api.intrinio.com',
  //   path: '/prices?identifier=ASMB',
  //   'Content-Type': 'application/json',
  //   headers: {
  //
  //     username: 'b7aac9b614877ef4b070cf462756d8bb',
  //     password: 'ebdf24e3287a1962c941ae9076a3127c'
  //   }
  // }, response => {
  //   response.on('data', data => {
  //     process.stdout.write(data);
  //     console.log(data);
  //   });
  //
  //   // res.json({success: data})
  // });
});
app.listen(PORT, () => {
  console.log(`Running express app on port ${PORT}`);
  console.log(`http://localhost:${PORT}`)
});