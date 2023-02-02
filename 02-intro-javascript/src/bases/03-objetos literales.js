const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad:'New York',
        zip: 98765,
        lat: 14.456,
        lng: 876.3222
    }
}

console.log(persona);

const persona2 = { ...persona } //Operador Spread
console.log(persona2)


