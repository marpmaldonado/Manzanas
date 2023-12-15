const express=require('express')
const app=express()
const mysql=require('mysql')
const {insertar, eliminar }=require("./solicitudes")
// import path from 'path'

// const __dirname = path.resolve();
const conex=mysql.createConnection({

    host:"localhost",    
    user:"root",    
    password:"",    
    database:"basededatos"    
    })
conex.connect((err)=>{
    if(err)throw err;
    console.log("Bien ")
})

app.use(express.json())
app.get("/Manzanas.html",(req,res)=>{
// res.send('perro')
})

app.post("/insertar",(req,res)=>{
    insertar(conex,data,(result)=>{
        res.json(result)
    })
    
})

app.post("/eliminar",(req,res)=>{
    insertar(conex,data,(result)=>{
        res.json(result)
    })
    
})
app.listen(3000,()=>{
    console.log("El puerto esta =0k")
    })
app.use(express.static("HTML"));
app.get('/',function(req, res){
    res.sendFile(__dirname + "/Manzanas.html")
});