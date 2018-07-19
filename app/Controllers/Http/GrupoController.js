'use strict'

/**
 * Resourceful controller for interacting with grupos
 */
class GrupoController {
  /**
   * Show a list of all grupos.
   * GET grupos
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new grupo.
   * GET grupos/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new grupo.
   * POST grupos
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single grupo.
   * GET grupos/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing grupo.
   * GET grupos/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update grupo details.
   * PUT or PATCH grupos/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a grupo with id.
   * DELETE grupos/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = GrupoController
