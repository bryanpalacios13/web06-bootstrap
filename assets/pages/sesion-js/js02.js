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


