'use strict'

const Schema = use('Schema')

class ChatSchema extends Schema {
  up () {
    this.create('chats', (table) => {
      table.increments()
      table.string('usuarios').notNullable()
      table.json('mensajes')
      table.integer('id_usuario')
      table.timestamps()
      table.string('file')
    })
  }

  down () {
    this.drop('chats')
  }
}

module.exports = ChatSchema
