# API RESTful de Productos - IPG Semana 4

## Descripción General
Esta es una API RESTful básica construida con Node.js y Express.js. Su propósito es gestionar un inventario de productos mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar) almacenando los datos de forma temporal en la memoria mediante un archivo externo (`data.js`). 

## Requisitos Previos e Instalación

1. Instalar **Node.js**  en el pc.
2. Clona o descarga este repositorio.
3. Abre una terminal en la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:
  
   npm install express

4. Iniciar el servidor con el terminal de visual studio code de la siguiente manera:
   
   node index.js

El servidor esta configurado como local host en el puerto 8080, su URL es la siguiente:

El servidor está configurado para ejecutarse en el puerto 8080. La ruta base de nuestra API es:

http://localhost:8080/ en el cual viene un mensaje de Bienvenida que incluye la URL de nuestros productos

proyecto-semana4\capturas\inicio.png


El proyecto está creado en los siguientes archivos como fue solicitado por la profesora :

index.js: Servidor principal. Importa Express, configura el middleware para leer JSON y levanta el servidor en el puerto 8080.

routes.js: Contiene toda el ruteo (GET, POST, PUT, DELETE) y las validaciones de los datos entrantes.

data.js: Simulador de nuestra base de datos almacenando un arreglo inicial de objetos (productos).




La API responde con los siguientes códigos HTTP  dependiendo del resultado solicitado:

200 OK: La solicitud se completó con éxito (GET, PUT, DELETE).

201 Created: Producto  creado y guardado exitosamente (POST).

400 Bad Request: Los datos enviados son erróneos o faltan completar un campo obligatorio (nombre, precio, categoria).

404 Not Found: Lo solicitado no existe, el ID proporcionado no fue encontrado.



Pruebas de la API

GET  Este endpoint nos muestra todos los productos guardados actualmente en la memoria.

GET http://localhost:8080/api/productos

Formato Json

[
  {
    "id": 1,
    "nombre": "Filtro de aceite Corsa",
    "precio": 8500,
    "categoria": "Repuestos"
  },
  {
    "id": 2,
    "nombre": "Radio con pantalla táctil",
    "precio": 45000,
    "categoria": "Accesorios"
  }
]

Captura muestra : proyecto-semana4\capturas\get.png



POST Permite agregar un nuevos productos al inventario. El sistema asigna el id de manera automática y valida que los campos obligatorios existan.

curl -X POST http://localhost:8080/api/productos \
-H "Content-Type: application/json" \
-d '{"nombre": "Sensor IAC Chevrolet Corsa", "precio": 18500, "categoria": "Repuestos"}'

Formato JSON

JSON
{
  "mensaje": "Producto creado exitosamente",
  "producto": {
    "id": 3,
    "nombre": "Sensor IAC Chevrolet Corsa",
    "precio": 18500,
    "categoria": "Repuestos"
  }
}


Captura muestra : proyecto-semana4\capturas\post.png


PUT Modifico un registro utilizando su ID en la URL de Postman  http://localhost:8080/api/productos/3

curl -X PUT http://localhost:8080/api/productos/3 \
-H "Content-Type: application/json" \
-d '{"nombre": "Sensor IAC Chevrolet Corsa 2007 Original", "precio": 24990, "categoria": "Repuestos"}'


JSON

{
  "mensaje": "Producto actualizado correctamente",
  "producto": {
    "id": 3,
    "nombre": "Sensor IAC Chevrolet Corsa 2007 Original",
    "precio": 24990,
    "categoria": "Repuestos"
  }
}

Captura muestra : proyecto-semana4\capturas\put.png


DELETE  borro el registro que ya no necesito 

agrego la URL correspondiente en Postman  http://localhost:8080/api/productos/2

curl -X DELETE http://localhost:8080/api/productos/2

JSON
{
  "mensaje": "Producto eliminado",
  "producto": {
    "id": 2,
    "nombre": "Radio con pantalla táctil",
    "precio": 45000,
    "categoria": "Accesorios"
  }
}

Captura muestra : proyecto-semana4\capturas\delete.png






