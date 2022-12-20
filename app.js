
const express =  require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname+'/dist' ));


app.listen(3001, ()=>{
    console.log('visit http://localhost:3001/');
});