const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('TempuraTale is running')
});

app.listen(port, ()=>{
    console.log(`TempuraTales API is running on port: ${port}`)
})