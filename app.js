const express = require('express')
const app = express()
const port = 3015


app.get('/', (req, res) => {
  res.send('Hello World from Express!')
});

app.delete("/",(request, response)=>{
    response.send("This is a Delete Request at /delete");
});


app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  });


app.post( (req, res) => {
    res.send('Got a POST request')
});

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
});



