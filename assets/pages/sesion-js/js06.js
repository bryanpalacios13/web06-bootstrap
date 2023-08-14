console.log("Sesión JS06 Manipulación del DOM");

// Modificar un elemento HTML por medio de su ID
const findELementById = () => {
    const title = document.getElementById("title");
    console.log(title);
    console.log(typeof(title)); // Object
    console.log(title.innerHTML); // Sesión X
    title.innerHTML = `Generation - Sesión Js 06`;
}

findELementById();