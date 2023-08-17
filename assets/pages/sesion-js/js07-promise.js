console.log("JS07 - Promise");

/*
    Una promesa es un patrón asíncrono que se utiliza para
    manejar operaciones asíncronas.

    Una promesa permite realizar tareas asíncronas y
    manejar los resultados (éxito error) en un momento posterior.

    Las promesas tienen tres estados:

    1.- Pending: Estado inicial de una promesa, antes de que se resuelva o rechace.
    2.- Resolve: La promesa se resuelve con un valor.
    3.- Rejected: La promesa se rechaza por una razón.

    Resolve y reject son funciones de callBack.

Para crear una promesa se usa el constructor de la clase Promise

Sintaxis:
    const pinkyPromise = new Promise (fncCallBack);
*/

// const pinkyPromise = new Promise ( () => {} );
// const pinkyPromise = new Promise ((fncCallBackResolve, fncCallBackRejected) => {});

const pinkyPromise = new Promise((fncCallBackResolve, fncCallBackRejected) => {
    const menorEdad = false;

    if (menorEdad)
        fncCallBackResolve("Hay que estar siempre juntos");
    else
        fncCallBackRejected({ code: 404, message: "Ni te topo" });
});

// Consumir las promesas
// Se usan los métdos then, catch y finally*

console.log("-----> Promesas <-----");
console.log("01 - Antes de consumir la promesa");

// pinkyPromise(); // pinkyPromise is not a function;
// pinkyPromise.then().catch().finally(); // forma correcta de llamar una promesa
/* 

pinkyPromise
    .then() // se ejecuta una función de callback si la promesa fue resuelta
    .catch() // se ejecuta una función de callback si la promesa fue rechazada
    .finally(); // se ejecuta una función de callback después de que la 
                // promesa fue resuelta o rechazada 
                
*/

pinkyPromise
    .then((response) => console.log(`Promesa resulta: ${response}`))
    .catch((error) => console.log(`Promesa rechazada: ${error.message}`))
    .finally(() => console.log(`Se ha terminado de resolver la promesa`));


console.log("03 - Después de consumir la promesa");

// Haciendo una promesa con parámetros

/**
 * Saludo especial para las personas que su nombre comience con A.
 * El saludo se genera después de 5 segundos.
 * @param {string} name 
 */

const gretting = (name) => {
    const myPromise = new Promise((resolve, reject) => {
        const firstChar = name.charAt(0).toUpperCase();
        if (firstChar === 'A')
            // resolve({code: 200, message: `Soy ${name} ¡Hola a todos!`});
            setTimeout(() => resolve({ code: 200, message: `Soy ${name} ¡Hola a todos!` }), 5000);
        else if (firstChar === 'L')
            resolve({ code: 201, message: `Soy ${name}, un saludito a toda la banda que cotorrea` });
        else
            reject({ code: 404, message: `No estoy disponible para ${name}` });

    }); // fin de promise

    return myPromise;
}

gretting("Ana")
    .then((response) => console.log(response.code, response.message))
    .catch((error) => console.log(error.code, error.message));

gretting("Luisa")
    .then((response) => console.log(response.code, response.message))
    .catch((error) => console.log(error.code, error.message));

gretting("Eduardo")
    .then((response) => console.log(response.code, response.message))
    .catch((error) => console.log(error.code, error.message));

// --------------- consumir las promesas con async y await ------------------
/*
Async y Await facilita la escritura y lectura de código asíncrono.
Permite escribir código asíncrono de manera similar a como se escribiría
código síncrono
*/

async function grettingCh30(name) {
    console.log("---- Saludos a la bandita de la Ch30 ----");
    const result = await gretting(name);
    console.log(result);
    console.log("---- Fin del saludo ----");
}



const grettingAll = async () => {
    try {
        await grettingCh30("Anneth");
        await grettingCh30("Mau");
        await grettingCh30("Leonardo");
    }
    catch (error) {
        console.warn("Se rechazó una promesa");
        console.table(error);
    }
};

grettingAll();