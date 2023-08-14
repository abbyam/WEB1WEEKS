alert('Hola');

const Pinguinos = [
    {
        name: "Gunter", 
        origin: "Adventure Time", 
        canFly: false, 
        sayHello: function () { 
            console.log("QUACK!!!"); 
        },
    },
    {
        name: "Ramón", 
        origin: "Happy Feet", 
        canFly: true, 
        sayHello: function () { 
            console.log("Estoy encantado de conocerle."); 
        },
    },
    {
        name: "Fred", 
        origin: "Sitting Ducks", 
        canFly: false, 
        sayHello: function () { 
            console.log("Hi there!"); 
        } 
    }
];


// Por medio de este cliclo For hace recorrido e imprime el nombre de cada pinguino basandose en su posicion en el arreglo 
for (let i = 0; i < Pinguinos.length; i++) {
    console.log(Pinguinos[i].name);
}

// Con este código muestra la longitud del arreglo
alert(Pinguinos.length)

// Paso 1, agregar la propiedad Number Of Feet al arreglo pinguinos, Math Ramdon es quien trabaja asignando los numeros de 0 a 1 de forma aleatoria
// pero se multiplica por 5 para llevarlos al numero deseado, el 1 que suma y el Math Floor trabajan de la mano para redondear el numero
// y dar uno entero
for (let i = 0; i < Pinguinos.length; i++) {
    Pinguinos[i].numberOfFeet = Math.floor(Math.random() * 5) + 1;
}

// map nos permite usar los mismos elementos de arreglo y proporcionarles una funcion nueva, en este caso HFeet
const HFeet = Pinguinos.map(pinguino => pinguino.numberOfFeet);

// Imprimo el resultado en consola, el cual sera un numero random en lam posicion i, ese numero seria el NumberOfFeet de cada pinguino, es decir
// el resultado de HFeet
console.log(HFeet);

// En este caso canFly es una propiedad que esta setada a True o False en el mismo arreglo donde se encuentra cada pinguino, este ciclo lo que hace 
// es recorrer cada posicion del arreglo y por medio de if verifica si el pinguino puede o no volar, dependiendo del valor que este objeto tiene 
// asignado, en el arreglo el unico que tiene seteado a True esa propidad es Ramon, por ellos solo el mas la frase se imprimiran en consola
for (let i = 0; i < Pinguinos.length; i++) {
    if (Pinguinos[i].canFly) {
        console.log(`${Pinguinos[i].name} Sabe volar`);
    }
}

// Para imprimir el nombre de aquello pinguinos que tienen mas de dos pies, usamos el mismo fragmento de codigo que le asigna de forma a aleatoria
// X cantidad de pies a cada pinguino
for (let i = 0; i < Pinguinos.length; i++) {
    Pinguinos[i].numberOfFeet = Math.floor(Math.random() * 5) + 1;

    // Luego de ellos en el mismo ciclo usamos una sentencia condicional que recorre lo que tiene como resultado NumberofFeet en cada posicion
    // y si ese resultado es mayor a dos, imprime en consola el nombre del pinguino(basandonse en su posicion)que tiene mas de 2 pies
    if (Pinguinos[i].numberOfFeet > 2) {
        console.log(Pinguinos[i].name);
    }
}

// En este caso teng un ciclo for qye recorre la lista, a la lista Pinguinos en la posicion X se les agrego la propiedad FavoriteFoods
// que es una matriz de tres campos que contiene las tres comidas favoritas de cada pinguino
for (let i = 0; i < Pinguinos.length; i++) {
    Pinguinos[i].favoriteFoods = ["Cereal", "Chocolate", "Dedos de Pescado"];
}

// Recorro la lista de FavoriteFoods y agrego la propiedad secondfavoritefood que me indica que si la lista Pinguinos en la posicion 1 es iguual a 1
// debo mostrar en consola el mensaje que se indica segun la posicion de cada pinguino y la comida favorita en la posicion 1 de secondfavoritefood
for (let i = 0; i < Pinguinos.length; i++) {
    const secondFavoriteFood = Pinguinos[i].favoriteFoods[1];
    console.log(`La segunda comida favorita de ${Pinguinos[i].name} es: ${secondFavoriteFood}`);
}
 

// Se debian usar el mismo fragmento de codigo anterior, pero no entendi como hacerlo :(
for (let i = 0; i < Pinguinos.length; i++) {
    Pinguinos[i].favoriteFoods[1] = "piñas"; // Cambiar el valor del tercer elemento a "piñas"
    console.log(`La tercera comida favorita de ${Pinguinos[i].name} ahora es: ${Pinguinos[i].favoriteFoods[1]}`);
}

// Para poder mostrar las comida favorita de cada pinguino, se hace uso del mismo fragmento de ciclo for creado anteriormente
// dentro de ese mismo ciclo le indicamos que imprima que para el pinguino en la posicion 1 sus comidas favoritas 0 1 2 son las X Y Z
// Se pone Pinguinos.[1].favoritefoods por que favoritefoods esta dentro de cada pinguino que pertenece al arreglo Pinguinos
for (let i = 0; i < Pinguinos.length; i++) {
    Pinguinos[i].favoriteFoods = ["Cereal", "Chocolate", "Dedos de Pescado"];
    console.log(`Las comidas favoritas de ${Pinguinos[i].name} son ${Pinguinos[i].favoriteFoods[0]}, ${Pinguinos[i].favoriteFoods[1]}, ${Pinguinos[i].favoriteFoods[2]}`);
}
