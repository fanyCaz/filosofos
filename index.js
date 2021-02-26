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
  " La sentencia aristotélica afirma que: TODOS LOS HOMBRES TIENDEN ENCONTRAR SU FELICIDAD EN LA NATURALEZA DEL SABER. " +
  " Dentro del sistema ético aristotélico, la justicia es la virtud más importante, esto debido a que representa el respeto a la Ley del Estado, " +
  " y, al mismo tiempo representa la repartición de bienes, beneficios y ventajas.";
  let image = "aristoteles.png";
  let school = "Escuela: La Academia";
	printInformation(name, years, info, image,school);
});

document.getElementById('epicuro').addEventListener('click', function(e){
	let name  = "Epicuro";
	let years = "Isla de Samos, actual Grecia, h. 342 a.C.-Atenas, h. 270 a.C.";
	let info  = "Epicuro fundó, como también hicieron Platón y Aristóteles, su propia escuela, El Jardín.\n"+
	" Este espacio, dentro de su propio hogar, fue el lugar escogido para desarrollar su filosofía, en las reuniones y " +
	" charlas que mantenía con sus seguidores y amigos. A diferencia de lo que ocurría con otros filósofos y sus escuelas, " +
	" estos amigos y seguidores eran de toda condición: hombres, mujeres, ricos, pobres, esclavos, etc.\n" +
	" Epicuro, como fundador de la escuela, pone como objetivo de la vida del ser humano el placer, procurando, para conseguirlo," +
	" liberarse del miedo a los dioses, del miedo a la muerte y del miedo al destino, porque con esos miedos no se puede disfrutar de la vida.";
	let image = "epicuro.jpeg";
	let school = "Escuela: Epicureísmo";
	printInformation(name,years,info,image,school);
});

document.getElementById('kant').addEventListener('click', function(e){
	let name = "Immanuel Kant";
	let years = "22 de abril de 1724-12 de febrero de 1804";
	let info = "En el año de 1785 Kant creó la obra llamada: “Fundamentación de la metafísica de las costumbres” " +
  " En 1788 tituló: “Crítica de la razón práctica”. \n" +
  " Estas dos obras estuvieron fuertemente influenciadas por los procesos que dieron lugar a la revolución Francesa en 1789. "+
	" Kant llama a “imperativo categórico” a la ley fundamental de toda razón práctica; esta ley establece que: " +
	" “OBRA DE TAL MANERA QUE LA MAXIMA DE TU VOLUNTAD PUEDA VALER SIEMPRE, AL MISMO TIEMPO, COMO PRINCIPIO DE UNA LEGISLACIÓN UNIVERSAL”.";
	let image = "kant.jpeg";
	let school = "No tuvo escuela, filosofía: religiosidad";
	printInformation(name,years,info,image,school);
});

document.getElementById('hume').addEventListener('click', function(e){
	let name = "David Hume";
	let years = "1711–1776";
	let info = "Mantuvo la idea de que somos más llevados por nuestros sentimientos que por nuestra razón.” " +
	" La razón es la esclava de la pasión”. \n" +
	" Creía en una educación de las pasiones, lo que lo hace vigente hasta hoy, al no tener control de nuestros sentimientos, "+
	" y simplemente ir a lanzarlos a Twitter. \n" +
  " Él no hizo caso de exclamaciones comunes en la época sobre la ‘causalidad’ y " +
  " argumentó que nuestras concepciones de causa-efecto están basadas en nuestros propios hábitos de pensamiento. \n" +
  " Las pasiones (emociones) caen en la categoría de impresiones de reflexión (y no de sensación), es decir, \n" +
  " cómo nos vemos al espejo- cómo nos ven los otros-. Las acciones humanas son incitadas por las emociones, y nunca motivadas por la razón. \n" +
  " Las distinciones morales, sonn impresiones, causadas por huumanos, determinadas por el sentimiento y la virtud " + 
  " Donde la virtud más importante para Hume es la justicia.";
  let image = "hume.jpeg";
  let school = "No tuvo escuela, pero fue importante para la Ilustración";
  printInformation(name,years,info,image,school);
});

document.getElementById('tomas').addEventListener('click',function(){
	let name  = "Tomás de Aquino";
	let years = "1225 - 1274";
	let info  = "Tomas de Aquino fue uno de los exponentes más grandes de la ética cristiana medieval " +
	"influenciado por la filosofía aristotélica afirma que la felicidad es el bien y fin supremo del hombre " +
	"obtenido a través de la contemplación  y el conocimiento de Dios.";
	let image = "";
	let school = "Escuela Religiosa: Ética Cristiana Medieval";
	printInformation(name,years,info,image,school);
});

document.getElementById('nietzche').addEventListener('click',function(){
	let name = "Friedrich Nietzsche";
	let years = "";
	let info = "El tema principal de la filosofía de nietzscheama es la vida . \n" +
	" La vida entendida como lo que hay, el mundo y el hombre como lo que son, un conglomerado orgánico " +
	"que tiende a preservar su existencia . Por lo tanto, la pregunta fundamental en su entorno a su pensamiento " +
	"será siempre orientas a saber si ¿La existencia, en general, tiene algún sentido? " +
	"Y si es asi, ¿cual es el sentido de las cosas de las cosas y que valor determina ese sentido?" +
	"La vida es el valor supremo, sobre el cual afirma Nietzche, todo lo demás debía subordinarsele. \n" +
	"A partir de ese momento, Nietszche empieza a llamarse a sí mismo inmoralista, en tanto que a toda ordenación " +
	"ética del mundo que imponga valores morales (incluidos los valores de la religión cristiana) que denigre o se sobreponga " +
	"a lo que él llama, el sentido de la tierra. ";
	let cita = "Pero las costumbre son justamente la forma tradicional de actuar y de valorar. " +
	"En asuntos donde no manda la tradición, no hay eticidad";
	let image = "nietzsche.jpg";
	let school = "";
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