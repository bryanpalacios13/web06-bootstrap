console.log("Sesiones JS 07 Asincronía");

// ----------------------- Progrmación sincrónica -----------------------

const primerPaso = () =>{
    console.log("01 - Inicio del programa");
    
}
const segundoPaso = () =>{
    console.log("02 - Desarrollo del programa");
}
const tercerPaso = () =>{
    console.log("03 - Fin del programa");
}

primerPaso();
segundoPaso();
tercerPaso();

// ---------------------------------- Programación Asíncrona ------------------------------------
/*
    setTimeout()

    Establece un temporizador que ejecuta una función de callback una vez que expire el 
    temporizador

    sintxis:
        setTimeout (fncCallback, tiempo_ms, argumentos);
        setTimeout ( ()=>{} , tiempo_ms , argumentos );

*/

const saludo = (name) => console.log(`Hola ${name}`);

const pasoAsincrono = (name) => {
    // setTimeout( saludo, 5000, name );
    // setTimeout ( (person) => console.log(`Hola ${person}`), 5000, name);
    setTimeout ( ()=> console.log(`Hola ${name}`), 5000 );
}

console.log("+++++++++++++++++++++++++++++++++++");
primerPaso();
pasoAsincrono("Baby Yoda multiverso");
tercerPaso();