
const {crearArchivo}= require('./carp/multiplicacion');
const argv= require('./confing/yargs');


console.clear();




crearArchivo(argv.b, argv.l, argv.h)
        .then(NomArchivo => console.log(NomArchivo,'creado'))
        .catch(err => console.log(err))
