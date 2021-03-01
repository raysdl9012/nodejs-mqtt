# Nodejs MQTT

Este es un ejemplo de como se realiza una conexion MQTT por medio de NodeJS utilizando el concepto de cliente y servidor.

## Descripción
En este proyecto se encuentran los siguientes archivos:
1. BROKER: Corresponde al servidor MQTT
2. PUBLISHER: Correponse a un cliente que va a realizar publicaciones 
3. SUBSCRIBER: Corresponde a un cliente que esta suscrito a las publicaciones

## Dependencias
Para la realizacion de este ejemplo se utilizaron las siguietnes dependencias:
1. MOSCA: Libreria de npm para poder crear el BROKER. En el siguiente [enlace](https://www.npmjs.com/package/mosca) podra encontrar toda la documentacion correspondiente 
2. MQTT: Libreria de npm para poder crear clientes para conectarse al servidor MQTT (BROKER). En el siguiente [enlace](https://www.npmjs.com/package/mqtt) podra encontrar toda la documentacion correspondiente 


## Instalación

Para poder ejecutar el ejemplo de MQTT, realizar los siguientes pasos
1. Instalacion de la version de NodeJS para el caso realizado se utilizo la verion `v14.16.0 - 2021`
2. Clonar el repositorio
3. Instalar las dependencias

	> $ npm install

4. Existen 3 archivos, BROKER, SUBSCRIBER, PUBLISHER. ejecutar cada archivo mediante nodejs

	> $ node broker.js

	> $ node subscriber.js

	> $ node publisher.js

