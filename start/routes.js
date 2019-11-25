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

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.on('login').render('login')
}).middleware('guest')

Route.post('login', 'AuthController.login')
Route.get('logout', 'AuthController.logout').as('logout')

Route.group(() => {
  Route.on('/').render('welcome').as('home')
  Route.resource('users', 'UserController')
  Route.resource('roles', 'RoleController')
}).middleware('auth')
