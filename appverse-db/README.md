# appverse-db

## Usage

```js

// Requerimos el modulo, el cual nos va a devolver una funcion 
const setupDatabase = require('appverse-db')

// Configuarmos la base de datos, enviando un archivo de configuracion a la funcion que retorna el modulo
//Esta funcion nos va a devolver una promesa con el objeto db
setupDatabase(config).then(db =>{
    
    // Obteniendo objetos de db por medio de object Destrcturing (ES2016)
    const {Agent, Metric} = db

    // Es lo mismo que
    //const Agent = db.Agent
    //const Metric = db.Metric
    
}).catch(err => console.log(err))
```