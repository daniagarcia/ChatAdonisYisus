'use strict'

const Schema = use('Schema')

class GruposUsersSchema extends Schema {
  up () {
    this.create('grupos_users', (table) => {
      table.increments()
      table.integer('grupo_id').unsigned().references('id').inTable('grupos')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('grupos_users')
  }
}

module.exports = GruposUsersSchema
