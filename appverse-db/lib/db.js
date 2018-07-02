'use strict'

// Sequelize es un constructor o una clase
const Sequelize = require('sequelize')

// Acá vamos a tener una especie de singleton, un singleton va a tener una sola instancia
// Cada ves que llame a esta funcion/modulo va a retornar la misma instancia 

let sequelize = null

module.exports = function setupDatabase(config){

    // implementamos singleton, para no tener que crear multiples instancias de la base de datos
    // la primera vez que llamemos al objeto sequelize se va a setear la variable sequelize por lo tanto
    // la proxima vez que se llame ya va a estar seteada
    if (!sequele){
        sequelize = new Sequelize(config)
    }
    return sequelize

}