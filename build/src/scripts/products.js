'use strict';

//GET PRODUCT LIST
function createProductList() {
    fetch('https://infinite-hamlet-99648.herokuapp.com/v1/product/getProducts').then(function (response) {
        return response.json();
    }).then(function (productsList) {
        var html = '';
        for (var i = 0; i < productsList.length; i++) {
            html += '\n                    <tr>\n                        <td> ' + productsList[i].id + ' </td>\n                        <td> ' + productsList[i].name + ' </td>\n                        <td class="center"> $' + productsList[i].price + ' </td>\n                        <td class="center"> ' + productsList[i].groupId + ' </td>\n                    </tr>\n                ';
        }
        $("#products-list").append(html);
    });
}
createProductList();

//CREATE NEW PRODUCT
function createProduct(data) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return fetch('https://infinite-hamlet-99648.herokuapp.com/v1/product/createProduct', options).then(function (response) {
        return response.json;
    });
}

document.getElementById("add-product").addEventListener('click', function () {
    var addProductName = document.getElementById('name').value;
    var addProductDescription = document.getElementById('description').value;
    var addProductPrice = document.getElementById('price').value;
    var addProductGroup = document.getElementById('group').value;
    createProduct({ name: addProductName, description: addProductDescription, price: addProductPrice, groupId: addProductGroup });
    location.reload();
});

//EDIT PRODUCT DATA
function editProduct(data) {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return fetch('https://infinite-hamlet-99648.herokuapp.com/v1/product/updateProduct' + '/' + data.id, options).then(function (response) {
        return response.json;
    });
}

document.getElementById("edit-product").addEventListener('click', function () {
    var editProductId = document.getElementById('edit-id').value;
    var editProductName = document.getElementById('edit-name').value;
    var editProductDescription = document.getElementById('edit-description').value;
    var editProductPrice = document.getElementById('edit-price').value;
    var editProductGroup = document.getElementById('edit-group').value;
    editProduct({ id: editProductId, name: editProductName, description: editProductDescription, price: editProductPrice, groupId: editProductGroup });
    location.reload();
});

//DELETE PRODUCT
function deleteProduct(data) {
    console.log(data);
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return fetch('https://infinite-hamlet-99648.herokuapp.com/v1/product/deleteProduct' + '/' + data.id, options).then(function (response) {
        return response.json;
    });
}

document.getElementById("delete-product").addEventListener('click', function () {
    var deleteProductId = document.getElementById('delete-id').value;
    deleteProduct({ id: deleteProductId });
    location.reload();
});