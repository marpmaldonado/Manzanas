// Funcion del boton
// document.getElementById('Boton_registrar').addEventListener('click', insertar)

const mysql=require('mysql')
//Crear
function insertar(conex,data,callback){
    console.log(data.Nombre)
    let insertQ="insert into manzanas (Nombre,Localidad,Dirección,Municipio) VALUES (?,?,?,?)"

let query=mysql.format(insertQ, [data.Nombre, data.Localidad, data.Dirección, data.Municipio])

conex.query(query, function(err, result){

if(err)throw err; callback(result)
})
}


function eliminar(conex,data,callback){
    console.log(data.Nombre)
    let insertQ="insert into manzanas (Nombre,Localidad,Dirección,Municipio) VALUES (?,?,?,?)"

let query=mysql.format(insertQ, [data.Nombre, data.Localidad, data.Dirección, data.Municipio])

conex.query(query, function(err, result){

if(err)throw err; callback(result)
})
}



module.exports={insertar, eliminar}