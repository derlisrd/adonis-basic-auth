import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'


export default class Category extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

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

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}