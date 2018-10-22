'use strict'
const Chat = use('App/Models/Chat')
const User = use('App/Models/User')
const Token = use('App/Models/Token')
const Database = use('Database')

/**
 * Resourceful controller for interacting with chats
 */
class ChatController {
  /**
   * Show a list of all chats.
   * GET chats
   */
  async index({ request, response, view }) {
      return await Database.select('chats.mensajes','users.username')
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
  async store({ request, response, auth }) {

  

    const chat = new Chat();
    const Helpers = use ('Helpers')
    chat.usuarios = request.input('UsersArray');
    chat.mensajes = JSON.stringify(request.input('mensaje'))
    chat.id_usuario= request.input('id_usuario')

    const file = request.file('file',{
      types: [
        'image', 'video', 'audio'
      ],
      size: '100mb'
    })
    console.log(file)

    await file.move(Helpers.tamPath('uploads',{
      name:'recibidos.jpg',
      overwrite:true
    }))
  
      if(!file.moved()) {
        return file.error()
      }
      return 'file moved'

    
    
    //  JSON.stringify([request.input('msj')])
    
    await chat.save()

  }

  /**
   * Display a single chat.
   * GET chats/:id
   */
  async show({ params, request, response, view }) {

      return await Database.select('mensajes','id_usuario').from('chats').where('usuarios','=', params.id).orderBy('usuarios')
  
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
