const morgan = require('morgan');

const Port = process.env.PORT || 3000 

const express = require('express');
const app = express();

app.get('/hola', (req, res) => {
  console.log('Hola');
  res.sendFile( 'queestafazendo.gif' , {root : 'imagenes'});  
});
app.listen(Port);


       
























