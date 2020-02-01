const argv = require('./config/yargs').argv;
const color = require('colors')
const porHacer = require('./por-hacer/por-hacar')
//const getListado = require('./DB/data.json')
let comando = argv._[0];
switch (comando) {
    case 'crear':
       let tarea = porHacer.crear(argv.descripcion);
       console.log( tarea ); 
       break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado){
            console.log('========Por Hacer========='.green)
            console.log(tarea.descripcion);
            console.log('Estado:',tarea.completado);
            console.log('=========================='.green)
        }
        break;

    case 'actualizar':
       //console.log('Actualizada una tarea');
       let actual = porHacer.actualizar(argv.descripcion, argv.completado);
       console.log(actual);
        break;
    
    case'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
    break;

    default:
        console.log('comando no es reconocido');
        break;
}