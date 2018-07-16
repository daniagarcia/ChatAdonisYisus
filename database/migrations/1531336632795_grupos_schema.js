'use strict'

const Schema = use('Schema')

class GruposSchema extends Schema {
  up () {
    this.create('grupos', (table) => {
      table.increments()
      table.integer('Numero', 50).notNullable().unique()
      table.string('Nombre', 60).notNullable().unique()
      table.integer('integrantes', 60).notNullable().unique()
      table.string('Mensage', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('grupos')
  }
}

module.exports = GruposSchema
