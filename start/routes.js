'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/insertarUser' , 'DatosChatController.AddUser');
Route.post('/login' , 'DatosChatController.Login');

Route.post('/insertarGroup' , 'DatosChatController.AddGroup');
Route.post('/insertarChat' , 'DatosChatController.AddChat');

Route.get('/TraerGroup' , 'DatosChatController.GetAllGroups');
Route.get('/TraerUsur' , 'DatosChatController.GetAllUser');

Route.get('/TraerUser/:id' , 'DatosChatController.GetUser');
Route.get('/TraerGroup/:id' , 'DatosChatController.GetGroup');
Route.get('/TraerChat/:id' , 'DatosChatController.GetChat');

Route.put('/EditarUsu/:id' , 'DatosChatController.UpdateConect');
Route.resource('chats/:id','ChatController');
Route.resource('users','UserController');
Route.resource('grupos','GrupoController');


 


