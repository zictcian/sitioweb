'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Apartado3Schema extends Schema {
  up () {
    this.create('apartado_3_s', (table) => {
      table.increments()
      table.timestamps()
      table.string('contenido',255);
      table.string('descripcion',255);
      table.string('titulo',255);
      table.string('subtitulo',255);
      table.string('lenguaje1',255);
      table.string('lenguaje2',255);
      table.string('lenguaje3',255);
    })
  }

  down () {
    this.drop('apartado_3_s')
  }
}

module.exports = Apartado3Schema
