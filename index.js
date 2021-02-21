"use strict";

let printInformation=(name,years,info,image,school="")=>{
	document.querySelector('#name').innerText = name;
	document.querySelector('#years').innerText = years;
	document.querySelector('#info').innerText = info;
	document.querySelector('#image').src = "images/"+image;
	document.querySelector('#school').innerText = school;
}

document.getElementById('uno').addEventListener('click', function(e){
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

document.getElementById('dos').addEventListener('click', function(e){
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

document.getElementById('tres').addEventListener('click', function(e){
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

document.getElementById('cuatro').addEventListener('click', function(e){
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