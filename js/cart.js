import { getAllProductsById } from "../api/products.js";

document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalContainer = document.querySelector('.cart-total');

   async function updateCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;
        
        for (let id in cart) {
            const product = await getAllProductsById(id);
            product.quantity = cart[id].quantity;
            // console.log(product)


            const productCard = document.createElement('div');
            productCard.className = " flex jusify-between items-center";
            productCard.innerHTML = `
            <span>${product.name}</span>
            
            <div>
            <button class='decrease'>-</button>
            <span>${product.quantity}</span>
            <button class='increase'>+</button>
            
            </div>`
            cartItemsContainer.appendChild(productCard);
            ;

        };
    };
    updateCart();
});
