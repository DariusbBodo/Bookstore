document.addEventListener('DOMContentLoaded',displayAllProducts);

const mainContainer = document.querySelector('.main');


function getAllProducts() {
const url = 'https://668d7a70099db4c579f3186c.mockapi.io/Produsee';
return fetch(url).then((response) => response.json());
}

function displayAllProducts(){
	getAllProducts().then((products) => mainContainer.innerHTML = products.map(product => 
		`
		<div class="product-card">
		<h3 class="card-title-and-author">${product.name} - ${product.author} </h3>
		</div>
		`

	))
}
//  async function getAllProducts() {
// 	const response = await fetch(url);
// 	const products = await response.json();

// 	return products;
// }

