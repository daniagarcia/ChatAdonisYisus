'use strict'

/*
|--------------------------------------------------------------------------
| Websocket
|--------------------------------------------------------------------------
|
| This file is used to register websocket channels and start the Ws server.
| Learn more about same in the official documentation.
| https://adonisjs.com/docs/websocket
|
| For middleware, do check `wsKernel.js` file.
|
*/

const Ws = use('Ws')

Ws.channel('chat',({socket})=>{
  socket.on('msj:add',(data)=>{
    socket.broadcast("new:msj",data)
    console.log('user')
    console.log(data);
  });

  //console.log('user: joined with %s socket id', socket.id)
  
});

//se suscriben y se mantiene la coneccion por canal por array o string

// Ws.channel('chat', ({ socket }) => {
//   socket.emit("new:id",socket.id);

//   console.log(socket.topic)
//   Ws.on("connection", (data) => {
//     res.status(200).send("oda");
//   });


//   socket.on('Message', (data) => {
//     socket.broadcast('usuario', true)
//   });

//   socket.on('New-message', (data) => {
//     socket.broadcast('usuario', true);
//   });
// });

// Ws.channel('chat:*', ({ socket }) => {
//   console.log(socket.topic)
//   for (let i = 0; i < array.length; i++) {
    
//     if (socket.topic="asd") 
//     {
      
//     }
    
//   }
// });



//nombre datos collback

