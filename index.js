"use strict";

let printInformation=(name,years,info,image,school="",cita="")=>{
	document.querySelector('#name').innerText = name;
	document.querySelector('#years').innerText = years;
	document.querySelector('#info').innerText = info;
	document.querySelector('#image').src = "images/"+image;
	document.querySelector('#school').innerText = school;
	if (cita != ""){
		document.querySelector('#cita').innerText = cita;
		document.querySelector('#cita').classList.remove('hidden');
	}else{
		document.querySelector('#cita').classList.add('hidden');
	}
}

document.getElementById('aristoteles').addEventListener('click', function(e){
	let name = "Aristóteles";
	let years = "384 a.C";
	let info = "A la edad de 18 años (366 a.C.) ingresó a la escuela del filsósofo Platón: La Academia. \n"+
	" En 342 a.C formó parte de la corte del rey Filipo de Macedonia y tomó bajo su encargo la educación de su hijo: Alejandro Magno. \n" +
  " En el año 355 a.C. fundó su propia escuela de filosofía a la que denominó con el nombre de: LICEO, debido a su ubicación en el sagrado paraje de Apolo Licio. " +
  " A los discípulos de dicha escuela se les denomina: “Peripatéticos” " +
  " Dentro del sistema ético aristotélico, la justicia es la virtud más importante, esto debido a que representa el respeto a la Ley del Estado, " +
  " y, al mismo tiempo representa la repartición de bienes, beneficios y ventajas.\n" +
  "Aristóteles no sólo es uno de los representantes más importantes de la filosofía occidental, " +
  "también nos enseñó lo que creemos es la base de todo conocimiento, y es el saber observar a tu alrededor, "+
  "conocer y contemplar el Universo como él hubiera dicho, y a través de ello filosofar.";
  let image = "aristoteles.png";
  let school = "Escuela: La Academia";
  let cita = "Todos los hombres tienden encontrar su felicidad en la naturaleza del saber.";
	printInformation(name, years, info, image,school,cita);
});

document.getElementById('epicuro').addEventListener('click', function(e){
	let name  = "Epicuro";
	let years = "Isla de Samos, actual Grecia, h. 342 a.C. - Atenas, h. 270 a.C.";
	let info  = "Epicuro fundó, como también hicieron Platón y Aristóteles, su propia escuela, El Jardín.\n"+
	" Este espacio, dentro de su propio hogar, fue el lugar escogido para desarrollar su filosofía, en las reuniones y " +
	" charlas que mantenía con sus seguidores y amigos. A diferencia de lo que ocurría con otros filósofos y sus escuelas, " +
	" estos amigos y seguidores eran de toda condición: hombres, mujeres, ricos, pobres, esclavos, etc.\n" +
	" Epicuro, como fundador de la escuela, pone como objetivo de la vida del ser humano es el placer, procurando, para conseguirlo," +
	" liberarse del miedo a los dioses, del miedo a la muerte y del miedo al destino, porque con esos miedos no se puede disfrutar de la vida." +
	" Epicuro no solo era un filósofo más de Grecia, él, al creer que para disfrutar la vida, debemos de liberarnos de todo miedo,"+
	" nos invita a liberarnos también de nuestra condición material, aceptando lo que nos pase con el día a día, y cuando la muerte venga" +
	" aceptarla como parte de la naturaleza. También es de los pocos que no hizo del objetivo humano una condición que los dioses nos " +
	"otorgaron, sino que es el placer creado por el mismo humano. Esto último puede ser criticable, al tener la intención de " +
	"minimizar todo otro sentido humano.";
	let image = "epicuro.jpeg";
	let school = "Escuela: Epicureísmo";
	printInformation(name,years,info,image,school);
});

