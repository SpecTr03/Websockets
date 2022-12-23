const socketController = socket => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    })

    //Escuchando cuando un cliente manda un mensaje
    socket.on('enviar-mensaje', (payload, callback) => {

        //callback hace referencia al emit que hacemos en socket-client.js en la linea 37
        const id = 123456;
        callback(id);

        //Enviando mensaje a todos los clientes conectados
        socket.broadcast.emit('enviar-mensaje', payload)
    })
};

module.exports = {
    socketController
}