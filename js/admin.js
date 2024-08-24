
import { getAllProducts } from "../api/products.js";
import { getAllProductsById } from "../api/products.js";
import { mapProductToAdminTable } from "../utils/layout.js";




//load product in table at page loading
const url = 'https://668d7a70099db4c579f3186c.mockapi.io/Produsee';

const productsTableBody = document.getElementById('products-table').querySelector('tbody');
// console.log(productsTableBody)
let currentEditabileProductId;

document.addEventListener('DOMContentLoaded', displayAllProducts);




// function getAllProducts() { - refactorizat in products.js
// return fetch(url).then((response) => response.json());
// }


// function getAllProductsById(id) { - refactorizat in products.js
// return fetch(`${url}/${id}`).then((response) => response.json());
// }




async function displayAllProducts() {
    const products = await getAllProducts();
    productsTableBody.innerHTML = products.map(mapProductToAdminTable).join('')}
//         product =>
//          `
//         <tr>
// <td>${product.name}</td>
// <td>${product.author}</td>
// <td>${product.price} lei</td>
// <td>
// <img src ="../${product.imageUrl} " width="50px" />
// </td>
// <td>${product.details}</td>
// <td>
//     <button class="edit-${product.id} ">
//         <i class="fa-solid fa-pen-nib"></i>
//     </button>
// </td>
// <td>
//     <button class="delete-${product.id}">
//         <i class="fa-solid fa-eraser"></i>
//     </button>
// </td>
//         </tr>
//         `)
// .join(' ')
// }


//save new product in table
const form = document.getElementById('product-form')
const nameInput = document.getElementById('bkname');
const authInput = document.getElementById('bkauth');
const priceInput = document.getElementById('bkprice');
const imageUrlInput = document.getElementById('bkimg-url');
const detailsInput = document.getElementById('bkdetails');
const saveButton = document.querySelector('.save-btn');
let editMode = false;


saveButton.addEventListener('click', saveNewProduct)


console.log(nameInput, priceInput, authInput, imageUrlInput, detailsInput)

function saveNewProduct(event){
    event.preventDefault();

const product = {
    name: nameInput.value,
    author: authInput.value,
    price: Number(priceInput.value),
    imageUrl: imageUrlInput.value,
    details: detailsInput.value,
}



fetch(editMode ? `${url}/${currentEditabileProductId}` : url, {
    method: editMode ? 'PUT' : 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(product),
}).then(() =>{
    form.reset();
    displayAllProducts();
    editMode = false;
}
)

}

// // edit Product with onClick function directly into JS 
// function editProduct(id) {
//     console.log(id);
// } - not working???
 
//edit product
productsTableBody.addEventListener('click', handleActions);

function handleActions(event) {
    // console.log(event.target.parentElement.className);
const className = event.target.parentElement.className;
if(className.includes('edit')){
   const productId = className.split("-")[1]
   editProduct(productId);
} else if (className.includes('delete')){
   const productId = className.split("-")[1]
   deleteProduct(productId);

    console.log(productId)
}
}

function editProduct(id) {
getAllProductsById(id).then((product)=> {
editMode = true;
    nameInput.value = product.name;
    authInput.value = product.author;
    priceInput.value = product.price;
    imageUrlInput.value = product.imageUrl;
    detailsInput.value = product.details;

    currentEditabileProductId = product.id;
})
}

function deleteProduct(id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
    }).then(()=>{displayAllProducts();})
}