
import env from '#start/env'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class XapikeyMiddleware {
  async handle({response,request}: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    //console.log(ctx)
    const apiKey = request.header('x-api-key')
    
    const foundApi = env.get('X_API_KEY')
    if (!apiKey || apiKey !== foundApi) {
      return response.status(401).json({ success:false,message:'API KEY invalida' })
    }
    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}