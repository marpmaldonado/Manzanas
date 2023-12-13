const express=require('express')
const app=express()
const mysql=require('mysql')
const {insertar, eliminar}=require("./solicitudes")

const conex=mysql.createConnection({

    host:"localhost",    
    user:"root",    
    password:"",    
    database:"basededatos"    
    })
conex.connect((err)=>{
    if(err)throw err;
    console.log("todo bien mi so")
})

app.use(express.json())
app.get("/",(req,res)=>{
res.send("Holas")
})

app.get("/insertar",(req,res)=>{
    insertar(conex,{Nombre:"Emmanuel", Localidad:"Fontibón", Dirección:"Carrera 106 #16-86", Municipio:"Bogotá"},(result)=>{
        res.json(result)
    })
})
app.listen(3000,()=>{
    console.log("Arranca")
    })