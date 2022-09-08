// console.log("Hello, world!")
// con querySelector se puede elegir tanto los tags como las clases (con punto al inicio) y id (con hashtag al inicio)
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const plist = document.querySelectorAll('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
// tambien hay funciones como getElementById o getElementsByClassName
const input1 = document.getElementById('calculo');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector("button");
const h2 = document.querySelector("h2")



// si se imprime dentro de {}, se vuelve objecto y en el navegador se puede ver las propiedades de cada cosa
console.log({
    h1,
    p,
    parrafito,
    pid,
    input1,
    input2
})

// Con innerHTML puedes editar el texto interno e incluso agregar html y la pagina lo va a entender. Pero hay que
// tener cuidado pq con esta etiqueta los hackers pueden hacer algo. Mejor usar innerText. Con eso solo es texto
h1.innerHTML = "<strong>Basic</strong> DOM Manipulation";
// con getAttribute se pude obtener la info del atributo del tag del tag de HTML. 
console.log(input1.getAttribute("placeholder"));
// si se quiere cambiar se usa setAttibute. Para las clases (class) hay cosas especiales. El metodo se llama classList
input1.setAttribute("placeholder", "Write first number here");
// si se quiere cambiar se usa setAttibute. Para las clases (class) hay cosas especiales. El metodo se llama classList
input2.setAttribute("placeholder", "Write second number here");
// esto es el metodo que mencionó de la manera especial para modificar una clase. Mirar en navegador
input1.classList.add("clase_agregada_por_metodo");
// para eliminar
input1.classList.remove("clase_agregada_por_metodo");
// insertando un valor para el input de otra manera (sin usar set o getAttribute). Value no es una caracteristica
// de todos los tag. Mirar si la tiene, si no, usar innerText o innerHTML
input1.value = 31;

// para crear un elemento o tag desde cero se usa esto. Esto agrega etiquetas de cierre si es necesario
const img = document.createElement("img");
// y tiene los mismos atributos como los vimos antes
img.setAttribute("src", 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif')
// Si le quisieramos quitar el texto de pid
pid.innerText="";
// vamos a usar pid para meter la imagen dentro de el. Se pudo haber usado appendChild con el mismo resultado
pid.appendChild(img);

function btnOnClick(){
    resultBtn = parseFloat(input1.value) + parseFloat(input2.value);
    h2.append(resultBtn);

}