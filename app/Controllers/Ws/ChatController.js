'use strict'

class ChatController {
  constructor ( {socket, request} ) {
    this.socket = socket
    this.request = request    
  }


  onMessage(message){
    console.log(message)
    console.log(this.socket.topic)

    this.socket.broadcastToAll("message",message);
  }

  // onOpen(message){
  //   this.socket.broadcastToAll("message","acabo de entrar");
  // }

  // onClose(message){
  //   this.socket.broadcastToAll("message","acabo de salir");
  // }
}

module.exports = ChatController
