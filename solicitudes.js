// Funcion del boton



const mysql=require('mysql')
//Crear
function insertar(conex,data,callback){
    let insertQ="insert into manzanas (Nombre,Localidad,Dirección,Municipio) VALUES (?,?,?,?)"
    console.log(insertar)
let query=mysql.format(insertQ, [data.Nombre, data.Localidad, data.Dirección, data.Municipio])
console.log(insertar)
// document.getElementById('Boton_registrar').addEventListener('click', insertar)




conex.query(query, function(err, result){

if(err)throw err; callback(result)


})
}

//Eliminar


module.exports={insertar}