console.log("JS08 Clases");

const getProducts = async () => {
    const url = "https://fakestoreapi.com/products";
    // const url = "https://reqres.in/api/users?page=2";

    const responseJSON = await fetch(url);
    const response = await responseJSON.json();
    console.log(response);
};

/**
 * Clase productos
 * El nombre de las clases se realizar con UpperCamelCase
*/

class Products{
    // definimos atributos

    // El método constructor nos ayuda a instanciar un objeto 
    constructor( id, name ){
        this.name = name; // creando el atributo name y le asignamos el valor de parámetro name 
        this.id = id;
        this.createAt = new Date().getTime();
        console.log(`Usuario ${this.name} se creó el ${new Date().toLocaleString}`);
    }
}

function createProductsOfClassProducts (){
            // instanciar la clase products para crear un objeto
    const zote = new Products();
}

createProductsOfClassProducts();