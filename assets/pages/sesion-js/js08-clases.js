import { Products, TapiocaProduct } from "./js08-product-class.js";

console.log("JS08 Clases");

const getProducts = async () => {
    const url = "https://fakestoreapi.com/products";
    // const url = "https://reqres.in/api/users?page=2";

    const responseJSON = await fetch(url);
    const response = await responseJSON.json();
    console.log(response);
    return response;
};


function createProductsOfClassProducts() {
    // instanciar la clase products para crear un objeto
    const zote = new Products(1, "zote");
    const products = [];
    products.push(zote);
    products.push(new Products(2, "Palmolive"));
    products.push(new Products(3, "Coca Cola 2L"));
    products.push(new Products(4, "Cajeta Corona"));
    products.push(new Products(5, "Chips Moradas"));
    products.push(new Products(6, "Salsa Valentina"));
    products.push(new Products(7, "Sopa Nissin"));

    // console.table (products);
    return products;
}

function lifeSpanProducts(products) {
    // El método map sobre un arreglo, intera sobre cada elemento 
    // de arreglo y entrega un nuevo arreglo
    const productsLifeSpan = products.map(product =>
        `<li> ${product.name} se creo hace ${product.lifeSpan() / 1000} </li>`
    );
    return productsLifeSpan;
}

function insertListItems(listItems) {
    const products = document.getElementById("products");
    const unorderList = `<ul> ${listItems.join("")} </ul>`;

    products.innerHTML = unorderList;
}

function onclickLifeSpan() {
    const products = createProductsOfClassProducts(); // Crea los objetos
    setTimeout(() => {
        const productListItem = lifeSpanProducts(products); // 
        insertListItems(productListItem);
    }, 5000);
}

// ==============================================================================
const refShowProducts = document.getElementById("show-products");
refShowProducts.addEventListener("click", ()=>{
    showProducts();
});

async function showProducts() {
    // const products = createProductsOfClassProducts();
    const products = await createProductsOfFakeStore();
    const productsCards = createCardsOfProducts(products);
    insertCards(productsCards);
}

async function createProductsOfFakeStore(){
    const fakeProducts = await getProducts();

    // return fakeProducts.maps((fakeProduct) => new Products ( fakeProduct.id, fakeProduct.title ) );
    return fakeProducts.map(({id, title}) => new Products(id, title) );
}

async function createProductsOfTapioca(){
    const fakeProducts = await getProducts("/assets/json/tapioca.json");
    return fakeProducts.map( ({serie, nombre, ingredients}) =>
                        new TapiocaProduct (serie, nombre, ingredients) );
}

function createCardsOfProducts(products) {

    return products.map((product) =>{
        return`
        <div class="card col-4 m-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${product.id}</h6>
                <p class="card-text">Some title content pon uwu xd</p>
                ${
                    product instanceof TapiocaProduct ? 
                    `<ol>
                    ${product.ingredients.map( ingredient => `<li> ${ingredient}</li>` ).join("")}
                    </ol>`
                    : `<p>No Ingredients</p>`
                }
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>
        `
    })

}

function insertCards( productCards ){
    const products = document.getElementById("products");
    const cards = `<div class="row"> ${productCards.join("")} </div>`;

    products.innerHTML = cards;
}