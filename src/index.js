const PORT = 3001;
const reglas = require('./politica/reglas.js');

const express = require('express');
const app = express();
app.use(express.json());

app.get("/validator", (req, res) => {

});

app.post("/usuarios", (req, res) => {
  const { user, passw } = req.body;
  const fnLong = reglas.find( r => r.name == "longitud" );
  if (fnLong.func(passw)) 
    res.status(200).json("Longitud Aprobada");
  else  
    res.status(400).json("Longitud No aprobada");
});

app.listen(PORT, ()=> {
  console.log(`Servidor corriendo en puerto ${PORT}`)
});