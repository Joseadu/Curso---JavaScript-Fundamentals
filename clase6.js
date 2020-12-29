var jose = {
    nombre: 'Jose',
    apellido: 'Díaz',
    edad: 26
}

function imprimirNombreMayusculas (persona) {
    // var nombre = persona.nombre
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreMayusculas(jose.apellido)