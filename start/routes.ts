/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller';

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'


router.group(()=>{
    router.post('/login',[AuthController,'login']);

}).prefix('/auth')


router.group(()=>{
    router.post('/logout',[AuthController,'logout'])
}).prefix('/in').use(middleware.auth())





router.get('*', async ({ response }) => {
    return response.status(404).json({ success: false, message: 'Ruta no encontrada' });
  });




