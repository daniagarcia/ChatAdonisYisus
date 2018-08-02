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

    Route.get('users', async () => {
      return await User.all()
    })
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

    console.log(request.input('mensaje'))
    const chat = new Chat();
    chat.usuarios = request.input('UsersArray');
    chat.mensajes = JSON.stringify(request.input('mensaje'))

    //  JSON.stringify([request.input('msj')]) 
    
    await chat.save()
    // await Chat.findOrCreate(
    //     { usuarios: request.input('username') },
    //     { usuarios: request.input('UsersArray'), mensajes: JSON.stringify([]) }
    // )
   // chat.mensajes= request.input('msj')
    // user.password = 'some-password'

    // const chat = await Chat.findOrCreate(
    //   { usuarios: request.input('UsersArray') },       
    //   { usuarios: request.input('UsersArray'), mensajes: JSON.stringify([]) }
    // )
    // return { 
    //   sesion: await auth
    //       .withRefreshToken()
    //       .attempt(request.input('usu'), request.input('psw')),
    //   user: await User
    //       .query()
    //       .where('username',request.input('usu'))
    //       .first(),
    //   chats: await Chat
    //       .query()
    //       .where('mensaje',request.input('user'))
    //       // .first()


    //  }
    // const chat = new Chat();
    // user.username = request.input('usu')
    // user.email = request.input('email')
    // user.password = request.input('psw')
    //  return   await chats.save()
    //   chats.save();
    // return chats.save();
    // return await user.save(), chats.save()
  }

  /**
   * Display a single chat.
   * GET chats/:id
   */
  async show({ params, request, response, view }) {

      return await Database.select('mensajes').from('chats').where('usuarios','=', params.id).orderBy('usuarios')
  
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
