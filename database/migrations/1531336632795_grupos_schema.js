'use strict'

const Schema = use('Schema')

class GruposSchema extends Schema {
  up () {
    this.create('grupos', (table) => {
      table.increments()
      table.string('nombre', 60).notNullable().unique()
      table.json('mensajes').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('grupos')
  }
}

module.exports = GruposSchema
