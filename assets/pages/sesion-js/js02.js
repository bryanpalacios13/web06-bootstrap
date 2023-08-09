console.log("Sesión JS02 USO DE FUNCIONES");

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
Función: Conjunto de instrucciones que realiza una tarea o calcula un valor
    Código que se puede reutilizar

-------------- Funciones declaradas ---------------
    (function declaration, function statement)
Una característica de las funciones declaradas es que tienen hoisting

sintaxis:
    function nombreFuncionCamelCase ( parámetros ){
            // cuerpo de la función
            instrucciones;
    }

hoisting: comportamiento en JavaScript que permite a la declaración de variables(var)
o funciones se eleven al comienzo de su ámbito, antes de que se ejecute el código.

*/

function multiplica (a,b) {
    return a * b;
}

console.log( multiplica(3,2) );

/*
----------------------Funciones expresadas---------------------
                    (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre )
Las funciones expresadas no tienen hoisting, porque no se carga en
memoria hasta que se utilice.

Sintaxis:
    const nombreVariable = function nombreFuncion ( parámetros ) {
        instrucciones;
    };
*/

/* console.log(`El resultado de 4 + 2 = ${sum(4,2)}`);  // En este caso la llamada de la función no funciona porque
                                                    no tiene hoisting y se debe de llamar despues de declararlo */

const sum = function sumatoria(a,b){
    return a + b;
}

console.log(`El resultado de 4 + 2 = ${sum(4,2)}`);

let saludo; // undefined
const localidad = "Tlaxcala";

if (localidad == "Buenos Aires"){
    saludo = function (name){ return `Holis ${name}` };
}
else{
    saludo = function (name){ return `Buenos días ${name}` };
}

console.log( saludo("Sergio") );
console.log( saludo("Bryan") );

/*
------------------Funciones autoinvocadas--------------------------
                (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas

sintaxis:
    ( function (parámetros) {} )( argumentos );

*/

(function( name ) {
    console.log(`Me llamo ${name} y me autoinvoco`);
})("ChatGPT");

/*
------------------ Funciones flecha --------------------------
                  (arrow functions)
Funciones similares a las funciones expresadas pero:
- No requiere la palabra function
- Si tiene solo una instrucción no requiere las llaves
- Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parámetros) => instrucción;
    
    const nombreVariable = (parámetros) => {
        instrucción;
        retur expresión;
    }

*/

/* const areaRectangulo = function (base, altura){
    return base * altura;
} */

const areaRectangulo = (base, altura) => base * altura;

console.log( `El área del rectangulo es: ${areaRectangulo(3, 9)} m2.` );

/*
------------------ Parámetros por defecto --------------------------
                    (default parameters)
Incializa un parámetro de la función, si no se envía el argumento cuando se invoca
*/

// Comentario de función:
/**
 * Calcula el área de un triángulo
 * @param {number} base del triángulo
 * @param {number} altura del triángulo 
 * @returns {number} base * altura / 2
 */

const areaTriangulo = (base = 1, altura = 1) => base * altura / 2 ;

console.log( `El área del triangulo es: ${areaTriangulo(8,5)}` ); // 20
console.log( `El área del triangulo es: ${areaTriangulo()}` ); // 0.5
console.log( `El área del triangulo es: ${areaTriangulo(10)}` ); // 5
console.log( (1000).toString() ); // conversión base 10 -> 1000
console.log( (1000).toString(2) ); // conversión base 2 -> 1111101000
console.log( (1000).toString(16) ); // conversión base 16 -> 3e8

/*
------------------ Parámetros rest --------------------------
                  (rest parameters)
Permite representar una serie de valores indefinidos en los argumentos
Esta serie de valores se presentan como un array.
Rest paremeters debe estar al final de la lista de parámetros.

sintaxis:
    ...nombreParametros

*/

const sumatoriaMultiplesNumeros = ( a = 0, b = 0, ...rest) =>{
    let suma = a + b;
    
    for(let i = 0; i < rest.length; i++){
        suma += rest[i];
    }

    return suma;
}

console.log( `Sumatoria de múltiples números: ${sumatoriaMultiplesNumeros(2,5)}` ); // 7
console.log( `Sumatoria de múltiples números: ${sumatoriaMultiplesNumeros(2, 5, 10, 9)}` ); // 26
console.log( `Sumatoria de múltiples números: ${sumatoriaMultiplesNumeros(2, 5, 10, 9, 20, 10)}` ); // 56
console.log( `Sumatoria de múltiples números: ${sumatoriaMultiplesNumeros(2)}` ); // NaN

/*
------------------ Funciones de Callback --------------------
Es una función (definida, expresada, arrow, anónima) que se pasa a otra función como argumento
Se pasa en el argumento como referencia ( sin paresentis ).
*/

function saludoPokemon(){
    return "yo te elijo";
}

function saludoSquirtle(nombre){
    return `Vamo' a calmarnos ${nombre}`;
}

