const express = require('express');
const app = express();
const morgan = require('morgan');

const cors = require('cors');   
//config
app.set('port',process.env.PORT || 3001);
app.set('json spaces', 2);

app.use(cors());
//middlewares
app.use(morgan('dev'));
//soporte para leer y guardar datos
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//rutas
//app.use(require ('./routes/index')); 
app.use('/api',require ('./routes/cryptos')); 

//inicio del server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});