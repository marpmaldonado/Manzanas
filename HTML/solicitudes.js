// Funcion del boton
// document.getElementById('Boton_registrar').addEventListener('click', insertar)



const mysql=require('mysql')
//Crear
function insertar(conex,data,callback){
    let insertQ=insertar(conex,{Nombre:'Nombre', Localidad:'Localidad',Dirección:'Dirección', Municipio:'Municipio'}), Values('?','?','?','?');
    console.log(insertar)
let query=mysql.format(insertQ, [data.Nombre, data.Localidad, data.Dirección, data.Municipio])
console.log(insertar)



conex.query(query, function(err, result){

if(err)throw err; callback(result)


})
}

//Eliminar


module.exports={insertar}