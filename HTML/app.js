const express=require('express') //paquete express
const app=express()
const cors = require("cors"); // juazjuaz
const bodyParser = require("body-parser"); //libreria de node
const mysql=require('mysql2')
const insertar=require("./solicitudes")
const path = require("path");
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
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
app.use("/", express.static(path.join(__dirname, "html")));


app.use(express.json())
app.get("/",(req,res)=>{
    res.render("inicio", {
        rutaActual: "/",
      });
})
app.post("/Manzanas", (req, res) => {
    res.render("/Manzanas", {
      rutaActual: "/Manzanas",
    });
  });
  app.post("/insertar", async (req, res) => {
    console.log(req.body);
    const { Nombre, Localidad, Dirección } = req.body;
    try {

      const query =
        "INSERT INTO manzanas (Nombre, Localidad, Dirección) VALUES (?, ?, ?)";
      await conex.execute(query, [
        Nombre,
        Localidad,
        Dirección
        
      ]);
  
      res.render("inicio", {
        rutaActual: "/",
      });
      //res.send(`¡Formulario procesado correctamente!`);
    } catch (error) {
      console.error("Error al insertar en la base de datos: ", error);
      console.log(error); // Agregar esta línea para imprimir el error completo en la consola
      res.send("Error al procesar el formulario");
    }
  });


app.listen(3000,()=>{
    console.log("El puerto esta =0k")
    })
