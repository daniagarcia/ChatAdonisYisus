'use strict'
const GruposUsers = use('App/Models/GruposUsers')
const Database = use('Database')
/**
 * Resourceful controller for interacting with grupousuarios
 */
class GrupoUsuarioController {
  /**
   * Show a list of all grupousuarios.
   * GET grupousuarios
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new grupousuario.
   * GET grupousuarios/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new grupousuario.
   * POST grupousuarios
   */
  async store ({ request, response }) {

    const id_grupo = request.input('grupo')
    const id_usuario = request.input('usuario')
    const gruposusers = new GruposUsers();
    gruposusers.grupo_id = id_grupo
    gruposusers.user_id = id_usuario
  
    await gruposusers.save()
  }

  /**
   * Display a single grupousuario.
   * GET grupousuarios/:id
   */
  async show ({ params, request, response, view }) {
    return await Database.select('grupos.id','grupos.nombre').from('grupos_users').innerJoin('grupos','grupos_users.grupo_id', 'grupos.id')
    .where('grupos_users.user_id','=', params.id)
  }

 
  /**
   * Render a form to update an existing grupousuario.
   * GET grupousuarios/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update grupousuario details.
   * PUT or PATCH grupousuarios/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a grupousuario with id.
   * DELETE grupousuarios/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = GrupoUsuarioController