document.getElementById('kant').addEventListener('click', function(e){
	let name = "Immanuel Kant";
	let years = "22 de abril de 1724-12 de febrero de 1804";
	let info = "En el año de 1785 Kant creó la obra llamada: 'Fundamentación de la metafísica de las costumbres'." +
  " En 1788 tituló: 'Crítica de la razón práctica'. \n" +
  " Estas dos obras estuvieron fuertemente influenciadas por los procesos que dieron lugar a la revolución Francesa en 1789. "+
	" Kant llama a 'imperativo categórico' a la ley fundamental de toda razón práctica; esta ley establece que: " +
	" 'OBRA DE TAL MANERA QUE LA MAXIMA DE TU VOLUNTAD PUEDA VALER SIEMPRE, AL MISMO TIEMPO, COMO PRINCIPIO DE UNA LEGISLACIÓN UNIVERSAL'." +
	" Kant decía que el humano a través de sus experiencias, puede entender su ambiente en el que se desarrolla; que la razón se da a " +
	"si misma una ley moral, dando las bases de nuestras creencias, pero también de dogmas. Si lo trasladamos a nuestra época, podemos "+
	"argumentar, por ejemplo, que personas en distintas redes sociales, a través de sus conexiones hechas por un algoritmo, experimenta " +
	"y entiende a otros, haciendo con esto una ley moral, y dentro de las burbujas de pensamiento, crear creencias y dogmas.";
	let image = "kant.jpeg";
	let school = "No tuvo escuela, filosofía: religiosidad";
	printInformation(name,years,info,image,school);
});

document.getElementById('hume').addEventListener('click', function(e){
	let name = "David Hume";
	let years = "1711–1776";
	let info = "Mantuvo la idea de que somos más llevados por nuestros sentimientos que por nuestra razón. \n" +
  " Él no hizo caso de exclamaciones comunes en la época sobre la ‘causalidad’ y " +
  " argumentó que nuestras concepciones de causa-efecto están basadas en nuestros propios hábitos de pensamiento. \n" +
  " Las pasiones (emociones) caen en la categoría de impresiones de reflexión (y no de sensación), es decir, \n" +
  " cómo nos vemos al espejo- cómo nos ven los otros-. Las acciones humanas son incitadas por las emociones, y nunca motivadas por la razón. \n" +
  " Las distinciones morales, son impresiones, causadas por humanos, determinadas por el sentimiento y la virtud " + 
  " Donde la virtud más importante para Hume es la justicia. \n" +
  " Creía en una educación de las pasiones, y al contrario de Kant, decía que el humano no es razonable primero antes de su sentimientos \n" + 
  " Lo que lo hace vigente hasta hoy, es la importancias de tener control de nuestros sentimientos, ser autocontemplativo "+
	" y no simplemente ir a lanzarlos a Twitter dejandonos llevar por ellos. \n" +
	" Esto también aplicando a la empatía, dando a entender que como animales políticos, debemos por esa misma razón, " + 
	"entender que otros humanos también no siempre actúan con su mejor raciocinio.";
  let image = "hume.jpeg";
  let school = "No tuvo escuela, pero fue importante para la Ilustración. Escepticismo filosófico.";
  let cita = "La razón es la esclava de la pasión";
  printInformation(name,years,info,image,school);
});

document.getElementById('tomas').addEventListener('click',function(){
	let name  = "Tomás de Aquino";
	let years = "1225 - 1274";
	let info  = "Tomas de Aquino fue uno de los exponentes más grandes de la ética cristiana medieval " +
	"influenciado por la filosofía aristotélica afirma que la felicidad es el bien y fin supremo del hombre " +
	"obtenido a través de la contemplación  y el conocimiento de Dios.";
	let image = "tomas.jpeg";
	let school = "Escuela Religiosa: Ética Cristiana Medieval";
	printInformation(name,years,info,image,school);
});

