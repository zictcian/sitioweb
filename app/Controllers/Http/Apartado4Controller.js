'use strict'
const Apartado4 = use('App/Models/Apartado4');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with apartado4S
 */
class Apartado4Controller {
  /**
   * Show a list of all apartado4S.
   * GET apartado4S
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let apartado4= await Apartado4.all();
    return response.json(apartado4);
  }

  /**
   * Render a form to be used for creating a new apartado4.
   * GET apartado4S/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    await Apartado4.create(request.all());
    return response.json('apartado4 Creado')
  }

  /**
   * Create/save a new apartado4.
   * POST apartado4S
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Apartado4.create(request.all());
    return response.json('apartado4 Creado')
  }

  /**
   * Display a single apartado4.
   * GET apartado4S/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let apartado4 = await Apartado4.find(params.id)
    return response.json(apartado4)
  }

  /**
   * Render a form to update an existing apartado4.
   * GET apartado4S/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let apartado4 = await Apartado4.find(params.id);
    apartado4.merge(request.all());
    await apartado4.save();
    return response.json('apartado4 editado');
  }

  /**
   * Update apartado4 details.
   * PUT or PATCH apartado4S/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a apartado4 with id.
   * DELETE apartado4S/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let apartado4 =await Apartado4.find(params.id);
    apartado4.delete();
    return response.json('apartado4 eliminada')
  }
}

module.exports = Apartado4Controller
