import { getAllProducts } from "./api/products.js";
import { mapProductToCard } from "./utils/layout.js";




document.addEventListener('DOMContentLoaded',displayAllProducts);
const mainContainer = document.querySelector('.main');


// function getAllProducts() {
// const url = 'https://668d7a70099db4c579f3186c.mockapi.io/Produsee';
// return fetch(url).then((response) => response.json());
// }

async function displayAllProducts(){
	const products = await getAllProducts();
	// getAllProducts().then((products) =>
		 mainContainer.innerHTML = products.map(mapProductToCard).join(' ');
	
	
	
	//Adaugare buttons de AddToCart
	const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button) => {
	button.addEventListener('click', ()=> {
		const productId = button.getAttribute('data-id');
		const price = button.getAttribute('data-price');
		const name = button.getAttribute('data-name');
		const imageUrl = button.getAttribute('data-image');

	let cart = JSON.parse(localStorage.getItem('cart')) || {};
	if (cart[productId]) {
		cart[productId].quantity +=1 ;

	}else {
		cart[productId] = {
			quantity: 1,
			price: price, 
			name: name, 
			imageUrl: imageUrl,
		};
		
	};
	localStorage.setItem('cart', JSON.stringify(cart));
	
	});
})	
		// 	product => 
		// `
		// <div class="product-card flex-col gap-20 items-center justify-between">
		// <h3 class="card-title-and-author title-font text-align-center">${product.name}  <span class="author" ><p>${product.author}</p></span> </h3>
		// <img src = ${product.imageUrl} width="100px"/>
		// <p class="card-price">${product.price} RON</p>
		// <a href='../pages/details.html?id=${product.id}'>Detalii</a>
		
		// </div>
		// `

	// .join(' ')
}
//  async function getAllProducts() {
// 	const response = await fetch(url);
// 	const products = await response.json();

// 	return products;
// }

