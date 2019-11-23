'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Apartado2Schema extends Schema {
  up () {
    this.create('apartado_2_s', (table) => {
      table.increments()
      table.timestamps()
      table.string('imagen',255);
      table.string('descripcion',255);
      table.string('titulo',255);
      table.string('subtitulo',255);
    })
  }

  down () {
    this.drop('apartado_2_s')
  }
}

module.exports = Apartado2Schema
