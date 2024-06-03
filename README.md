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
npm run build
```

### Variables de entorno .env 🪛

![variable_entorno](https://github.com/sergioab7/sprint6.1-dados/assets/10132565/d4c94709-33ad-476c-b6c9-383bf981b338)

### Comandos para ejecutar ⌨️

```
npm run dev

```

## Arquitectura del proyecto 🛡

![estructura_proyecto](https://github.com/sergioab7/sprint6.1-dados/assets/10132565/38fe816d-c6d3-4c8e-9a70-6e496300f247)

## Docker

```
Dentro del directorio principal:
docker-compose up -d

Comprobamos si funciona:
docker ps
```

### Rutas de la aplicación 🚏

## Funcionamiento con AUTENTICACIÓN
1. Debes registrarte
   ![Captura desde 2024-05-27 17-37-00](https://github.com/sergioab7/sprint6.1-dados/assets/10132565/0c889a67-6b6c-4009-9f20-a1f4acec3cd6)

2. Debes loguearte y coger la clave JWT
   ![Captura desde 2024-05-27 17-37-34](https://github.com/sergioab7/sprint6.1-dados/assets/10132565/96ba6406-7ec6-4b58-a192-1317e5179dce)

3. Cuando vayas a poner el endpoint debes asegurarte poner la clave JWT en headers Authorization.
![Captura desde 2024-05-27 17-38-14](https://github.com/sergioab7/sprint6.1-dados/assets/10132565/5fc04c3d-082f-4dd6-a7ca-6488166d05ad)

4. Ya puedes jugar/probar la app


## Funcionamiento de forma ANÓNIMA
1. Debes loguearte
	![Captura desde 2024-06-03 11-11-26](https://github.com/sergioab7/sprint6.1-dados/assets/10132565/407b6520-9ad5-49b5-b64c-266659c1102b)

2. Asegúrate de coger la clave JWT y ponerla en authorization.
   	![imagen](https://github.com/sergioab7/sprint6.1-dados/assets/10132565/69476e61-f17a-4da5-ad25-1a02291831f0)

3. Asegúrate de poner la clave JWT en todas las rutas que requieran autenticación. Listo. 

   
(IT Academy dice /posts para registro, pero yo he hecho registro y login)
_Registro - POST_
```
http://localhost:3000/register
```
_Login - POST_
```
http://localhost:3000/login
```


_Login de Forma Anonima! - POST_
```
http://localhost:3000/anonymous
{
	"firstName":"anonymous"  // ¡Ojo! Debes poner anonymous, si pones otro nombre no te dejará!
}
```


_Obtener todos los jugadores - GET_
```
http://localhost:3000/players/
```
_Obtener un jugador - GET_
```
http://localhost:3000/player/:id
```
_Actualizar nombre y apellido de un jugador - PUT_  // No funciona en anonymous
```
http://localhost:3000/players/:id
{
   
	"firstName":"ejemplo_firstname",
	"lastName":"ejemplo_lastname"

}
```
_Borrar jugador - DELETE_
```
http://localhost:3000/players/:id
```
_Jugador tira los dados - POST_
```
http://localhost:3000/games/:id
```
_Ranking general - GET_
```
http://localhost:3000/ranking
```
_Mejor jugador - GET_
```
http://localhost:3000/ranking/winner
```
_Peor jugador - GET_
```
http://localhost:3000/ranking/loser
```
_Borrar las jugadas de un jugador - DELETE_
```
http://localhost:3000/games/:id
```

