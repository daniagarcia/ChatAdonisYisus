'use strict'
const Chat = use('App/Models/Chat')
const User = use('App/Models/User')

/**
 * Resourceful controller for interacting with chats
 */
class ChatController {
  /**
   * Show a list of all chats.
   * GET chats
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new chat.
   * GET chats/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new chat.
   * POST chats
   * es para guardar el chat 
   */
  async store ({ request, response }) {
    
    // var chat = await Chat
    //   .query()
    //   .where('usuarios', request.input('UsersArray'))
    //   .first()

      const chat = await Chat.findOrCreate(
        { usuarios: request.input('UsersArray') },
        { usuarios: request.input('UsersArray'), mensajes: JSON.stringify([]) }
      )

      return { 
        sesion: await auth
            .withRefreshToken()
            .attempt(request.input('usu'), request.input('psw')),
        user: await User
            .query()
            .where('username',request.input('usu'))
            .first()
    }
    // const chat = new Chat();
    // user.username = request.input('usu')
    // user.email = request.input('email')
    // user.password = request.input('psw')

   return await user.save()
  }

  /**
   * Display a single chat.
   * GET chats/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing chat.
   * GET chats/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update chat details.
   * PUT or PATCH chats/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a chat with id.
   * DELETE chats/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ChatController
