'use strict'

var nombre = 'Jose'
var apellido = 'Díaz'


// Cambiar a mayús o minús
var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()


// Otras funciones
var primeraLetraDelNombre = nombre.charAt(0)
var cantidadLetrasNombre = nombre.length


// Concatenar valores
var nombreCompleto = nombre + ' ' + apellido
var nombrecompleto2 = `${nombre} ${apellido.toUpperCase()}`


// Imprimir solo dos letras del valor de la variable
var str = nombre.substr (1, 2)