'use strict'
const Database = use('Database')
const Grupo = use('App/Models/Grupo')

const GrupoUsers = use('App/Models/GruposUsers')
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
    const nombreGrupo = request.input('grupo')
    const grupo = new Grupo();
    grupo.nombre = nombreGrupo
    grupo.id_usuarios = request.input('id_user')
    await grupo.save()

    const grupoUser = new GrupoUsers()
    grupoUser.user_id = request.input('id_user')
    grupoUser.grupo_id = grupo.id

    await grupoUser.save();
  }

  /**
   * Display a single grupo.
   * GET grupos/:id
   */
  async show ({ params, request, response, view }) {
    return await Database.select('id','nombre','id_usuarios').from('grupos').where('id_usuarios','=', params.id).orderBy('id_usuarios')

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
