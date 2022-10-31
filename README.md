
# BrewDog Beer Menu

Este proyecto es el proyecto final de curso de Front End Development. Consiste en la creación de la página web que muestra el menú o listado de las cervezas de la cervecería BrewDog (https://www.brewdog.com/), utilizando la API "Punk API" (https://punkapi.com/documentation/v2) y las tecnologías de Front End como HTML, CSS y Javascript con el framwork Vue.js.

## Prerequisitos

Este proyecto requiere NodeJS y NPM.
Para verificar si ya están instalados en el ordenador,
intenta ejecutar el siguiente comando en la Terminal.
```
$ npm -v && node -v
```
Si aparece "command not found", podrás instalarlos fácilmente a través de[Node](http://nodejs.org/) y [NPM](https://npmjs.org/).

## Instalación

Para obtener una copia del proyecto en funcionamiento en tu dispositivo local para fines de desarrollo y/o prueba, deberás clonar el repositorio localmente:
```
$ git clone 
$ cd PROJECT
```
Una vez clonado el repositorio, deberás utilizar el siguiente comando
```
npm run dev
```
para ejecutar el script de desarrollo definido en el archivo package.json del proyecto.
Para saber qué ejecuta exactamente el comando, primero debes abrir el archivo package.json.

## API Reference
La API de Punk toma el DIY Dog de Brewdog y lo convierte en una API que se puede buscar y filtrar que es completamente gratuita y de código abierto.
Link a la PUNK API https://punkapi.com/documentation/v2

### Autenticación
En la versión 2, no se requiere autenticación.

### Root Endpoint
El endpoint debe prefijar todos los recursos y solo se puede acceder a través de HTTPS. CORS también está habilitado.

### Parámetros
Todos los parámetros son opcionales y sin ellos la API solo devolverá las cervezas en orden ascendente desde su ID. Los parámetros se pasan como una cadena de consulta y se pueden encadenar.
Para consultar los parámetros, dirígete a la página web: https://punkapi.com/documentation/v2

## Deployment
La aplicación está desplegada con Vercel. Link: https://codeop-final-project.vercel.app/

## Credits

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._

## Authors

- [@irinamoondo](https://github.com/irinamoondo/)
