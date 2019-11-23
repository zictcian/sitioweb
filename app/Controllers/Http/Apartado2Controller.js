'use strict'
const Apartado2 = use('App/Models/Apartado2');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with apartado2S
 */
class Apartado2Controller {
  /**
   * Show a list of all apartado2S.
   * GET apartado2S
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let apartado2= await Apartado2.all();
    return response.json(apartado2);
  }

  /**
   * Render a form to be used for creating a new apartado2.
   * GET apartado2S/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    await Apartado2.create(request.all());
    return response.json('apartado2 Creado')
  }

  /**
   * Create/save a new apartado2.
   * POST apartado2S
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Apartado2.create(request.all());
    return response.json('apartado2 Creado')
  }

  /**
   * Display a single apartado2.
   * GET apartado2S/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let apartado2 = await Apartado2.find(params.id)
    return response.json(apartado1)
  }

  /**
   * Render a form to update an existing apartado2.
   * GET apartado2S/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let apartado2 = await Apartado2.find(params.id);
    apartado2.merge(request.all());
    await apartado2.save();
    return response.json('apartado2 editado');
  }

  /**
   * Update apartado2 details.
   * PUT or PATCH apartado2S/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a apartado2 with id.
   * DELETE apartado2S/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let apartado2 =await Apartado2.find(params.id);
    apartado2.delete();
    return response.json('apartado2 eliminada')
  }
}

module.exports = Apartado2Controller
