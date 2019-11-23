'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Apartado1Schema extends Schema {
  up () {
    this.create('apartado_1_s', (table) => {
      table.increments()
      table.timestamps()
      table.string('imagen',255);
      table.string('descripcion',255);
      table.string('titulo',255);
      table.string('contenido',255);
    })
  }

  down () {
    this.drop('apartado_1_s')
  }
}

module.exports = Apartado1Schema
