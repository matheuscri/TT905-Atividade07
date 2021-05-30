console.log("Página central no Atividae07");
const express = require ('express');
const app = express();
app.get('/',function(req,res){res.send('Página Index');});
app.listen(3000);