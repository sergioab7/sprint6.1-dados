# 🎲 JUEGO DE DADOS 

_Este proyecto ha sido desarrollado desde cero por [Sergio Andújar](https://github.com/sergioab7)._

_Aplicación creada para el sprint6 de IT Academy._

## Autor ✒️

* [Sergio Andújar](https://github.com/sergioab7) - *Todo el proyecto*

## Objetivos 🎯

✅ Al joc de daus s’hi juga amb dos daus de sis cares
✅ En cas que el resultat dels dos daus sigui 7 la partida es guanya. Si no, es perd.
✅ Per poder jugar al joc t’has de registrar com a jugador/a amb un nom. Un jugador/a pot veure un llistat de totes les tirades que ha fet i el seu percentatge d’èxit.
✅ Per poder realitzar una tirada, un usuari/ària s’ha de registrar amb un nom no repetit. Al ser creat, se li assigna un identificador únic i una data de registre.

✅ Si l’usuari/ària ho desitja, pot no afegir cap nom i es dirà “ANÒNIM”. Pot haver-hi més d’un jugador/a “ANÒNIM”.

✅ Cada jugador/a pot veure un llistat de totes les tirades que ha fet amb el valor de cada dau i si s’ha guanyat o no la partida. A més, pot saber el percentatge d’èxit de les tirades que ha fet.
✅ No es pot eliminar una partida en concret, però sí que es pot eliminar tot el llistat de tirades d'un jugador/a. El software ha de permetre llistar tots els jugadors/es que hi ha al sistema, el percentatge d’èxit de cada jugador/a i el percentatge d’èxit mitjà de tots els jugadors/es en el sistema.
✅ El software ha de respectar els principals patrons de disseny.

### Instalación 🔧
```
npm install
```

### Variables de entorno .env 🪛

![variable_entorno](https://github.com/sergioab7/sprint6.1-dados/assets/10132565/d4c94709-33ad-476c-b6c9-383bf981b338)

### Comandos para ejecutar ⌨️

```
npm run dev
```

## Arquitectura del proyecto 🛡

![estructura_proyecto](https://github.com/sergioab7/sprint6.1-dados/assets/10132565/38fe816d-c6d3-4c8e-9a70-6e496300f247)

## Registro:

![registroappdados](https://github.com/sergioab7/sprint6.1-dados/assets/10132565/fd7d8d12-8add-4876-abc4-a8f779fcb3eb)

## Login

![logeodados](https://github.com/sergioab7/sprint6.1-dados/assets/10132565/6e0ac7d1-be37-4865-95e2-6db599355754)

## Docker

```
docker build . -t node-api-sprint6:latest
docker run -p 3000:3000 --env-file=./.env  node-api-sprint6
```

### Rutas de la aplicación 🚏

_Registro - POST_
```
http://localhost:3000/auth/register
```
_Login - POST_
```
http://localhost:3000/auth/login
```
_Obtener todos los jugadores - GET_
```
http://localhost:3000/players/get-all-players
```
_Obtener un jugador - GET_
```
http://localhost:3000/players/get-player/:id
```
_Actualizar nombre y apellido de un jugador - PUT_
```
http://localhost:3000/players/update-player/:id
```
_Borrar jugador - DELETE_
```
http://localhost:3000/players/delete-player/:id
```
_Jugador tira los dados - POST_
```
http://localhost:3000/games/player/:id
```
_Ranking general - GET_
```
http://localhost:3000/games/ranking
```
_Mejor jugador - GET_
```
http://localhost:3000/games/better-player
```
_Peor jugador - GET_
```
http://localhost:3000/games/worst-player
```
_Borrar las jugadas de un jugador - DELETE_
```
http://localhost:3000/games/delete/62d874b9d1bb66e79a9e23d9
```

