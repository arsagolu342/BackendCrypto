const fs = require('fs');
const { Router }  = require("express");
const { json } = require("express/lib/response");
const { route } = require(".");
const router = Router();

const data = require('../data.json');
//console.log(data);

router.get('/listCryptos', (req, res)=>{
     res.send(data);
});

router.post('/createCryptos', (req, res)=>{
    
    const {nombre, usd} = req.body;
    if(nombre && usd){
        const id= data.length + 1;
        const newCrypto = {id, ...req.body };
        data.push(newCrypto);
        console.log(data);
        const dat =   JSON.stringify(data, null, 2);
        console.log(data);
        res.json(data); 
        fs.writeFileSync('./src/data.json', dat);
    }else{
        res.send('400');   
    }
});


 

 module.exports = router;