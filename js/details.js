document.addEventListener('DOMContentLoaded', showProductDetails);

const url = "https://668d7a70099db4c579f3186c.mockapi.io/Produsee"

async function showProductDetails (){
    // console.log(window.location.search);
const urlSearchParam = new URLSearchParams(window.location.search);
const productID = urlSearchParam.get('id');
// console.log(productID);
const response = await fetch(`${url}/${productID}`);
const detaliiProdus = await response.json();
document.querySelector('.main').innerHTML = `
<h2>${detaliiProdus.details}</h2>`
}
