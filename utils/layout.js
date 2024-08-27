export function mapProductToCard(product){
   return `
   <div class="product-card flex-col gap-20 items-center justify-between">
		<h3 class="card-title-and-author title-font text-align-center">${product.name}  <span class="author" ><p>${product.author}</p></span> </h3>
            <a href='pages/details.html?id=${product.id}'>
                <img src = ${product.imageUrl} width="100px"/>
            </a>
            <p class="description text-align-center">${product.details}</p>
		<p class='card-price'>${product.price} lei     
            <span>  
                <button class='add-to-cart' data-id=${product.id} 
                data-name=${product.name} data-price=${product.price}
          data-image=${product.imageUrl}>
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </span>
        </p>
		  <!--  <button class='add-to-cart' data-id=${product.id} 
          data-name=${product.name} data-price=${product.price}
          data-image=${product.imageUrl}>
                <i class="fa-solid fa-cart-shopping"></i>
            </button> -->
		
		</div>
    `
}

export function mapProductToAdminTable(product) {
    return `
        <tr>
<td>${product.name}</td>
<td>${product.author}</td>
<td>${product.price} lei</td>
<td>
<img src ="../${product.imageUrl} " width="50px" />
</td>
<td>${product.details}</td>
<td>
    <button class="edit-${product.id} ">
        <i class="fa-solid fa-pen-nib"></i>
    </button>
</td>
<td>
    <button class="delete-${product.id}">
        <i class="fa-solid fa-eraser"></i>
    </button>
</td>
        </tr>
        `
}