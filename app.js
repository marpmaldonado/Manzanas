const express=require('express')
const app=express()
const mysql=require('mysql')

const conex=mysql.createConnection({

    host:"localhost",    
    user: "root",    
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
app.listen(3000,()=>{
    console.log("Arranca")
    })