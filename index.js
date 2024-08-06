document.addEventListener('DOMContentLoaded',displayAllProducts);

const mainContainer = document.querySelector('.main');


function getAllProducts() {
const url = 'https://668d7a70099db4c579f3186c.mockapi.io/Produsee';
return fetch(url).then((response) => response.json());
}

function displayAllProducts(){
	getAllProducts().then((products) =>
		 mainContainer.innerHTML = products.map(
			product => 
		`
		<div class="product-card flex-col gap-20 items-center justify-between">
		<h3 class="card-title-and-author title-font text-align-center">${product.name}  <span class="author" ><p>${product.author}</p></span> </h3>
		<img src = ${product.imageUrl} width="100px"/>
		<p class="card-price">${product.price} RON</p>
		</div>
		`

	).join(' '))
}
//  async function getAllProducts() {
// 	const response = await fetch(url);
// 	const products = await response.json();

// 	return products;
// }

