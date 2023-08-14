validar(){
    const nombre= document.getElementById("nombre").value;
    if(!nombre || nombre.length==0){
        alert("Falta nombre");
        document.getElementById("nombre").focus();
        return false;
    }
    return true;
}
var global=0;

 alert("Hola");

function accion(){
alert("Has presionado el boton");
 }


function enviarMensaje(mensaje, numero){
alert(`El primer parametro es: ${mensaje} y el segundo es: ${numero}`);
}

 function enviarMensaje(){
 const valorInput= document.getElementById("valor").value;
alert(valorInput);
}

function enviarMensaje(){
const valor= document.getElementById("5").value;
 alert(valor);
global=valor;
alert(global);
alert(partirMensaje());
document.getElementById("5").value=20;
document.getElementById("valor").value=25; // le asigna el valor que queremos a la variable ya que accedimos desde el documento
}

function cambiarColor(){
//     // para acceder al documento se accede por medio de document
const titulo = document.getElementById("titulo");
titulo.style.color="white";
titulo.style.backgroundColor="blue";
alert(global);
}

function cambiarColor1(){
//     // para acceder al documento se accede por medio de document
const titulo2 = document.querySelector(".titulo2");
 titulo2.style.color="yellow";
 }

function cambiarColor2(){
//     // para acceder al documento se accede por medio de document
 const titulo2 = document.getElementsByClassName(".titulo");
 titulo2.style.color="white";
titulo2.style.backgroundColor="blue";
 }

function partirMensaje(){

return "Mensaje Partido"
    
}