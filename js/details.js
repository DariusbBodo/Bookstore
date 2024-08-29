document.addEventListener('DOMContentLoaded', showProductDetails);

const url = "https://668d7a70099db4c579f3186c.mockapi.io/Produsee"

async function showProductDetails (){
    console.log(window.location.search);
const urlSearchParam = new URLSearchParams(window.location.search);
const productID = urlSearchParam.get('id');
// console.log(productID);
const response = await fetch(`${url}/${productID}`);
const detaliiProdus = await response.json();
document.querySelector('.main').innerHTML = `
<h2>${detaliiProdus.details}</h2>
        <div>
                <button class='home-btn m-20' data-id=${detaliiProdus.id} 
                    data-name=${detaliiProdus.name} data-price=${detaliiProdus.price}
                    data-image=${detaliiProdus.imageUrl}>
                    <a class="color-black text-decoration0" href="../index.html"><i class="fa-solid fa-book-journal-whills"></i>Home</a>
                </button>
        </div>`
}

// do not forget to add purchase button for details.html


