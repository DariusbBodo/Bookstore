import { getAllProducts } from "./api/products.js";
import { mapProductToCard } from "./utils/layout.js";




document.addEventListener('DOMContentLoaded',displayAllProducts);
const mainContainer = document.querySelector('.main');


// tracks the total products in cart
function updateCartDisplay(cart) {
    let totalQuantity = 0;

    for (let productId in cart) {
        if (cart.hasOwnProperty(productId)) {
            totalQuantity += cart[productId].quantity;
        }
    }

   
    localStorage.setItem('totalQuantity', totalQuantity);

    // Display totalQuantity in the cart
    const produseInCos = document.querySelector('.totalProductsInCart');
                    
    produseInCos.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart   ${totalQuantity}`;
}


async function displayAllProducts(){
	const products = await getAllProducts();
	// getAllProducts().then((products) =>
		 mainContainer.innerHTML = products.map(mapProductToCard).join(' ');
	
	const storedCart = JSON.parse(localStorage.getItem('cart')) || {};
    updateCartDisplay(storedCart);
	
	//Adaugare buttons de AddToCart
	const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button) => {
	button.addEventListener('click', ()=> {
		const productId = button.getAttribute('data-id');
		const price = button.getAttribute('data-price');
		const name = button.getAttribute('data-name');
		const imageUrl = button.getAttribute('data-image');

//added const that keeps track of the items in cart


	const cart = JSON.parse(localStorage.getItem('cart')) || {};
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
	updateCartDisplay(cart);
});
})	
}

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
//  async function getAllProducts() {
// 	const response = await fetch(url);
// 	const products = await response.json();

// 	return products;
// }

