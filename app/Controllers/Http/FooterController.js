'use strict'
const Footer = use('App/Models/Footer');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with footers
 */
class FooterController {
  /**
   * Show a list of all footers.
   * GET footers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let footer= await Footer.all();
    return response.json(footer);
  }

  /**
   * Render a form to be used for creating a new footer.
   * GET footers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    await Footer.create(request.all());
    return response.json('Footer Creado')
  }

  /**
   * Create/save a new footer.
   * POST footers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Footer.create(request.all());
    return response.json('Footer Creado')
  }

  /**
   * Display a single footer.
   * GET footers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let footer = await Footer.find(params.id)
    return response.json(footer)
  }

  /**
   * Render a form to update an existing footer.
   * GET footers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    let footer = await Footer.find(params.id);
    footer.merge(request.all());
    await footer.save();
    return response.json('footer editado');
  }

  /**
   * Update footer details.
   * PUT or PATCH footers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a footer with id.
   * DELETE footers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let footer =await Footer.find(params.id);
    footer.delete();
    return response.json('footer eliminada')
  }
}

module.exports = FooterController
