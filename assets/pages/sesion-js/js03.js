console.log("Sesión JS 03 Control de flujo");
console.log("No olvidemos el reto de Ed");

// -------------------- Declaración de bloque de código -------------------
/*
Sintaxis:
        {

        }
Las variables declaradas con let y const solo tendrán alcance (scope) dentro
del bloque o bloques anidádos.

Si la variable en el bloque, tiene el mismo nombre que una variable fuera del
bloque, se le da prioridad a la variable dentro del bloque.
*/

let firstname = "Sergio";
const lastname = "Torres";
var edad = 39;

// let y const no se pueden redeclarar
// let firstname = "Lalo";
// const lastname = "Garcia";
var edad = 25;


{
    let firstname = "Bryan";
    const lastname = "Palacios";
    var edad = 22;
    const colorFavorito = "Azul";
    var comidaFavorita = "Pozole";

    console.log(`${firstname} ${lastname}`); // Bryan Palacios
    console.log(edad); // 22
    console.log(colorFavorito); // Azul
    console.log(comidaFavorita); // Pozole
    {
        const colorFavorito = "Morado";
        console.log(colorFavorito); // Morado
        console.log(firstname); // Bryan
        {
            console.log(colorFavorito); // Morado
            console.log(firstname); // Bryan
        }
    }
}

console.log(`${firstname} ${lastname}`); // Sergio Torres
console.log(edad); // 22
// console.log(colorFavorito); // Error: colorFavorito is not defined 
console.log(comidaFavorita); // Pozole

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    }
    else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

const temperatura = 25;
let mensaje = "Temperatura ideal de ";

if (temperatura === 22){
    mensaje += `${temperatura} grados centigrados`;
}
else if ( temperatura >= 15 && temperatura <= 21 ){
    mensaje = `La temperatura de ${temperatura} grados centígrados es fría`;
}
else if ( temperatura >= 23 && temperatura <= 30 ){
    mensaje = `La temperatura de ${temperatura} grados centígrados es calurosa`;
}
else {
    mensaje = `La temperatura de ${temperatura} grados centigrados no es ideal :(`;
}

console.log(mensaje);

//----------------- Condicional Switch --------------------------
/*
La condicional switch evalua una expresión y se compara con el valor de cada instancia
'case' y se ejecutan las sentencias asociadas en 'case' hasta encontrar la sentencia
'break' o se finalicen todas la sentencias de la condición switch.

Sintaxis:
    switch (expresión) {
        case valor1:
            sentencia;
            break;
        case valor3:
            sentencia;
            break;
        case valor3:
            sentencia;
            break;
        cdefault:
            sentencia;
            break;
    }

*/

/**
 * Establece la velocidad de un ventilador
 * @param {number} velocidad del ventilador
 * @return {number} mensaje de la velocidad establecida
 */

const setVelocidadVentilador = (velocidad = 0) => {
    let mensaje;

    // la condición switch utiliza la comparación esctricta ( === )
    switch ( parseInt(velocidad) ){
        case 0:
            mensaje = "Apagado";
            break;
        case 1:
            mensaje = "Velocidad baja";
            break;
        case 2:
            mensaje = "Velocidad media";
            break;
        default:
            mensaje = "El nivel no existe";
            break;
    }
    return mensaje;
}

console.log(`El ventilador esta en: ${setVelocidadVentilador(1)}`); // Velocidad baja
console.log(`El ventilador esta en: ${setVelocidadVentilador(8)}`); // El nivel no existe
console.log(`El ventilador esta en: ${setVelocidadVentilador()}`); // Velocidad media
console.log(`El ventilador esta en: ${setVelocidadVentilador("2")}`); // El nivel no existe
