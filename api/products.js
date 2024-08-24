const url = 'https://668d7a70099db4c579f3186c.mockapi.io/Produsee';

 export async function getAllProducts() {
const response = await fetch(url);
const products = await response.json();
return products
}





export async function getAllProductsById(id) {
    const response = await fetch(`${url}/${id}`);
    const product = await response.json();
    return product;
// return fetch(`${url}/${id}`).then((response) => response.json());
}