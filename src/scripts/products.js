//GET PRODUCT LIST
function createProductList() {
    fetch('http://localhost:8080/v1/product/getProducts')
        .then(function (response) {
            return response.json();
        })
        .then(function (productsList) {
            let html = '';
            for (let i = 0; i < productsList.length; i++) {
                html += `
                    <tr>
                        <td> ${productsList[i].id} </td>
                        <td> ${productsList[i].name} </td>
                        <td class="center"> $${productsList[i].price} </td>
                        <td class="center"> ${productsList[i].groupId} </td>
                    </tr>
                `
            }
            $("#products-list").append(html);
        });
}
createProductList();

//CREATE NEW PRODUCT
function createProduct(data) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch('http://localhost:8080/v1/product/createProduct', options)
        .then((response) => response.json)
}

document.getElementById("add-product").addEventListener('click', function () {
    let addProductName = document.getElementById('name').value;
    let addProductDescription = document.getElementById('description').value;
    let addProductPrice = document.getElementById('price').value;
    let addProductGroup = document.getElementById('group').value;
    createProduct({ name: addProductName, description: addProductDescription, price: addProductPrice, groupId: addProductGroup })
    location.reload();
});

//EDIT PRODUCT DATA
function editProduct(data) {
    let options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch(`${'http://localhost:8080/v1/product/updateProduct'}/${data.id}`, options)
        .then((response) => response.json)
}

document.getElementById("edit-product").addEventListener('click', function () {
    let editProductId = document.getElementById('edit-id').value;
    let editProductName = document.getElementById('edit-name').value;
    let editProductDescription = document.getElementById('edit-description').value;
    let editProductPrice = document.getElementById('edit-price').value;
    let editProductGroup = document.getElementById('edit-group').value;
    editProduct({ id:editProductId, name: editProductName, description: editProductDescription, price: editProductPrice, groupId: editProductGroup })
    location.reload();
});

//DELETE PRODUCT
function deleteProduct(data) {
    console.log(data);
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch(`${'http://localhost:8080/v1/product/deleteProduct'}/${data.id}`, options)
        .then((response) => response.json)
}

document.getElementById("delete-product").addEventListener('click', function () {
    let deleteProductId = document.getElementById('delete-id').value;
    deleteProduct({ id:deleteProductId });
    location.reload();
});