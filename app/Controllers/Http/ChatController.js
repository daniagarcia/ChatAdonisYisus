'use strict'
const Chat = use('App/Models/Chat')
const User = use('App/Models/User')
const Token = use('App/Models/Token')
const Database = use('Database')
const Helpers = use('Helpers')
const File = use('App/Models/File')

/**
 * Resourceful controller for interacting with chats
 */
class ChatController {
  /**
   * Show a list of all chats.
   * GET chats
   */
  async index({ request, response, view }) {
      return await Database.select('chats.mensajes','users.username', 'chats.file')
      .table('chats')
      .join('users','users.id','chats.id_usuario').orderBy('chats.id')
  }

  /**
   * Render a form to be used for creating a new chat.
   * GET chats/create
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new chat.
   * POST chats
   * es para guardar el chat 
   */
  async store({ request, response, auth, params }) { 
    const chat = new Chat(); 
    chat.usuarios = request.input('UsersArray');
    chat.mensajes = JSON.stringify(request.input('mensaje'))
    chat.id_usuario= request.input('id_usuario')
    await chat.save()

  }

  /**
   * Display a single chat.
   * GET chats/:id
   */
  async show({ params, request, response, view }) {

      return await Database.select('mensajes','id_usuario','file').from('chats').where('usuarios','=', params.id).orderBy('usuarios')
  
  }

  /**
   * Render a form to update an existing chat.
   * GET chats/:id/edit
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update chat details. 
   * PUT or PATCH chats/:id
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a chat with id.
   * DELETE chats/:id
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = ChatController
