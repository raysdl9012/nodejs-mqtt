/**
 * Codigo dedicado a crear un servidor que funcione
 * como broker para la comunicacion MQTT
 */

/**
 * Libreria mosca para el servidor MQTT
 */
const mosca = require('mosca');

/**
 * Configuraciones de la libreria mosca para MQTT
 */
const settings = {
  port: 1883,
};

/**
 * Creación de instancia del servidor MQTT
 */
const server = new mosca.Server(settings);

/**
 * Señal de un cliente conectado
 */
server.on('clientConnected', (client) => {
  console.log('ClientConnected: ', client.id);
});

/**
 * Señal de un cliente desconectado
 */
server.on('clientDisconnected', (client) => {
  console.log('ClientDisconnected: ', client.id);
});

/**
 * Señar de una nueva publicación
 */
server.on('published', function (packet, client) {
  console.log(packet.payload);
  console.log(client);
});

/**
 * Funcion de autenticacion para la conexión al servidor mqtt
 * @param {*} client Cliente que solicita la conexion
 * @param {*} username Usuario
 * @param {*} password contraseña
 * @param {*} callback callback
 */
const authenticate = (client, username, password, callback) => {
  console.log(client.id);
  console.log(username);
  console.log(password);
  // Validación de las credenciales
  const authorized = (username === 'username' && password.toString() === 'password');
  if (authorized) client.user = username;
  callback(null, authorized);
}

/**
 * Señal de que el servidor esta listo
 */
server.on('ready', () => {
  console.log('Mosca server is up and running');
  // Si no quiere realizar autenticacion al servidor MQTT, comente la siguiente linea
  server.authenticate = authenticate;
});



