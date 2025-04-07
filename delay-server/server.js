const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/delay/:seconds', (req, res) => {
  const seconds = parseInt(req.params.seconds, 10);
  const maxDelay = 600; // 10 minutes max
  
  // Validate delay time and cap at maximum
  const delayTime = Math.min(isNaN(seconds) ? 5 : seconds, maxDelay);
  
  console.log(`Request received. Delaying response for ${delayTime} seconds...`);
  
  setTimeout(() => {
    res.json({
      message: "Response after delay",
      requested_delay: seconds,
      actual_delay: delayTime,
      timestamp: new Date().toISOString()
    });
    console.log(`Response sent after ${delayTime} seconds delay`);
  }, delayTime * 1000);
});

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Delay Server</h1>
        <p>Use /delay/:seconds to get a delayed response</p>
        <p>Example: <a href="/delay/10">/delay/10</a> for a 10 second delay</p>
        <p>Maximum delay: 600 seconds (10 minutes)</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Delay server listening at http://localhost:${port}`);
});