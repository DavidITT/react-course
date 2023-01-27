const nombre = 'David';
const apellido = 'Villeda';

const nombreCompleto = nombre + ' ' + apellido

console.log(`${nombre} ${apellido}`) //Template string

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Esta es un texto: ${getSaludo(nombreCompleto)}`)

