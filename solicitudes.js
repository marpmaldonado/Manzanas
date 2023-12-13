const mysql=require('mysql')
//Crear
function insertar(conex,data,callback){
    let insertQ="insert into manzanas (Nombre,Localidad,Dirección,Municipio) VALUES (?,?,?,?)"

let query=mysql.format(insertQ, [data.Nombre, data.Localidad, data.Dirección, data.Municipio])

conex.query(query, function(err, result){

if(err)throw err; callback(result)
})
}

//Eliminar

function insertar(conex,data,callback){
    let insertQ="insert into manzanas (Nombre,Localidad,Dirección,Municipio) VALUES (?,?,?,?)"

let query=mysql.format(insertQ, [data.Nombre, data.Localidad, data.Dirección, data.Municipio])

conex.query(query, function(err, result){

if(err)throw err; callback(result)
})
}
module.exports={insertar, eliminar}