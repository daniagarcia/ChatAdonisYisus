'use strict'

const Schema = use('Schema')

class ChatSchema extends Schema {
  up () {
    this.create('chats', (table) => {
      table.increments()
      table.string('recivido', 80).notNullable().unique()
      table.string('enviado', 60).notNullable()
      table.string('Mensage', 60).notNullable()
      table.string('fecha', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('chats')
  }
}

module.exports = ChatSchema
