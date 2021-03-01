/**
 * Codigo dedicado a crear una publicacion en el servidor MQTT
 */
const mqtt = require('mqtt');

/**
 * Configuracion de la conexion al servidor MQTT
 */
const options = {
  clientId: 'client123', // Se puede definir un cliente, de lo contrario el servidor define un cliente
  username: 'username', // Usuario para conectar al servidor
  password: 'password' // Contraseña para conectar al servidor
}

/**
 * Crear un cliente conectado al servidor MQTT
 */
const client = mqtt.connect("mqtt://127.0.0.1:1883", options);

/**
 * Topico
 */
const topic = 'test1';

/**
 * Señal de un mensaje 
 */
client.on('message', (topic, message, packet) => {
  console.log(topic);
  console.log(message.toString());
  console.log(packet);
})

/**
 * Señar error en la conexion al servidor
 */
client.on("error", (error) => {
  console.log(error);
});

/**
 * Señal reconectando al servidor
 */
client.on('reconnect', () => {
  console.log('Reconect');
})

/**
 * Señal conectado al servidor 
 */
client.on('connect', () => {
  setTimeout(() => {
    // Suscripcion al topico
    client.publish(topic, 'Hola mundo MQTT');
  }, 4000);
})