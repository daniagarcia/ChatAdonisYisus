'use strict'
const File = use('App/Models/File')
const Helpers = use("Helpers");
class ArchivoController {
    async archivos({ request, response,  }) {
       
    

     file = request.file('file', {
      types: ['jpg','jpeg','png', 'gif','svg'],
      size: '1024mb'
    })
    
     fileName = `${new Date().getTime()}.${file.subtype}`
   
    file.move(Helpers.publicPath('/assets/products/'), {
      name: `${new Date().getTime()}.${file.subtype}`
    })

}
}


module.exports = ArchivoController


