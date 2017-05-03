## Synopsis

El proposito del API es poder tener control sobre los distintos tipos de creditos en cada una de sus modalidades solicitados por clientes.


## Code Example
Ruta principal

module.exports = function routes(app) {
    app.use('/api', creditosRoutes);
};

Rutas montadas a /api
Todos los creditos /creditos

router.get('/creditos', function(req, res) { 

    Creditos.find({}, function(err, results) { //2do parametro de find es un callback (request asicronica)
        if (err) {
          return res.sendStatus(500).json(err) }
          res.json(results);
    });
});


## Motivation

Control sobre distintos tipos de creditos solicitados por clientes.


## Installation

Instalar dependencias:
npm install

Ejecución:
npm run build para ejecutar webpack (ya incluye watcher como daemon)

npm run nodemon (Si se tiene en binarios de tu ordenador)

npm run start (Usando node sin daemon)

En binarios de tu ordenador mongodb:

mongod (Ejecuta la instancia de mongodb desde CLI)

mongo (Ejecutar cliente de mongodb para consultar datos)


## API Reference

POST, GET usando libreria curl

Traer todos los creditos con curl desde url en tu navegador:

curl http://tuhost:tupuerto/api/creditos

Post de un tipo de credito :id obtiene el nombre de tu credito
curl -X POST http://tuhost:tupuerto/api/:id 


MONGODB

Nombre de la b.d: creditos

Buscar datos ejemplo:
use creditos
db.creditos.find({})
db.creditos.find({credito: "credito4"})


## Contributors

Contrubuciones al proyecto son bienvenidas


## License

The MIT License (MIT)

Copyright (c) 2015 Clint Ayres

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN.