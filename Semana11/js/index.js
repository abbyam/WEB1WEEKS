alert('Hola');
//Este es un comentario(Control+tecla a la par del enter)


// Variables: string number(abarca float,int...) boolean(1-0,TRUE-FALSE...) [](Array,doble es matriz) date 
// Tipos de Objetos: 

// De esta forma declaro una viariable en JavaScript
// var nombre='Pedro';
// Opcion 2
// let apellido='Perez';
// La diferencia entre declarar con var o let es el scope,en este caso el ambito en el que vive cada variable
// var declara la variable de forma global(se accede desde cualquier parte), y let de forma local dentro de su ambito(se accede solo dento de su ambito
// No es una buena practica usar variables globales, por que siempre estaran gastando espacio en memeoria 

/*if(true){
       var nombre='Pedro';
       let apellido='Perez';
 }*/
// En este caso ambos estan declarados dentro del if, pero uno es global y el otro local, al ejecutar 
// el HTML, saldra el pop-up solo de nombre.

//  alert(nombre);
//  alert(apellido);
// Por medio de este metodo es el pop-up

let bandera=true;
let edad=15;
let precio=3.35;

let lista=[];

let fecha= new Date().getDate();
alert(fecha);

// Eje de if anidado
// Java Script compara datos, eso se llama coercion, o sea puede comparar tipos de datos, compara valor con valor
// Eje string vs numerico
if(5!==5){
    alert('siiiiiiii');
}
else{
    alert('noooooo');
}

// Una constante es un valor que no puede ser modificado, eje en este caso no podremos cambiar el valor que le estamos asignando a PI
//  const PI=3.14;
// PI=3222;
// Este segundo valor ya no se aplicaria 

const Persona={

    cedula:'111111111',
    nombre:'Pedro',
    apellido1:'Perez',
    apellido2:'Rojas',
    edad:15

};
// La coma se usa para separar atributos por eso no es necesario en el ultimo

//String Template 
alert(`El nombre de la persona es ${Persona.nombre} y su cedula es ${Persona.cedula}`)

// En este caso en teoria le pregunto si el objeto persona tiene edad, en este caso em debe de devolevr True en la pagina
// por que si tiene ese atributo
let tiene= Persona.hasOwnProperty('edad');
alert(tiene)

// Esta es una variable a la que nunca se le ha definido un valor, por lo tanto no es True ni False, es indefinida
let tienePerro=true;
// Este true hace que si tenga perro
alert(tienePerro);

if(tienePerro){
    alert('Tiene Perro');
}
else{
    alert('No tiene Perro');
}

// A las Listas no se les define la cantidad de campos por que son dinamicas
let listaColores=['Rojo','Verde','Azul'];
alert(listaColores[1]);
// Imprimo aca la posicion 1, el verde, las listas empiezan en cero

alert(listaColores.length)
// Con esto me da la cantidad de campos del arreglo


// For
for (let i = 0; i < listaColores.length; i++) {
    console.log(listaColores[i]);
}

// ForEach
console.log('foreach');
listaColores.forEach((valor, index) => {
    console.log(`El valor es ${valor} y el indice es ${index}`);
});

// Asi creo un array de objetos
const listaPersonas=[{
    id:'333',
    nombre:'Ana',
    apellido:'Juarez',
    edad:33
},
{
    id:'444',
    nombre:'Luis',
    apellido:'Perez',
    edad:53
},

{
    id:'555',
    nombre:'Marcos',
    apellido:'Fernandez',
    edad:6
}
]

const resultado = listaPersonas
  .map((person, index) => {
    let nombre = `Mi nombre es ${person.nombre} ${person.apellido}`;
    return {
      id: index,
      cedula: person.id,
      nombre: nombre,
      edad: person.edad
    };
  })
  .filter(x => x.edad > 18);

  console.log(resultado)

/*function saludar2(){
    alert(prueba);
}

function saludar(){
    var prueba=5;
}

saludar2();
saludar();*/