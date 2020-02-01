const fs = require('fs');

let listaPorHacar=[];

const guardarDB = () => {

    let data = JSON.stringify(listaPorHacar);
    fs.writeFile('DB/data.json', data, (err)=>{
        if (err) throw new Error('no se pudo grabar',err);         
    })
}
const cargarBD = ()=>{
    try {
        listaPorHacar = require('../DB/data.json');
    } catch (error) {
        listaPorHacar = [];
    }
    //console.log(listaPorHacar);
}

const crear =(descripcion) => {
    cargarBD();
    
    let porHacer = {
        descripcion,
        completado: false
    };
    listaPorHacar.push (porHacer);
    guardarDB();
    return porHacer;
}
const getListado = () =>{
    cargarBD();
    return listaPorHacar;
}

const actualizar = (descripcion, completado = true) =>{
    cargarBD();
    let index = listaPorHacar.findIndex( tarea => tarea.descripcion === descripcion);   
    if (index >= 0) {
        listaPorHacar[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) =>{
    cargarBD();
    let nuevolistado = listaPorHacar.filter(tarea => tarea.descripcion !== descripcion);
    if (listaPorHacar.length === nuevolistado.length){
        return false;
    } else {
        listaPorHacar = nuevolistado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}