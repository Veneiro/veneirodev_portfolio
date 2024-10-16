---
layout: '@/templates/BasePost.astro'
title: Fortress Extraction
description: My Unreal Engine 4 Game
pubDate: 2022-01-25T00:00:00Z
imgSrc: '/assets/images/Screenshot_1095.png'
imgAlt: 'Image post 7'
---
## Enlace al Proyecto

Visita el proyecto [aquí](https://unioviedo-my.sharepoint.com/:w:/g/personal/uo277172_uniovi_es/EZ7Af5HV_x5AnQ5IDbuuqPIBcipzJg3KP0zsCHyot6ocrQ?e=5Wftgb)

En un futuro se subirá a github como el resto de mis proyectos pero aún he de solucionar algunos problemas que han surgido a la hora de pasarlo de Unreal Engine 4 a Unreal Engine 5

## Descripción básica: 

Como base del juego se ha tomado inspiración de dos tipos de juego como son los Hero Shooter (Shooters competitivos por equipos formados por personajes con diversas habilidades) y el clásico Tower Defense (Juego en el que el jugador deberá defender su base de unos atacantes que vienen por oleadas). Al final lo que tenemos con esta unión es un tower defense en el que el jugador controla a un personaje en primera persona y tratará de defender la base de oleadas de enemigos diversos. 

El jugador deberá ir mejorando las estadísticas de su personaje para enfrentarse a las oleadas de enemigos diversos y defender el núcleo del castillo por encima de todo 

## ¿Qué hay disponible en esta versión del juego? 

Esta versión presentada contiene las características para poder jugar una partida divertida, aunque solo está probada por una persona por lo que pueden faltar cambios de balance para mejorar la experiencia del jugador.  

### Personajes Jugables 
- Magath: Es el personaje más tanque, este cuenta con una mayor cantidad de vida y armadura. Tiene dos habilidades: 

  - Salto largo: Magath realizará un gran salto en la dirección a la que se esté mirando, se puede aumentar la longitud del salto pegando un salto normal antes de activar la habilidad y mirando hacia arriba ya que el impulso se produce en la dirección en la que apunte la cámara. Esta habilidad tiene un enfriamiento de 4 segundos que comenzará al tocar el suelo 

  - Escudo de Energía: Magath invoca un escudo a su alrededor que absorberá todas las balas que impacten contra él durante 12 segundos. Esta habilidad tiene un enfriamiento de 15 segundos que comenzarán nada más terminar la duración del escudo 

<img src="/public/assets/images/Screenshot_1096.png">

- Ravth: Es un personaje más enfocado al soporte, este cuenta con menor cantidad de vida y escudo. Cuenta con dos habilidades: 

  - Área Curativa: Ravth invocará un área de curación que lo sanará a él y a los aliados que se encuentren en esta área. 

  - Luz Divina: Al impactar contra un enemigo le infringirá daño de quemadura durante 6 segundos (En una partida multijugador si este impacta contra un aliado lo curará durante esos 6 segundos, aunque al no estar implementado el multijugador de momento esta funcionalidad no está disponible) 

<img src="/public/assets/images/Screenshot_1097.png">

La partida comenzará con un tiempo de gracia de 3 minutos que se pueden avanzar rápidamente con la P si así se desea. Pasado este tiempo de gracia comenzará la oleada y los enemigos comenzarán a venir. Se tendrán que superar 10 oleadas con tipos y cantidades de enemigos diferentes. Cada vez que un enemigo llegue al núcleo del jugador quitará una cantidad de vida al núcleo dependiendo de que tipo de enemigo sea. 

### Tipos de Enemigos

- **Scout**: Será un enemigo rápido y con un gran daño, pero con una baja cantidad de salud. Al llegar al núcleo quitará 500 de vida a este

<img src="/public/assets/images/Screenshot_1098.png">

- **Heavy**: Será un enemigo más lento con más vida y con una gran cadencia de disparo, pero un menor daño. Al llegar al núcleo quitara 1000 de vida a este

<img src="/public/assets/images/Screenshot_1099.png">

- **Big Boy**: Este enemigo contará con una grandísima cantidad de vida, será bastante lento y no atacará al jugador, pero se debe tener bastante en cuenta ya que si alcanza el núcleo lo destruirá por completo después de 5 segundos

<img src="/public/assets/images/Screenshot_1100.png">

### Tienda
Aquí podrás mejorar las estadísticas de tu personaje para la partida. El dinero necesario para llevar a cabo esto se obtendrá al derrotar enemigos, cada enemigo soltará la morir una cantidad de dinero aleatoria que el jugador podrá recoger, dependiendo del tipo de enemigo tenderá a dejar más o menos dinero dejando más cuanto más complicado sea de matar. 

Las mejoras disponibles en la tienda por el momento son las siguientes: 

<img src="/public/assets/images/Screenshot_1101.png">

Tendremos una mejora de daño, otra de velocidad, otra de vida y otra de armadura. El numero a la derecha de cada una es el coste de mejora que irá subiendo conforme vayamos mejorando esta estadística por lo que no nos costará lo mismo mejorarlo la primera vez que la segunda o tercera. Cada personaje tendrá unos precios diferentes en la tienda acorde a sus estadísticas base, por ejemplo, para Ravth, al tener menos vida y armadura la mejora de ambas es un poco más barata que para Magath. 

## Otras características

- El juego dispone de un menú completamente funcional que dispone de ajustes tanto gráficos, como de pantalla y de audio que se guardarán al aplicarse y estarán presentes la próxima vez que se inicie el juego 

- El juego dispone de una interfaz gráfica completa para el jugador que le indica toda la información relevante a tener en cuenta durante la partida (Vida, armadura, dinero, oleada…) 

- El jugador dispone de un menú de pausa al darle a Escape que pausará la partida y le permitirá volver al menú principal o cerrar el juego 

## Comentarios del Desarrollador

Me disculpo por adelantado de cualquier bug o error que pueda estar presente y que impida el correcto funcionamiento del juego, es complicado el testeo correcto del mismo con una sola persona y puede que se me haya pasado algún fallo que no he visto al testearlo. 

En el caso de que al iniciar el proyecto aparezca la pantalla en negro para iniciar el juego deberás ir a ThirdPersonBP/Blueprints/Maps/MainMenu y abrir el MainMenuMap para iniciar el juego, es un bug con el que me he encontrado algunas veces y que creo que es algún fallo del unreal. 

Todo el código creado por mi está dentro de la carpeta ThirdPersonBP, toda la parte lógica y gráfica del juego se puede encontrar ahí ordenada por carpetas. 

Cualquier comentario, sugerencia o ayuda que tengáis sobre el juego me interesará mucho ya que mi intención sería seguir puliéndolo, añadir el multijugador de este modo de tower defense y de otro modo que tengo ya pensado y subirlo a alguna pagina como itch.io o también probarlo con amigos. Así que todo el feedback que podáis darme del juego me vendrá muy bien 

## Bug Unreal Engine 4

**Para solucionarlo** tienes que crear un acceso directo a Unreal desde el que entrarás siempre y en las propiedades del acceso directo en destino, después de acabar las comillas tienes que poner -dx12, esto abrirá el Unreal con DirectX 12 y al menos esta solución ha hecho que a mi me desaparezcan los bugs de parpadeos y pantallas en negro constantes por completo, desde que lo he hecho no me ha vuelto a pasar. Tendrás que abrir siempre el Unreal desde este acceso y no sucederá el bug