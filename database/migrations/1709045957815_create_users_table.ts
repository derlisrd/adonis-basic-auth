import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()

      table.string('name')
      table.string('username').notNullable().unique
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.boolean('first').defaultTo(1)
      table.tinyint('rol').defaultTo(0);

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}