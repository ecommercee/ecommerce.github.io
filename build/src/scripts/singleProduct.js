'use strict';

//GET SINGLE PRODUCT
var parts = document.URL.split('/');
var activeID = Number(parts[parts.length - 1]);

function createProductList() {
    fetch('http://localhost:8080/v1/product/getProduct' + '/' + activeID).then(function (response) {
        return response.json();
    }).then(function (productsList) {
        var html = '';
        html += '\n                <h2>' + productsList.name + '</h2>\n                <h5>' + productsList.price + '</h5>\n                <p>' + productsList.description + '</p>\n            ';
        $("#product").prepend(html);

        document.getElementById("add-cart-button").addEventListener('click', function () {
            addCart(productsList);
            this.innerHTML = 'Produkt o id ' + activeID + ' znajduje si\u0119 w koszyku!';
        }, 1000);
    });
}
createProductList();

//ADD PRODUCT TO CART
function addCart(data) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return fetch('http://localhost:8080/v1/cart/addItemToCart', options).then(function (response) {
        return response.json;
    });
}