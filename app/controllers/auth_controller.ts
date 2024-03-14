import AuthException from '#exceptions/auth_exception'
import User from '#models/user'
import { userLoginValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
//import hash from '@adonisjs/core/services/hash'

export default class AuthController {

    async login({request,response} : HttpContext){
        try {
            const data = request.all()
            await userLoginValidator.validate(data)
            const user = await User.verifyCredentials(data.email, data.password)
            user.serialize()
            const token = await User.accessTokens.create(user,['*'], // with all abilities
            {
              expiresIn: '30 days' // expires in 30 days
            });

            return response.json({success:true,results:token})

        } catch (error) {
            
            const authError = new AuthException()
            return response.status(500).json({success:false,message: authError.mensaje(error.status)})
        }
    }
    async logout({response,auth} : HttpContext){
        try {
            const user = User.find(auth.user);
            await User.accessTokens.delete(user,1)
            return response.json({success:true, message:'Deleted'})
        } catch (error) {
            console.log(error)
            return response.status(error.status).json({success:false,message: 'Error de servidor'})
        }
    }
}