'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request

    socket.on('message', (data) => {
    })
    
    // emit events
    socket.emit('id', socket.id)
  }
}

module.exports = ChatController
