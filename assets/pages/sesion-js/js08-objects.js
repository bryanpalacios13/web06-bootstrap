console.log("Sesion JS08 POO");

const registerForm = document.forms["registerForm"];

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = {
        fullname: registerForm.elements["fullname"].value, // String
        email: registerForm.elements["email"].value, // String
        password: registerForm.elements["password"].value, // String
    }
    console.table(user);
    postUser(user);

    // debemos convertir el objeto user a formato JSON
    localStorage.setItem("user", JSON.stringify(user)); // key, value   Esto sirve para guardar mis datos en el localStorage
});

const postUser = async ( userData ) => {
    const url = "https://reqres.in/api/register";
    userData.email = "eve.holt@reqres.in"; // se requiere este email

    const responseJSON = await fetch( url , {
        method: "POST", // POST PUT DELETE GET
        body: JSON.stringify(userData), // datos del usuario
        headers : { "Content-Type" : "application/json" },
    });

    const response = await responseJSON.json(); // convertir JSON a Object JS

    response.id && alert( `${response.id}: ${response.token}` );

    // iterar sobre un objeto
    for (const key in response) {
        console.log(`clave: ${key}, value: ${response[key]}`);        
    }
}