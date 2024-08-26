import { getAllProductsById } from "../api/products.js";

// document.addEventListener('DOMContentLoaded',async () => {
//     const cart = JSON.parse(localStorage.getItem('cart'));
//     const cartItemsContainer = document.querySelector('.cart-items');
//     const cartTotalContainer = document.querySelector('.cart-total');

//    async function updateCart() {
//         cartItemsContainer.innerHTML = "";
//         let total = 0;
        
//         for (let id in cart) {
//             // const product = cart[id]; 

//             const product = await getAllProductsById(id);
//             product.quantity = cart[id].quantity;
//             // console.log(product)


//             const productCard = document.createElement('div');
//             productCard.className = " flex justify-between items-center w-200";
//             productCard.innerHTML = `
//             <img width="30px" src='../${product.imageUrl}'/>
// <div class="flex gap-20">
//                         <span>${product.name}</span>
//                         <div>
//                             <button data-id=${product.id} class='decrease border-radius50'>-</button>
//                             <span>${product.quantity}</span>
//                             <button data-id=${product.id} class='increase border-radius50'>+</button>
                            
//             <span>${product.price * product.quantity} lei</span>
            
//                            </div>
// </div>                           `
//             total = total + product.price * product.quantity;
//             // cartTotalContainer.innerHTML = `Total:${total} lei`
//             cartItemsContainer.appendChild(productCard);
            

//         };
//         cartTotalContainer.innerHTML =
// 			total === 0 ? 'Cosul de cumparaturi este gol' : `Total: ${total}`;
//     }
//     cartItemsContainer.addEventListener('click', (e)=> {
//         if(e.target.classList.contains('increase')){
//             const productId = e.target.getAttribute('data-id');
//             cart[productId].quantity += 1;
//         }  else if(e.target.classList.contains('decrease')) {
//             const productId = e.target.getAttribute('data-id');
//             cart[productId].quantity -= 1;
//             if(cart[productId].quantity <= 0) {
//                 delete cart[productId];
//             }
//         }
//         localStorage.setItem('cart', JSON.stringify(cart));
//         updateCart();

//     })
//     await updateCart();
// });

document.addEventListener('DOMContentLoaded', () => {
	const cart = JSON.parse(localStorage.getItem('cart'));
	const cartItemsContainer = document.querySelector('.cart-items');
	const cartTotalContainer = document.querySelector('.cart-total');
    const placeOrderButton = document.querySelector('.place-order');
    placeOrderButton.innerHTML = `<button class="place-order-btn">Plaseaza Comanda</button>`


	function updateCart() {
		cartItemsContainer.innerHTML = '';
		let total = 0;

		for (let id in cart) {
			const product = cart[id];

			const productCard = document.createElement('div');
			productCard.className =
				'flex justify-between items-center w-200';
			// const descreaseDisabled = product.quantity === 1 ? 'disabled' : '';
			productCard.innerHTML = `
			<img width="20px" src=../${product.imageUrl} />
				<div class="w-150 h-40 flex gap-20 justify-between items-center">
            	<span>${product.name}</span>
            	<div>
						<button data-id=${id}  class="border-radius50 decrease">-</button>
						<span>${product.quantity}</span>
						<button data-id=${id} class="border-radius50 increase">+</button>
            	</div>
				</div>
				<span>${product.price * product.quantity} lei</span>
				<!--<button data-id=${id} class=" border-radius50 delete">Sterge</button>-->
         `;
			total = total + product.price * product.quantity;
			cartItemsContainer.appendChild(productCard);
		}
		cartTotalContainer.innerHTML =
			total === 0 ? 'Cosul de cumparaturi este gol' : 
            total < 150 ? `Total: ${total + 20}lei - ${total} lei + Taxa Livrare: 20 lei` :
            `Total: ${total} lei + Livrare Gratuita` ;
	}

	cartItemsContainer.addEventListener('click', (e) => {
		if (e.target.classList.contains('increase')) {
			const id = e.target.getAttribute('data-id');
			cart[id].quantity += 1;

		} else if (e.target.classList.contains('decrease')) {
			const id = e.target.getAttribute('data-id');
			cart[id].quantity -= 1;

           if(cart[id].quantity === 1) {

            } else if(cart[id].quantity <= 0){
                delete cart[id]
            }
		}
        
         
        
        // else if (e.target.classList.contains('delete')) {
		// 	const id = e.target.getAttribute('data-id');
		// 	delete cart[id];
		// }




		localStorage.setItem('cart', JSON.stringify(cart));
		updateCart();
	});

	updateCart();
    placeOrderButton.addEventListener('click', ()=> {
        if(cartItemsContainer.innerHTML) {
        cartItemsContainer.innerHTML = '';
        cartTotalContainer.innerHTML = 'Cosul de cumparaturi este gol';
       localStorage.removeItem('cart');
        alert('Comanda Plasata cu succes')
    placeOrderButton.innerHTML = `<button disabled>Plaseaza Comanda</button>`}
    else {placeOrderButton.innerHTML = `<button disabled>Plaseaza Comanda</button>`}
        
    })
});