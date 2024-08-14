
//load product in table at page loading
const url = 'https://668d7a70099db4c579f3186c.mockapi.io/Produsee';

const productsTableBody = document.getElementById('products-table').querySelector('tbody');
console.log(productsTableBody)

document.addEventListener('DOMContentLoaded', displayAllProducts);

function getAllProducts() {
return fetch(url).then((response) => response.json());
}

function displayAllProducts() {
getAllProducts().then(products => {
    productsTableBody.innerHTML = products.map(product => `
        <tr>
<td>${product.name}</td>
<td>${product.author}</td>
<td>${product.price}</td>
<td>
<img src ="../${product.imageUrl} " width="50px" />
</td>
<td>${product.details}</td>
<td>
    <button>
        <i class="fa-solid fa-pen-nib"></i>
    </button>
</td>
<td>
    <button>
        <i class="fa-solid fa-eraser"></i>
    </button>
</td>
        </tr>
        `)
.join(' ')
})

}
//save new product in table
const form = document.getElementById('product-form')
const nameInput = document.getElementById('bkname');
const authInput = document.getElementById('bkauth');
const priceInput = document.getElementById('bkprice');
const imageUrlInput = document.getElementById('bkimg-url');
const detailsInput = document.getElementById('bkdetails');
const saveButton = document.querySelector('.save-btn');
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

fetch(url, {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(product),
}).then(() =>{
    form.reset();
    displayAllProducts()
}
)

}