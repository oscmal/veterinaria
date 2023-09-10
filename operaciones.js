const fs = require('fs');
const rutaJson = './citas.json';

const leer = () => {
    const allDates = fs.readFileSync (rutaJson , 'utf-8');
    console.log(allDates);
    const allDatesJson = JSON.parse( allDates );
    console.log(allDatesJson);
    // return allDatesJson;
};
    
    const  registrar = (arregloData) => {
        const [nombre, edad, animal, color, enfermedad] = arregloData;
        let nCitas = {
            nombre,
            edad,
            animal,
            color,
            enfermedad
        }

        fs.access( rutaJson, fs.constants.F_OK, (err) =>{
            if (err){
                console.log(`creando archivo [${rutaJson}]...`);
                fs.writeFileSync(rutaJson,'');
            }

            let contenidoJson = fs.readFileSync(rutaJson, 'utf-8')
            let objetoJson = JSON.parse(contenidoJson);

            objetoJson.push(nCitas);
            contenidoJson = JSON.stringify(objetoJson);
            fs.writeFileSync('citas.json', contenidoJson);
        });
        return ' Se agrego exitosamente! ';
    };
    
module.exports = {
    leer,
    registrar,
};