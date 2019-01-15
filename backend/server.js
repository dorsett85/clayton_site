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
app.get('/chartData/:tickers?', (req, res) => {

  console.log(req.params);

  // Define and loop over stock tickers to retrieve data
  const tickers = req.params.tickers ? req.params.tickers.split(',') : ['ASMB', 'TSRO', 'BPMC'];
  const stockData = [];
  let numResponses = 0;
  tickers.forEach(ticker => {
    https.get({
      hostname: 'api.intrinio.com',
      path: `/prices?identifier=${ticker}`,
      auth: 'b7aac9b614877ef4b070cf462756d8bb:ebdf24e3287a1962c941ae9076a3127c',
    }, response => {

      let body = '';
      response.on('data', data => body += data);
      response.on('end', () => {
        const parsedReverse = JSON.parse(body).data.reverse();
        const formattedData =  parsedReverse.map(v => [new Date(v.date).getTime(), v.close]);
        stockData.push({name: ticker, data: formattedData});
        if (numResponses++ === tickers.length - 1) {res.send(stockData)}
      })
    })

  });
});
app.listen(PORT, () => {
  console.log(`Running express app on port ${PORT}`);
  console.log(`http://localhost:${PORT}`)
});