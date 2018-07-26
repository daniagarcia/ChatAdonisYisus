'use strict'

class ChatController {
  constructor ( socket, request ) {
    this.socket = socket
    this.request = request    
  }


  onMessage(message){
    console.log(message)
    this.socket.emit("message");
  }
}

module.exports = ChatController
