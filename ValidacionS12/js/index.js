
function validar(){
    const nombre= document.getElementById("nombre").value;
    if(!nombre || nombre.length==0){
        alert("Falta Nombre");
        document.getElementsByName("nombre").focus();
        return false;
    }
 
    const telefono = document.getElementById("telefono").value;
    if (!(/^\d{9}$/.test(telefono))) {
        alert("El número de teléfono debe tener 9 dígitos.");
        document.getElementById("telefono").focus();
        return false;
    }

    valor = document.getElementById("email").value; 
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) { 
    return false;
}

     const apellido1= document.getElementById("ape1").value;
    if(!apellido1 || apellido1.length==0){
        alert("Falta el primer apellido");
        document.getElementsByName("ape1").focus();
        return false;
    }

    const apellido2= document.getElementById("ape2").value;
    if(!apellido2 || apellido2.length==0){
        alert("Falta el segundo apellido");
        document.getElementsByName("ape2").focus();
        return false;
    }
    
    // Aaspectos importantes. parseInt lo usamos para que los valores ingresados sean vistos como numeros enteros, pues 
    // el sistema los podria leer como una cadena de caracteres 
    var ano = parseInt(document.getElementById("ano").value);
    // ese -1 es por que Java cuenta los meses de 0-11, si hay 12 meses, debe de restar 1 para que 
    // aplique a la lógica de Java 
    var mes = parseInt(document.getElementById("mes").value) - 1;
    var dia = parseInt(document.getElementById("dia").value);

    // valor va a tomar el valor que tenga new Date que se compone de año, mes y dia como elementos
    var valor = new Date(ano, mes, dia);

    // isNaN significa is Not a Number, es decir esto lo que hace es verificar si lo ingresado es un numero o es equivalente 
   // a un numero, por ejemplo: 
   /*isNaN(123);      // Devuelve false, ya que 123 es un número.
isNaN("abc");    // Devuelve true, ya que "abc" no es un número.
isNaN("123");    // Devuelve false, ya que "123" es una cadena numérica y se convierte a número.
isNaN(true);     // Devuelve false, ya que true se convierte a 1 que es un número.
isNaN(false);    // Devuelve false, ya que false se convierte a 0 que es un número.
isNaN(undefined);// Devuelve true, ya que undefined no se puede convertir a un número.
isNaN(null);     // Devuelve false, ya que null se convierte a 0 que es un número.*/

if (isNaN(valor) || valor.getMonth() !== mes || valor.getDate() !== dia || valor.getFullYear() !== ano) {
alert("La fecha ingresada no es válida.");
return false;
}

elemento = document.getElementById("caja"); 
if( !elemento.checked ) {
 alert("Por favor revise la casilla"); 
 return false; 
} 

 else true;

}