# *Data Lovers*



## *Pokemon GO*

Pokémon GO es un videojuego de realidad aumentada basado en la localización desarrollado por Niantic, Inc.1​2​ para dispositivos iOS y Android. Es un videojuego gratuito pero contiene microtransacciones. El juego consiste en buscar y capturar personajes de la saga Pokémon escondidos en ubicaciones del mundo real y luchar con ellos, lo que implica desplazarse físicamente por las calles de la ciudad para progresar. La aplicación comporta un elemento de interacción social, ya que promueve reuniones físicas de los usuarios en distintas ubicaciones de sus poblaciones.

Uno de los modos de juego es que utiliza la realidad aumentada y de acuerdo con el concepto original, los entrenadores podrán capturar Pokémon hasta completar una colección.

La colección de pokemones será nuestra guía en el proyecto KANTODEX

<center><img src="https://i.ibb.co/s35LSQk/logo-c.png"></center>


## **¿Qué es KANTODEX?**

KANTODEX es un proyecto donde construiremos una web app para visualizar un grupo de datos que se acomodará a las necesidades de los usuarios, las cuales se detectaron a través de encuestas y testeos UX.

El usuario, a través de sus necesidades, podrá filtrar, ordenar y hacer algún cálculo adicional que sea relevante.

### **Mapa de flujo**

Una de las primeras tareas que definimos fue realizar un fljo de las acciones que podría tener la aplicación, sin tener el usuario definido, con el motivo de tener una idea de cómo se iban a mostrar las acciones.

Aquí presentamos el flujo antes de conocer al usuario y después de conocerlo:

<a  href="https://ibb.co/PCQr02R"><img  src="https://i.ibb.co/7y4SL3H/IMG-20190627-061528805.jpg"  alt="IMG-20190627-061528805"  border="0"></a><br  /><a  target='_blank'  href='https://es.imgbb.com/'></a><br  /><a  href="https://ibb.co/1Xb0ZND"><img  src="https://i.ibb.co/n1RwryH/flujo.jpg"  alt="flujo"  border="0"></a>


### **Definición de usuario (UX)**

En este proyecto, nuestro primer enfoque es conocer al usuario para lograr una experiencia que logre satisfacer sus necesidades principales. Nuestro usuario se definió a través de un formulario de preguntas basadas en obtener información relevante de los usuarios, una jerarquización de los atributos que tienen los pokemones (y que están dentro de la data)

