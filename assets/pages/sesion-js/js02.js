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

*/