document.getElementById('nietzche').addEventListener('click',function(){
	let name = "Friedrich Nietzsche";
	let years = "1844 - 1900";
	let info = "El tema principal de la filosofía de nietzscheama es la vida . \n" +
	" La vida entendida como lo que hay, el mundo y el hombre como lo que son, un conglomerado orgánico " +
	"que tiende a preservar su existencia . Por lo tanto, la pregunta fundamental en su entorno a su pensamiento " +
	"será siempre orientas a saber si ¿La existencia, en general, tiene algún sentido? " +
	"Y si es asi, ¿cual es el sentido de las cosas de las cosas y que valor determina ese sentido?" +
	"La vida es el valor supremo, sobre el cual afirma Nietzche, todo lo demás debía subordinarsele. \n" +
	"A partir de ese momento, Nietszche empieza a llamarse a sí mismo inmoralista, en tanto que a toda ordenación " +
	"ética del mundo que imponga valores morales (incluidos los valores de la religión cristiana) que denigre o se sobreponga " +
	"a lo que él llama, el sentido de la tierra. \n" +
	"Nietzche hablaba sobre como el ser humano debía tener su propia moral, alejarse del llamado rebaño y que cada uno debe buscar " +
	"su propia libertad.\n" +
	"El sentido último de la vida que menciona Nietzsche,  no es la salvación o la justicia, sino la creación, " +
	"actividad por la cual el hombre afirma la vida misma.";
	let cita = "Pero las costumbre son justamente la forma tradicional de actuar y de valorar. " +
	"En asuntos donde no manda la tradición, no hay eticidad";
	let image = "nietzsche.jpg";
	let school = "Nihilismo";
	printInformation(name,years,info,image,school,cita);
});

document.getElementById('locke').addEventListener('click',function(){
	let name = "John Locke";
	let years = "1632-1704";
	let info = "Sus obras giran en torno a temas de políticas y teoría del conocimiento como: " +
	"Ensayo sobre el entendimiento humano (Essay about human understanding); " +
	"Carta sobre la tolerancia (A letter concerning toleration) y dos ensayos sobre el gobierno civil. " +
	"Locke fue considerado el primer político liberal dentro del parlamento inglés, " +
	"al afirmar que el estado natural del hombre es el de la igualdad. Realizó una importante contribución a " +
	"la teoría del contrato social; Sus contribuciones al republicanismo clásico y la teoría liberal se reflejan " +
	"en la Declaración de Independencia de los Estados Unidos y la Declaración de Derechos de 1689.";
	let cita = "Considerado el padre de liberalismo clásico";
	let image = "locke.png";
	let school = "";
	printInformation(name,years,info,image,school,cita);
});

document.getElementById('scheler').addEventListener('click',function(){
	let name = "Max Scheler";
	let years = "1874-1928";
	let info = "Sus estudios se basaron en la facultad de medicina de la Universidad de Múnich, " +
	"pero el año siguiente se trasladó a la Universidad de Berlín para estudiar filosofía y sociología. " +
	"Scheler se propuso a sentar la base de una ética filosófica a partir de la cual se pudieran constituir " +
	"una ética material de los valores. Su filosofía se basa en la fenomenología para estudiar los fenómenos " +
	"emocionales y sus respectivas intencionalidades (los valores) y a partir de ellos elaboró una muy sólida y " +
	"original fundamentación personalista de la ética: la realización de los valores se concretiza en modelos " +
	"humanos que invitan a su seguimiento. Dichos modelos serían el héroe para los valores vitales, " +
	"el genio para los valores espirituales y el santo para los valores religiosos. \n" +
	"Un aporte fundamental de Scheler ha sido la descripción de la enorme riqueza e importancia ética que posee " +
	"la vida emocional del hombre en la cual es primaria respecto de otra forma de saber.";
	let cita = "";
	let image = "scheler.jpeg";
	let school = "";
	printInformation(name,years,info,image,school,cita);
});

document.getElementById('zenon').addEventListener('click', function(){
	let name = "Zenón de Citio";
	let years = "332 a.C. - 260 a.C.";
  let info = "Inició las bases de esta importante corriente filosófica y dividió la filosofía en ética, física y lógica. \n" +
  " En ética sustentó que la naturaleza está regida por un orden natural inconmovible, razón por la cual es absurdo querer " +
  "resistirse al destino marcado por la providencia. \nEl sabio debe, pues, seguir su destino y no inmutarse ante " +
  "los acontecimientos que nos depara la existencia. En física, defendió un monismo materialista y, en lógica, " +
  "se interesó por las relaciones entre pensamiento y lenguaje.";
  let cita = "";
  let image = "zenon.jpeg";
  let school = "Fundador de la escuela filosófica estoica";
  printInformation(name,years,info,image,school,cita);
});