'use strict'
const Apartado3 = use('App/Models/Apartado3');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with apartado3S
 */
class Apartado3Controller {
  /**
   * Show a list of all apartado3S.
   * GET apartado3S
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let apartado3= await Apartado3.all();
    return response.json(apartado3);
  }

  /**
   * Render a form to be used for creating a new apartado3.
   * GET apartado3S/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    await Apartado3.create(request.all());
    return response.json('apartado3 Creado')
  }

  /**
   * Create/save a new apartado3.
   * POST apartado3S
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Apartado3.create(request.all());
    return response.json('apartado3 Creado')
  }

  /**
   * Display a single apartado3.
   * GET apartado3S/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let apartado3 = await Apartado3.find(params.id)
    return response.json(apartado3)
  }

  /**
   * Render a form to update an existing apartado3.
   * GET apartado3S/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let apartado3 = await Apartado3.find(params.id);
    apartado3.merge(request.all());
    await apartado3.save();
    return response.json('apartado3 editado');
  }

  /**
   * Update apartado3 details.
   * PUT or PATCH apartado3S/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a apartado3 with id.
   * DELETE apartado3S/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let apartado3 =await Apartado3.find(params.id);
    apartado3.delete();
    return response.json('apartado3 eliminada')
  }
}

module.exports = Apartado3Controller
