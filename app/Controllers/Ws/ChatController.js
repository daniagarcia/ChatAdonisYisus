'use strict'

class ChatController {
  constructor ( {socket, request} ) {
    this.socket = socket
    this.request = request    
  }


  onMessage(message){
    console.log(this.socket.topic)
    console.log(message)
    this.socket.broadcastToAll("message",message);
  }

  onEntrar(message){
    this.socket.broadcastToAll("entrar","acabo de entrar :ds");
  }

}

module.exports = ChatController
