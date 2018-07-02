## Inicializar modulo node.js
npm init

## Crear README.md


## Crear entry point
Cuando requerimos el modulo, es el archivo que se va a requeriir primero

## install sequalize 
npm install sequelize --save

## install dependencias de sequelize para trabajar con pg
npm install pg pg-hstore --save


## Creamos directorio lib
este directorio tiene la funcion de setup de db y la funcion de setup de agentes y metricas

## Objetos generales de la app
Desde nuestra app no vamos a exponer todo el modelo completo, para eso vamos a crear unos metodos custom para hacer consultas de bd.
Estos metodos custom van a consumir los modelos

 /appverse-db   
    /models
    /services

## Crear objeto sequelize
appverse-db/lib/db.js