[Link del formulario](https://docs.google.com/spreadsheets/d/1MHKQvyeXej_gJM13vSrrJqYACKMsNMiNy3xyihP8SM0/edit?usp=sharing)


<a  href="https://ibb.co/hFWvpKx"><img  src="https://i.ibb.co/7tWF7Gx/1edad.png"  alt="1edad"  border="0"></a>

<a  href="https://ibb.co/hFWvpKx"><img  src="https://i.ibb.co/7tWF7Gx/1edad.png"  alt="1edad"  border="0"></a>

<a  href="https://ibb.co/qn04PzL"><img  src="https://i.ibb.co/7zgT6Hx/2identidad.png"  alt="2identidad"  border="0"></a>

<a  href="https://ibb.co/NZBZZL4"><img  src="https://i.ibb.co/kQCQQhd/3niveljugador.png"  alt="3niveljugador"  border="0"></a>

<a  href="https://ibb.co/48CcCLV"><img  src="https://i.ibb.co/R3t1tKD/4frecuencia.png"  alt="4frecuencia"  border="0"></a>

<a  href="https://ibb.co/NjfJtTg"><img  src="https://i.ibb.co/jMqQbJ9/5razones.png"  alt="5razones"  border="0"></a>

<a  href="https://ibb.co/BZh9Lh6"><img  src="https://i.ibb.co/85yHMyx/6importancia.png"  alt="6importancia"  border="0"></a>

<a  href="https://ibb.co/0B8n18q"><img  src="https://i.ibb.co/7g8SB8v/7motivaciones.png"  alt="7motivaciones"  border="0"></a>

<a  href="https://ibb.co/ZTwCPB7"><img  src="https://i.ibb.co/5czVyrw/8atributos.png"  alt="8atributos"  border="0"></a>

<a  href="https://ibb.co/xH8bGnc"><img  src="https://i.ibb.co/6BJSbKp/9ordenar.png"  alt="9ordenar"  border="0"></a>



Según las respuestas (78 en total) de los usuarios que juegan Pokemon GO, se determina lo siguiente:

1.  El rango de edad varía entre los 20 y 32 años

2.  Mujeres y hombres

3.  El nivel de jugadores es intermedio (nivel 27 a 40)

4.  Un 65,4% de los usuarios juega diariamente

5.  La razón principal de los usuarios cuando juegan Pokemon GO es coleccionar pokemones (85,9%)

6.  Los atributos de la Pokedex que más consideran son:

* Caramelos para evolucionar
* Siguiente evolución
* Probabilidad de aparición

7.  Los atributos para ordenar la Pokedex que más consideran son:

* Tipo de pokemon

* Orden alfabético y numérico

* Fortalezas/Debilidades

### *Historias de usuario*

En base a las encuenstas, y la información del data que se nos entregó para el proyecto (pokemon.js), se definieron las siguientes historias de usuario:

Historia de usuario Nº1:

* "Yo, como usuario intermedio de Pokemon GO, quiero ordenar los pokemones alfabéticamente (ascendente y descendente) para familiarizarme mejor con cada pokemon, como si se tratara de una enciclopedia."

Historia de usuario Nº2:
* "Yo, como usuario intermedio de Pokemon GO, quiero filtrar los pokemones según su tipo, para reconocer con mayor facilidad los pokemones que tengo y no tengo de cada tipo."

Historia de usuario Nº3:
* "Yo como usuario intermedio de Pokemon Go quisiera poder visualizar información adicional (como por ejemplo el porcentaje de un estado), para aprender contenido relevante sobre los pokemones."

#### Prototipo de baja fidelidad

Los prototipos de Baja Fidelidad implementan aspectos generales del sistema sin entrar en detalles. Permiten abarcar un espectro mayor de la interacción a realizar. También los prototipos de baja fidelidad permiten aplicar la primera ley de la creatividad de FUDD: «Para obtener una buena idea, obtén un montón de ideas» , y en este caso se puede obtener una gran retroalimentación.

A continuación se presentan las modificaciones que tuvo nuestro prototipo de baja de fidelidad de acuerdo a observaciones de compañeras que se están formando como UX (reducir pantallas, mejorar simbología, demostrar mejor cómo se puede ver un botón, entre otras cosas)



<center><a  href="https://ibb.co/ryrW9CL"><img  src="https://i.ibb.co/XJRwHhd/IMG-20190627-061444091.jpg"  alt="IMG-20190627-061444091"  border="0"></a>

<a  href="https://ibb.co/0JWpVNn"><img  src="https://i.ibb.co/mzYrFsR/IMG-20190627-061503532.jpg"  alt="IMG-20190627-061503532"  border="0"></a>

<a  href="https://ibb.co/KqGZckv"><img  src="https://i.ibb.co/LtPwDW7/IMG-20190627-122257373.jpg"  alt="IMG-20190627-122257373"  border="0"></a>

<a  href="https://ibb.co/Qkrdqj7"><img  src="https://i.ibb.co/KDFwQzc/IMG-20190627-123230141.jpg"  alt="IMG-20190627-123230141"  border="0"></a></center>

#### Testeo de  usuarios en Laboratoria:
A continuación se presentan el registro grabado de los testeos que se realizaron en Laboratoria, con el objetivo de aprender de cada usuario las observaciones y comentarios sobre el primer desarrollo del prototipo de baja fidelidad.
<center><a  href="https://ibb.co/4TfmJrt"><img  src="https://i.ibb.co/pzP0nFw/IMG-20190628-WA0007.jpg"  alt="IMG-20190628-WA0007"  border="0"  width="200"></a><a  href="https://ibb.co/Dt36ftP"><img  src="https://i.ibb.co/nbhVMbq/IMG-20190628-WA0012.jpg"  alt="IMG-20190628-WA0012"  border="0"  width="200"></a><a  href="https://ibb.co/y627NBY"><img  src="https://i.ibb.co/Pck0rz9/IMG-20190628-WA0013.jpg"  alt="IMG-20190628-WA0013"  border="0"  width="200"></a><a  href="https://ibb.co/ZHgT7xk"><img  src="https://i.ibb.co/3fFhQcL/IMG-20190628-WA0022.jpg"  alt="IMG-20190628-WA0022"  border="0"  width="200"></a><a  href="https://ibb.co/WK291hN"><img  src="https://i.ibb.co/bdKhn0j/IMG-20190628-WA0023.jpg"  alt="IMG-20190628-WA0023"  border="0"  width="200"></a></center>

#### Videos
[Video / Test usuario nº1](https://youtu.be/yDA6KDHWFX4)
Observaciones:
*  No se declaró exactamente al usuario la tarea de buscar un pokemon a través del filtro por tipo
* Tomó el papel primero en vez de interactuar con los botones dibujados en la pantalla
* Cuando llega a la pantalla nº2, pregunta si se puede "presionar" sobre las imágenes pokemon
* Continuó con el resto de tareas sin inconvenientes
* En la pantalla final no entendió el símbolo de los caramelos.<br>
[Video / Test usuario nº2](https://youtu.be/qOTkf90T7yg)
Observaciones:
* El primer acto fue interactuar y tomar el papael donde estaba dibujada la pantalla
* Después logró interactuar rápidamente con las secciones designadas para botones
* Se le preguntó si tuvo inconveniente al usar la app, y no tuvo mayor problema.<br>
[Video / Test usuario nº3](https://www.youtube.com/watch?v=PfNKrHZMpvw)
Observaciones:
* No interactúa en primera instancia con los botones, y toma el papel para dejarlo boca abajo
* Cuando empieza a interactuar, corregimos la forma de mostrarle las pantallas
* Logró visualizar los botones y secciones designadas lo cual hizo que le entregaramos las pantallas siguientes
* Le preguntamos qué le había costado y nos comentó que no entendía en un inicio dónde apretar los botones (botón con símbolo "X").<br>
[Video / Test usuario nº4](https://www.youtube.com/watch?v=ZVHpMJr0QSk)
Observaciones:
* Se logró hacer una mejor introducción
* Logró visualizar el botón y cerró el modal
* Comentó que los elementos "select" se parecía a un menú desplegable
* Logró identificar los símbolos expuestos en pantalla (información de carta pokemon)
* Preguntó si con el botón "X" podía volver a la pantalla anterior, lo cual supuso bien
* Al final pidió que le mostráramos todas las pantallas juntas para darnos feedback y nos comentó que funcionalmente se veía simple de usar, y preguntó si le aplicaríamos colores y otros estilos al prototipo.<br>
[Video / Test usuario nº5](https://youtu.be/qOTkf90T7yg)
Observaciones:
* Se le dan las intrucciones correspondientes
* En la primera pantalla se pregunta por qué hay una "X"
* Logra interactuar con las pantallas hasta que llega en la situación que debe interactuar con el selector "filtro", pero aprieta el selector "ordenar", aún así se le siguen mostrando las pantallas siguientes (situación que no debió ocurrir).

##### Conclusiones primer grupo de testeo
De acuerdo a lo experimentado en el testeo, podemos considerar las siguientes mejoras:
1. Desarrollar una mejor pauta de introducción al usuario
2. Generar con el usuario la confianza suficiente para que nos pueda decir todo lo que piensa o siente al probar el prototipo
3. Buscar un target más acorde a lo definido según las encuestas
4. Desarrollar el prototipo de alta fidelidad para visualizar los estilos y principios de Visual Design
5. Definir más específicamente la tarea que el usuario debería lograr

#### Prototipo de baja fidelidad final:
<center><a  href="https://ibb.co/TmYYYwg"><img  src="https://i.ibb.co/nz666wL/prototipo-baja-fidelidad-final.jpg"  alt="prototipo-baja-fidelidad-final"  border="0"></a></center>

Luego de simplificar nuestro protipado de baja fidelidad, debemos formular la guía de tareas que el usuario puede realizar, en base a preguntas que haremos tanto a los usuarios como a las tareas designadas.



##### Guía de usuario (tareas):

Lo que esperamos de este prototipo es que el usuario pueda completar la tarea de buscar al pokemon Poliwa a través del filtrado por tipo agua (basándonos en la historia de usuario nº1). Para esto se debe definir las siguientes "mini tareas":



a. Visualizar modal de bienvenida a la página

b. Cerrar modal de bienvenida (si lo completa, se le mostrará la siguiente pantalla)

c. Visualizar pantalla principal de la página

d. Detectar selección "Tipo"

d. Seleccionar "Tipo" (si lo completa, se le mostrará la siguiente pantalla)

e. Visualizar los tipos de elementos pokemon

f. Detectar el tipo "agua"

g. Seleccionar "agua" (si lo completa, se le mostrará la siguiente pantalla)

h. Visualizar pokemones filtrados por el elemento "agua"

i. Detectar al pokemon "Poliwa"

j. Seleccionar "Poliwa" (si lo completa, se le mostrará la siguiente pantalla)

k. Visualizar modal donde aparece la imagen del pokemon y su definición

l. Seleccionar botón cerrar para volver a la pantalla anterior (opcional)


##### Pauta hacia el usuario:

A continuación se presentan una serie de comentarios que se expresarán al usuario (incluyendo la guía de tareas) para interiorizarlo y obtener la mayor cantidad posible de información.

* "...Te voy a dar una serie de tareas..."

* "..."Hay algunos caminos en este testeo que no se podrán seguir..."

* "...¿Qué piensas mientras ves la pantalla?"

* "...Si no se completó la tarea ¿Por qué no pensaste que podría ser así?"

* "...¿Qué esperabas ver en esta situación?"

* "...¿Cuál otra manera pensaste para completar la tarea?"




#### Prototipo de alta fidelidad

Para empezar a desarrollar el prototipo de alta fidelidad, obtuvimos dos paletas de colores en base a ciertas pantallas de la app Pokemon GO, con el objetivo de que el usuario al ocupar KANTODEX, estuviera visualmente familiarizado con los colores y formas de los botones de interacción.

<center><img src="https://i.ibb.co/YfK1R2p/paleta-colores-btns.png" height=250px><img src="https://i.ibb.co/xhw3ZwZ/paleta-colores-pokedex-y-btn.png" height=250px></center>


#### Figma
Figma es una aplicación para hacer UI. Su principal objetivo es que seamos capaces de desarrollar interfaces de usuario dentro del navegador, sin tener que acudir a software nativo.

Ofrece una gran interfaz de usuario, es muy rápida, tiene infinidad de atajos o shortcuts, control de versiones, funcionalidad de feedback, pixel preview y google fonts.

Aquí puedes ver el link de nuestro desarrollo en [Figma](https://www.figma.com/file/at4qIz0DY7NyRVXgKU53oSoh/DataLovers-Estefan%C3%ADa-Nataly?node-id=0%3A1)

<center><a  href="https://ibb.co/QQ9gXKm"><img  src="https://i.ibb.co/zxsMN4f/FIGMA.png"  alt="FIGMA"  border="0"></a></center>



#### Zeplin

Con la herramienta Zeplin, en cada proyecto podemos ver las guías de diseño con información como paleta de colores, por ejemplo, así como un panel con pantallas indicando tamaños, notas y distribución de elementos gráficos.

Es posible importar diseños de otras plataformas, así como exportar componentes que podamos usar tanto en la programación como en el diseño de los elementos.

Aquí puedes ver el link de nuestro desarrollo en [Zeplin](zpl://project?pid=5d282271819fbe63b415940c)



#### Testeos de usabilidad (Parque Forestal)
<center><a href="https://ibb.co/DpGhsG6"><img src="https://i.ibb.co/VmHRrHh/pokemon-go2.jpg" alt="pokemon-go2" border="0"></a></center>

<center><img src="https://media3.giphy.com/media/U2nN0ridM4lXy/giphy.gif" height=120></center>

  El primer testeo se desarrolló en el interior de las instalaciones de Laboratoria, en donde obtuvimos varias observaciones en el campo de la interacción con los botones y selectores de la app, lo cual afinamos el prototipo de baja y alta fidelidad

  El segundo grupo de testeos se desarrolló en el Parque Forestal (Santiago de Chile), donde van frecuentemente usuarios de Pokemon GO.

 ##### Videos (Parque Forestal)
 A continuación se enlazan los siguientes videos y observaciones generales.:

[Test UX exterior/Usuario 1](https://youtu.be/bzQZWALaBW8)

[Test UX exterior/Usuario 2](https://youtu.be/eVHTYBQVRBA)

[Test UX exterior/Usuario 3 y 4](https://youtu.be/UWxxWwcNoVk)

Toda esta experiencia de testear nos generó mucho más retroalimentación ya que al testear con personas que uno no conoce, es mayor la observación hacia las acciones del usuario, porque tendrá reacciones "reales" de cómo utilizaría este producto.


Observaciones / problemas detectados Testeos UX en Laboratoria y Parque Forestal:

1. Hubo reconocimiento del lugar donde se podía "hacer touch".

2. Un usuario no pudo reconocer el pokemon que se le pidió seleccionar.

3. Los selectores se veían "planos" al no colorear, en algunos casos no pudieron seguir con la tarea.

4. Reconocían las referencias formales que se implementaron en el prototipo.

5. Hubo casos en donde el usuario tomó el papel donde estaba dibujado el prototipo en vez de apretar el botón para pasar a la siguiente pantalla.

6. Algunos usuarios pedían mucha más información relevante, la cual no estaba ingresada en la DATA (ataques más poderosos, nivel IV, entre otros).

7. Es muy relevante desarrollar una pauta de conversación más técnica e introductoria cuando nos acercábamos a los usuarios para pedirles un testeo, para que no empezaran a testear con confusión o incertidumbre.


#### Responsive

Aquí presentamos algunas configuraciones a través de @media queries, para adaptar la app a 3 principales dimensiones (Laptop / Tablet / Mobile)

<center><a  href="https://imgbb.com/"><img  src="https://i.ibb.co/7jnW67Y/Tablet.png"  alt="Tablet"  border="0"></a>

<a  href="https://imgbb.com/"><img  src="https://i.ibb.co/w6P79jp/Laptop.png"  alt="Laptop"  border="0"></a>

<a  href="https://ibb.co/QNVsL4w"><img  src="https://i.ibb.co/Z8ry50D/Mobile.png"  alt="Mobile"  border="0"></a><br  /><a  target='_blank'  href='https://es.imgbb.com/'></a><br></center>


##### Evaluación Heurística
¿Qué es una Evaluación Heurística?
Una Evaluación Heurística (EH) es un método de inspección de la usabilidad sin usuarios. Este, consiste en examinar la calidad de uso de una interfaz por parte de varios evaluadores expertos, a partir del cumplimiento de unos principios reconocidos de usabilidad: los heurísticos.
Al igual que los Walkthroughs, el principal objetivo de la EH es medir la calidad de la interfaz de cualquier aplicativo en relación a su facilidad para ser aprendido y usado por primera vez. Sin embargo, mientras los primeros se centran en la consecución de tareas, las EH inspeccionan problemas potenciales . Ya que el evaluador se pone en la piel del usuario real del sistema, intentando predecir los errores que podrá encontrarse.

Aquí puedes ver el link de nuestro desarrollo de nuestra [Evaluación heurística](https://docs.google.com/spreadsheets/d/1H3MyRaX7Uj-Y50oFSDAQkWp1tHVjQmwLMGGy8Vr8bPk/edit?usp=sharing)



#### Conclusiones proyecto KANTODEX

A nivel proyectivo, el trabajo realizado puede seguir en proceso de mejora, ya que la retroalimentación por parte de los usuarios nos genera la guía hacia un producto mínimo víable en base a sus primeras experiencias con el producto. Esto quiere decir que el enfoque hacia el usuario es una de las ramas más importantes al desarrollar un proyecto, ya que nuestros usuarios nos permitirán generar una visión de mejora y desarrollo constante, tanto en el proyecto, como en mejoras técnicas por parte del equipo.





#### *Herramientas utilizadas*
*  [Trello (Data Lovers)](https://trello.com/b/bRhApRB2/proyecto-data-lovers)
*  [Git](https://git-scm.com/)
*  [GitHub](https://github.com/)
*  [GitHub Pages](https://pages.github.com/)
*  [Figma](https://www.figma.com/)
*  [Zeplin](https://zeplin.io/)
*  [Markdown Tips](https://guides.github.com/features/mastering-markdown/)
*  [CSS Lint](http://csslint.net/)
*  [Validator HTML](https://validator.w3.org/)

#### *Checklist*
*  [x] Usa VanillaJS.

*  [x] No hace uso de `this`.

*  [x] Pasa linter (`npm pretest`)

*  [x] Pasa tests (`npm test`)

*  [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y

lines y branches.

*  [x] Incluye Definición del producto clara e informativa en `README.md`.

*  [x] Incluye historias de usuario en `README.md`.

*  [x] Incluye sketch de la solución (prototipo de baja fidelidad) en

`README.md`.

*  [x] Incluye Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

en `README.md`.

* [x] Incluye link a Zeplin en `README.md`.

* [x] Incluye el listado de problemas que detectaste a través de tests de

usabilidad en el `README.md`.

* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.

* [x] UI: Permite ordenar data por uno o más campos (asc y desc).

* [x] UI: Permite filtrar data en base a una condición.

#### *EXTRA (+ hacker edition JSON)*
Después de la entrega de proyecto, nos dieron tres días para poder mejorar y agregar más elementos a nuestro proyecto. Durante estos días se realizó lo siguiente:

1. Se usó fetch en una data de Pokemon distinta, la cual tiene información adicional que mostramos en un efecto Flipcard de las cartas Pokemon
