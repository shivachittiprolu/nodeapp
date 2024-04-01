const express = require('express');
const app = express()
const bodyParser = require('body-parser');


app.get('/', (req, res)=>{
    
    res.send("Hello - Home")
    //console.log(req)
})



// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

app.get('/api/get', (req, res)=>{
  res.send("Hello");
  console.log("/api/get invoked")
})

// Endpoint to receive data via POST request
app.post('/api/receive', (req, res) => {
  // Received data is available in req.body
  const receivedData = req.body;

  // Log the received data to the console
  console.log('Received Data:', receivedData);

  // Send a response back to the client
  res.json({ message: 'Data received successfully!' });
});

app.listen(process.env.PORT || 3000);
