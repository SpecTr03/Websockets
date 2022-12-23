//Referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnEnviar = document.querySelector('#btnEnviar');

//Socket del cliente
const socket = io();

socket.on('connect', () => {
    console.log('Conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');

    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

//Enviando mensaje a clientes
socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
})

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMessage.value;
    const payload = {
        mensaje,
        id: '123',
        fecha: new Date().getTime()
    }
    
    //Enviandole el payload al servidor
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('SERVER', id);
    });
})