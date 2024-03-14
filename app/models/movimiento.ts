import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Category from './category.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'


export default class Movimiento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  @column()
  declare category_id:number


  @belongsTo(() => Category,{
    foreignKey:'category_id'
  })
  declare category: BelongsTo<typeof Category>

  @column()
  declare user_id:number

  @belongsTo(() => User,{
    foreignKey:'user_id'
  })
  declare user: BelongsTo<typeof User>


  @column()
  declare descripcion: string
  
  @column()
  declare tipo: boolean

  @column()
  declare valor: number



  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}