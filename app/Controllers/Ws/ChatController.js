'use strict'

class ChatController {
  constructor ( {socket, request} ) {
    this.socket = socket
    this.request = request    
  }


  onMessage(message){
    this.socket.broadcast("message",message);
  }

  onEntrar(message){
    this.socket.broadcastToAll("entrar","acabo de entrar :ds");
  }

}

module.exports = ChatController
