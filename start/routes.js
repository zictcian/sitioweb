'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('header','HeaderController.index');
Route.get('header/:id','HeaderController.show');
Route.post('header','HeaderController.store');
Route.put('header/:id','HeaderController.update');
Route.delete('header/:id','HeaderController.destroy');

Route.get('Footer','FooterController.index');
Route.get('Footer/:id','FooterController.show');
Route.post('Footer','FooterController.store');
Route.put('Footer/:id','FooterController.update');
Route.delete('Footer/:id','FooterController.destroy');

Route.get('Apartado1','Apartado1Controller.index');
Route.get('Apartado1/:id','Apartado1Controller.show');
Route.post('Apartado1','Apartado1Controller.store');
Route.put('Apartado1/:id','Apartado1Controller.update');
Route.delete('Apartado1/:id','Apartado1Controller.destroy');

Route.get('Apartado2','Apartado2Controller.index');
Route.get('Apartado2/:id','Apartado2Controller.show');
Route.post('Apartado2','Apartado2Controller.store');
Route.put('Apartado2/:id','Apartado2Controller.update');
Route.delete('Apartado2/:id','Apartado2Controller.destroy');

Route.get('Apartado3','Apartado3Controller.index');
Route.get('Apartado3/:id','Apartado3Controller.show');
Route.post('Apartado3','Apartado3Controller.store');
Route.put('Apartado3/:id','Apartado3Controller.update');
Route.delete('Apartado3/:id','Apartado3Controller.destroy');

Route.get('Apartado4','Apartado4Controller.index');
Route.get('Apartado4/:id','Apartado4Controller.show');
Route.post('Apartado4','Apartado4Controller.store');
Route.put('Apartado4/:id','Apartado4Controller.update');
Route.delete('Apartado4/:id','Apartado4Controller.destroy');