function eligiendoPokebola( saludo, nombre ){
    console.log("==============================");
    console.log("Hola, estas en la liga Pokemon");
    console.log("Elige a tu mejor Pokemon");
    console.log( saludo(nombre) );
}

// eligiendoPokebola(); // saludo is not a function
// eligiendoPokebola( saludoPokemon() ); // saludo is not a fuction porque se invoca primero 
            //             la funcion saludoPokemon, quedando eligiendoPokebola("yo te elijo") );
eligiendoPokebola( saludoPokemon ); // simplemente usando el nombre sin los parentesis.
eligiendoPokebola( saludoSquirtle, "leonardo" );
eligiendoPokebola( (nombre) => `${nombre} elejiste a Cubone`, "Bryan");

/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.

 student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
student2Courses = ["Geography", "Spanish", "Programming", "Music"];

  salida: "Cursos en común: Programming, Music"
*/

const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];

function cursosComun(student1Courses, student2Courses){
    const commonCourses = []; // Guardar los cursos en comun
    for (let i = 0; i < student1Courses.length; i++) {
        for (let j = 0; j < student2Courses.length; j++) {
            console.log(`${student1Courses[i]} === ${student2Courses[j]}: ${student1Courses[i] === student2Courses[j]}`)
            if(student1Courses[i] === student2Courses[j]){
                commonCourses.push(student2Courses[j]);
            }            
        }
    }
    return `Cursos en común: ${commonCourses}`;
}

console.log(cursosComun( student1Courses, student2Courses));

// ------------------------- Resolviendo con filter -------------------------

function getCommonCoursesWithFilter( student1, student2 ){
    return student1.filter( course => student2.includes(course) );
}

console.log(`cursos en comun usando filter: ${getCommonCoursesWithFilter( student1Courses, student2Courses )}`);


// -------------------- Resolviendo con filter e include por partes --------------------

console.log("###########################################################################################")

function includeCourse( course, index, array ){
    console.log(`Elemento: ${course}, indice: ${index}, arreglo completo: ${array}, include ${student2Courses.includes(course)}`);
    return student2Courses.includes(course); // evaluación
}

function getCoursesWithFilter( student1, student2 ){
    const commonCourses = student1.filter(includeCourse);
    return commonCourses

}

console.log(`cursos en comunxpartes: ${getCoursesWithFilter( student1Courses, student2Courses )}`);


/* ----------------- Contar la cantidad de caracteres de una frase -------------------
"peso pluma pica papas con un pico y una pala con un pico pica papas peso pluma"

Mostrar la cantidad de letras 'p'
Usar dunciones flecha
*/

let pesoPluma = "Peso Pluma pica papas con un pico y una pala con un pico pica papas Peso Pluma";

const counterCharacter = (phrase, character) => phrase.toLowerCase().split(character).length - 1;
console.log( `Cantidad de letras "p": ${counterCharacter(pesoPluma, "p")}` );

// ----------------------- Recursividad ----------------------------
/*
Una función recursiva es una función que se llama a si misma durante su ejecución.

Se utilizan en algoritmos y spluciones que se basan en la división y conquista 
como cálculos matemáticos, recorrido de estructura de datos y algoritmos de busqueda
y ordenamiento.

Patrón:
    function nombreFuncionRecursiva ( parametro ){
        if (condicionParo){
            return expresion;
        }
        else{
            // llamada recursiva
            nombreFuncionRecursiva( nuevoParametro );
        }
    }
*/

// -------------------- Calcular del factorial de un número (ciclo for) ------------------------

function factorialCicloFor(numero){
    let factorial = 1;
    let i;
    for(i = numero; i > 0; i--){
        factorial = factorial * i;
    }
    return `El factorial del numero ${numero} es: ${factorial}`;
}

// -------------- Cálculo del facorial de un número usando recursividad -----------------

console.log(factorialCicloFor(5)); // 1*2*3*4*5 = 120

function factorialRecursiva(numero){
    if(numero <= 0) return 1;
    else {
        console.log(`${numero}*${numero-1}`);
        return numero * factorialRecursiva(numero - 1);
    }
}

console.log(factorialRecursiva(5)); // 1*2*3*4*5 = 120

// -------------- Saludar con recursividad -----------------
/*
Generar una función recursiva que muestre en consola un Saludo
donde se indique el número de saludo deseado

ej: saludar 10 veces

    Saludo 1
    Saludo 2
    ...
    Saludo 9
    Saludo 10

*/

function saludoRecursivo( numeroSaludo ) {
    if(numeroSaludo > 1){
        saludoRecursivo( numeroSaludo - 1);
    }
    console.log(`Saludo ${numeroSaludo}`);
}


saludoRecursivo(10);

let recursivoSaludo = ( noSaludo ) => { if(noSaludo > 1) recursivoSaludo(noSaludo -1) };
console.log(`Saludo no. ${recursivoSaludo(10)}`);