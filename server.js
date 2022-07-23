const express=require('express');
const app=express();
var bodyParser = require('body-parser')
var jsonParser=bodyParser.json()
const port=3000;
app.post('/addTwoNum',jsonParser,function(req,res){
    var num1=req.body.num1;
    var num2=req.body.num2;
    var iserr=false;
    if(!num1){
        iserr=true;
        res.send({
            ok:false,
            errmessage:"enter first number"
        })
    }
    if(!num2){
        iserr=true;
        res.send({
            ok:false,
            errmessage:"enter second number"
        })
    }
    if(typeof num1!="number"){
        iserr=true;
        res.send({
            ok:false,
            errmessage:"invalid first number"
        })
    }
    if(typeof num2!="number"){
        iserr=true;
        res.send({
            ok:false,
            errmessage:"invalid second number"
        })
    }
    var sum=num1+num2;
    var obj={
        ok:true,
        sum:sum
    }
    if(iserr==false){res.send(obj);}
    
})
app.listen(port, function(err){
    if (err) console.log("Error in server setup")
    console.log(`Server listening on http://localhost:${port} `);
})