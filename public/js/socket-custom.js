var socket = io();

//Escuchar conecciones
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar desconeccion
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información al servidor
// socket.emit('enviarMensaje', {
//     usuario: 'Jonh',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});