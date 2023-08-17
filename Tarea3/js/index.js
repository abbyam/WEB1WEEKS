// Ejercicio 1
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for (let i = 0; i < meses.length; i++) {
   alert(meses[i]);
}

// Ejercicio 2 Parte 1
// El paso 1 es hacer el array
var valores = [true,5, false, "hola", "adios", 2];
// Paso 2: Acá se va a aplicar un filtro, solo aquellos elementos cuyo valor y tipo es entero(number)pasaran el filtro
var valoresNumericos = valores.filter(valor => typeof valor === 'number');
// Paso 3: Una vez que tenemos todos los elementos tipo numerico MathMax que es una funcion de JS hara el calculo 
// de cual es el mayor
var valorMaximo = Math.max(...valoresNumericos);
// Paso 4:Habiendo calculado elemento mayor, lo buscamos en el array valores, si ese valor es igual en tipo y valor 
// al elemento mayor, ese valor encontrado sera impreso. 
var elementoMayor = valores.find(valor => valor === valorMaximo);
alert(elementoMayor);

// Ejercicio 2 Parte 2
var SeraUnoTrue = valores.some(function(valor) {
    return typeof valor === 'boolean' && valor === true;
});

alert(SeraUnoTrue);

//Profe esta parte del false no me funciona al 100
/*var SeraUnoTrue = valores.some(function(valor) {
    return typeof valor === 'boolean' && valor === true;
});
var resultado = SeraUnoTrue || false;
alert(resultado)*/

//Ejercicio 2 Parte 3
var valores = [true, 5, false, "hola", "adios", 2];
// Hace el mismo filtrado anterior
var valoresNumericos = valores.filter(function(valor) {
    return typeof valor === 'number';
});
// Acá obtiene los valores basandose en su posicion en el array
var numero1 = valoresNumericos[0];
var numero2 = valoresNumericos[1];
// Hace cada operación
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var modulo = numero1 % numero2;
// Muestra los resultados de cada operación
alert( suma);
alert(resta);
alert(multiplicacion);
alert(division);
alert(modulo);

//Ejercicio 3
function mostrarAlertas() {
    var numero1 = 5;
    var numero2 = 8;

    if (numero1 > numero2) {
        alert("numero1 no es mayor que numero2");
    }

    if (numero2 >= 0) {
        alert("numero2 es positivo");
    }

    if (numero1 < 0 && numero1 !== 0) {
        alert("numero1 es negativo y distinto de cero");
    }

    if (numero1 + 1 <= numero2) {
        alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
    }
   
}
mostrarAlertas();

//Ejercicio 4
    // Le damos a numero el valor de 5, que es de quien queremos obtener el factorial
    var numero = 5;
    // Factorial va a tomar el valor de 1, este numero se irá multiplando por lo que tenga i en ese momento
    // hasta llegar a 5
    var factorial = 1;
    for (var i = 1; i <= numero; i++) {
        factorial *= i;
    }
//Va a  mostrar el resultado del ciclo anterior en pantalla
    alert("El factorial de " + numero + " es: " + factorial);

// Ejercicio 5
// Acá llamamos el elemento del HTML por su id
const button = document.getElementById("boton");
// Con addEventListener le indicamos que cuando "escuche" un click ejecute la funcion, en este caso
// seria la de mostrarParOImpar
button.addEventListener("click", function() {
    mostrarParOImpar(8); //acá se pone el numero que queremos comprobar si es por o impar,se puede cambiar
});

function mostrarParOImpar(numero) {
    // acá la variable resultado va a almacenar el resultado de la comprobacion
    var resultado;
    if (numero % 2 === 0) {
        resultado = "par";
    } else {
        resultado = "impar";
    }
// el resultado ya sea par o impar se mostrará en pantalla
    alert( resultado);
}

//Ejercicio 5}
//Creo la funciona analizar caden
function analizarCadena(cadena) {
    // Aca le pongo los comprobodaores, si cadena esta compuesta de UpperCase o LowerCase
    if (cadena === cadena.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas.";
    } else if (cadena === cadena.toLowerCase()) {
        return "La cadena está formada solo por minúsculas.";
    } else {
        return "La cadena es una mezcla de mayúsculas y minúsculas.";
    }
}

var texto = "Ejemplo"; //La palabra a analizar, se puede cambiar 
var resultado = analizarCadena(texto);
//Muestra en la alerta el resultado de la funcion, recordar que, analizar cadena contiene
// lo que sea que tenga texto y su vez resultado es lo que contenga analizarCadena, por ello
// resultado es lo que se manda a llamar en el alert
alert(resultado);


