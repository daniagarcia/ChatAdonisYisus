'use strict'
const File = use('App/Models/File')
const Chat = use('App/Models/Chat')
const Helpers = use("Helpers");
class ArchivoController {
    async archivos({ request, response  }) {
     const chat = new Chat(); 
      chat.usuarios = request.input('UsersArray');      
      chat.id_usuario= request.input('id_usuario')     
    

    const file = request.file('file', {
      // types: ['audio','image','video'],
      types: ['jpg','jpeg','png', 'gif','svg','mp4','mp3','avi','wmv','mov','mpeg'],
      size: '1024mb'
    })

     
 const    fileName = `${new Date().getTime()}.${file.subtype}`
   
    file.move(Helpers.publicPath('/assets/archivos/'), {
      name: `${new Date().getTime()}.${file.subtype}`
    })
    chat.file = '/assets/archivos/'+fileName;

    await chat.save()
}
}
 

module.exports = ArchivoController


