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

if (temperatura === 22) {
    mensaje += `${temperatura} grados centigrados`;
}
else if (temperatura >= 15 && temperatura <= 21) {
    mensaje = `La temperatura de ${temperatura} grados centígrados es fría`;
}
else if (temperatura >= 23 && temperatura <= 30) {
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
    switch (parseInt(velocidad)) {
        case 0:
            mensaje = "Apagado"; break;
        case 1:
            mensaje = "Velocidad baja"; break;
        case 2:
            mensaje = "Velocidad media"; break;
        default:
            mensaje = "El nivel no existe"; break;
    }
    return mensaje;
}
console.log(`El ventilador esta en: ${setVelocidadVentilador(1)}`); // Velocidad baja
console.log(`El ventilador esta en: ${setVelocidadVentilador(8)}`); // El nivel no existe
console.log(`El ventilador esta en: ${setVelocidadVentilador(0)}`); // Apagado
console.log(`El ventilador esta en: ${setVelocidadVentilador("2")}`); // Velocidad media
// console.log(`El ventilador esta en: ${setVelocidadVentilador(prompt("Velocidad", 1))}`); // Velocidad baja

// ------------------ Ejercicio Estaciones del año ------------------
/*
Preguntar el número de mes (promt o DOM) del 1 al 12
Desplegar de acuerdi al mes un Alert (mostrarlo en el DOM) la estación del año

mes 12, 1, 2 = invierno
mes 3, 4, 5 = primavera
mes 6, 7, 8 = verano
mes 9, 10, 11 = otoño

Relizar una versión con if-else-elseif y otra con switch
*/

/* ##############################################################################################
function estacionesIf (numero) {
    let estacion;
    let mes;
    if ( numero == 12 || numero == 1 || numero == 2){
        if (numero == 1) mes = "Enero";
        if (numero == 2) mes = "Febrero";
        else mes = "Diciembre";
        estacion = "invierno";
    }
    else if ( numero == 3 || numero == 4 || numero == 5){
        if (numero == 3) mes = "Marzo";
        if (numero == 4) mes = "Abril";
        else mes = "Mayo";
        estacion = "primavera";
    }
    else if ( numero == 6 || numero == 7 || numero == 8){
        if (numero == 1) mes = "Junio";
        if (numero == 2) mes = "Julio";
        else mes = "Agosto";
        estacion = "verano";
    }
    else if ( numero == 9 || numero == 10 || numero == 11){
        if (numero == 1) mes = "Semptiembre";
        if (numero == 2) mes = "Octubre";
        else mes = "Noviembre";
        estacion = "otoño";
    }
    else{
        mes = "Numero Invalido";
        estacion = "Numero sin estación :(";
    }

    return alert(`El mes ${mes} corresponde a: ${estacion}`);
}

estacionesIf(prompt("Función If \nQué mes (00) quieres:",0));

function estacionesSwitch (numero) {
    let estacion;
    let mes;

    switch (parseInt(numero)){
        case 1:
        case 2:
        case 12:
            estacion = "Invierno"; break;
        case 3:
        case 4:
        case 5:
            estacion = "Primavera"; break;
        case 6:
        case 7:
        case 8:
            estacion = "Verano"; break;
        case 9:
        case 10:
        case 11:
            estacion = "Otoño"; break;
        default: estacion = "Numero sin estación :(";
    }

    switch (parseInt(numero)) {
        case 1: mes = "Enero"; break;
        case 2: mes = "Febrero"; break;
        case 3: mes = "Marzo"; break;
        case 4: mes = "Abril"; break;
        case 5: mes = "Mayo"; break;
        case 6: mes = "Junio"; break;
        case 7: mes = "Julio"; break;
        case 8: mes = "Agosto"; break;
        case 9: mes = "Septiembre"; break;
        case 10: mes = "Octubre"; break;
        case 11: mes = "Noviembre"; break;
        case 12: mes = "Diciembre"; break;
        default: mes = "Número Invalido"; break;
    }
    return alert(`EL mes ${mes} corresponde a: ${estacion}`);
}

estacionesSwitch(prompt("Función Switch \nQué mes (00) quieres:",0)); 

#####################################################################################################*/

// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/
const pagoTarjetaCredito = true

/*
let msj;
if(pagoTarjetaCredito) msj = "A realizado el pago de TC";
else msj = "No ha realizado el pago de TC;
*/

const msj = pagoTarjetaCredito === 0 ? "A realizado el pago de TC" : "No ha realizado el pago de TC"

console.log(`El usuario ${msj}`);

// --------------- mini ejercicio  ----------------------------
/*
 Preguntar con prompt la edad del usuario: 20
 Si es >= 18 indicar en la consola "El usuario es mayor de edad";
 Si no cumple con la condición "El usuario no es mayor de edad".
*/

// let age = parseInt(prompt("Cual es tu edad:"));
// const mayorEdad = age >= 18 ? "El usuario es mayor de edad" : "El usuario no es mayor de edad";
// console.log(mayorEdad);
// alert(age >= 18 ? "El usuario es mayor de edad" : "El usuario no es mayor de edad");

// ---------Cálculo de factorial de un número usando recursividad y operador ternario---------

/* function factorialConRecursividad(numero) {
    if (numero <= 0) {
        return 1;
    } else {
        console.log(`${ numero } * ${ numero- 1}`);
        return numero * factorialConRecursividad(numero - 1);
    }
}

console.log(`El factorial recursivo de 5 es: ${factorialConRecursividad(5)}`); */

function factorialRecursividadTernario(numero) {
    return numero <= 0 ? 1 : numero * factorialRecursividadTernario(numero - 1);
}

console.log(`El factorial de 5 es: ${factorialRecursividadTernario(5)}`);