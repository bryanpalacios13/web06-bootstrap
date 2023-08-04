console.log("Página en construcción con Patricio Estrella");

function clickPatricio() {
    alert ("La mayonesa es un instrumento? xd");
}

function changeColor( elementHTML, color){
    alert(" Que emocion, voy a cambiar mi color");
    console.log(elementHTML);
    console.log(color);

    elementHTML.style.color = color;
}

function changeColorWithPromt(elementHTML){
    const color = prompt("Dime el color en inglés", "yellow");
    changeColor(elementHTML, color);
}