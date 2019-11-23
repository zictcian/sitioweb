'use strict'
const Apartado1 = use('App/Models/Apartado1');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with apartado1S
 */
class Apartado1Controller {
  /**
   * Show a list of all apartado1S.
   * GET apartado1S
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let apartado1= await Apartado1.all();
    return response.json(apartado1);
  }

  /**
   * Render a form to be used for creating a new apartado1.
   * GET apartado1S/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    await Apartado1.create(request.all());
    return response.json('apartado1 Creado')
  }

  /**
   * Create/save a new apartado1.
   * POST apartado1S
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Apartado1.create(request.all());
    return response.json('apartado1 Creado')
  }

  /**
   * Display a single apartado1.
   * GET apartado1S/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let apartado1 = await Apartado1.find(params.id)
    return response.json(apartado1)
  }

  /**
   * Render a form to update an existing apartado1.
   * GET apartado1S/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let apartado1 = await Apartado1.find(params.id);
    apartado1.merge(request.all());
    await apartado1.save();
    return response.json('apartado1 editado');
  }

  /**
   * Update apartado1 details.
   * PUT or PATCH apartado1S/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a apartado1 with id.
   * DELETE apartado1S/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let apartado1 =await Apartado1.find(params.id);
    apartado1.delete();
    return response.json('apartado1 eliminada')
  }
}

module.exports = Apartado1Controller
