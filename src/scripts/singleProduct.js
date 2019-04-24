//GET SINGLE PRODUCT
let parts = document.URL.split('/');
let activeID = Number(parts[parts.length - 1]);

function createProductList() {
    fetch(`${'http://localhost:8080/v1/product/getProduct'}/${activeID}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (productsList) {
            let html = '';
            html += `
                <h2>${productsList.name}</h2>
                <h5>${productsList.price}</h5>
                <p>${productsList.description}</p>
            `
            $("#product").prepend(html);

            document.getElementById("add-cart-button").addEventListener('click', function () {
                addCart(productsList);
                this.innerHTML = `Produkt o id ${activeID} znajduje się w koszyku!`;
            }, 1000);
        });
}
createProductList();

//ADD PRODUCT TO CART
function addCart(data) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch('http://localhost:8080/v1/cart/addItemToCart', options)
        .then((response) => response.json)
}

