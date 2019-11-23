'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Apartado4Schema extends Schema {
  up () {
    this.create('apartado_4_s', (table) => {
      table.increments()
      table.timestamps()
      table.string('contenido',255);
      table.string('imagen',255);
      table.string('titulo',255);
      table.string('subtitulo',255);
      table.string('meta1',255);
      table.string('meta2',255);
      table.string('meta3',255);
    })
  }

  down () {
    this.drop('apartado_4_s')
  }
}

module.exports = Apartado4Schema
