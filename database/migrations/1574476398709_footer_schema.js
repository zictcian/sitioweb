'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FooterSchema extends Schema {
  up () {
    this.create('footers', (table) => {
      table.increments()
      table.timestamps()
      table.string('imagen',255);
      table.string('titulo',255);
      table.string('facebook',255);
      table.string('whatsapp',255);
      table.string('google',255);
      table.string('autor',255);
      table.string('gradoygrupo',255);

    })
  }

  down () {
    this.drop('footers')
  }
}

module.exports = FooterSchema
