const { leer, registrar } = require('./operaciones');

const contenido = process.argv.slice(2)[0];
let resp = '';

if(contenido == 'leer'){
    leer();

} else if (contenido == 'registrar'){
    const parametros = process.argv.slice(3);
    console.log ('=>', parametros);
    resp = registrar(parametros);
}else{
    resp = "solo tenemos 2 metodos:\n- Leer\n- Registrar";
}

console.log(resp);