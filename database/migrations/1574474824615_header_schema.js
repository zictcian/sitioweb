'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HeaderSchema extends Schema {
  up () {
    this.create('headers', (table) => {
      table.increments()
      table.timestamps()
      table.string('logo',255);
      table.string('titulo',255);
      table.string('descripcion',255);
    
      
    })
  }

  down () {
    this.drop('headers')
  }
}

module.exports = HeaderSchema
