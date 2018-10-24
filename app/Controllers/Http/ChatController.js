'use strict'
const Chat = use('App/Models/Chat')
const User = use('App/Models/User')
const Token = use('App/Models/Token')
const Database = use('Database')
const Helpers = use('Helpers')


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
  async store({ request, response, auth, params }) { 
    const chat = new Chat(); 
    const Helpers = use ('Helpers')
    const tmpPath = Helpers.tmpPath()
    chat.usuarios = request.input('UsersArray');
    chat.mensajes = JSON.stringify(request.input('mensaje'))
    chat.id_usuario= request.input('id_usuario')
    // chat.archivos= request.input('files')
   

    const file = request.file('files',{
      types: [
        'image', 'video', 'audio'
      ],
      size: '100mb'
    })
    console.log(request)
    // const { message } = await request.all()
    // const messageParse = JSON.parse(message) 
    if (file) {
      console.log("Entro a la condicion") 
      await file.move(Helpers.publicPath('src'), {
        name: `${new Date().getTime()}.${file.subtype}`   
      })
    }

    // if(file){
    //   await file.move(Helpers.publicPath('src'),{  
    //     name:`${new Date().getTime()}.${file.subtype}`,
    //     overwrite:true
    // //   })
    // // }      
    //   if(!file.moved()) {
    //     return file.error()
    //   }
    //   return 'file moved'    
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
