const express = require('express');
const OngController = require('./controller/OngController');
const IncidentsController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');
const routes = express.Router();

// Rota /Recurso

//GET: Buscar/Listar uma informação do back-end
//POST: Criar uma informação no back-end
//PUT: Alterar uma informação no back-end
//DELETE: Deletar uma informação no back-end

//Tipos de parametros:
// Query: Parametros nomeados e enviados na rota após o simbolo "?" (usado para filtros e paginação)
// Route Params: Parametros utilizados para identificar recursos
// Request Body: Corpo da requisição utilizado para criar ou alterar recursos

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;