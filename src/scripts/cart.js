// GET CART PRODUCTS
function createProductList() {
    fetch(`${'http://localhost:8080/v1/cart/getProductsFromCart'}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (productsList) {
            let html = '';
            for (let i = 0; i < productsList.length; i++) {
                html += `
                    <tr>
                        <th scope="row"> ${productsList[i].id} </th>
                        <td><img class="card-img-top" src="http://placehold.it/250x250" alt=""></td>
                        <td> ${productsList[i].name} </td>
                        <td class="center"><i class="fas fa-times" data-id="${productsList[i].id}"></i></td>
                        <td class="right"> $${productsList[i].price} </td>
                    </tr>
                `
            }
            $("#cart").append(html);
        });
}
createProductList();

//DELETE CART PRODUCTS
setTimeout(function () {
    var elementsArray = document.querySelectorAll('i.fas');

    elementsArray.forEach(function (elem) {
        elem.addEventListener("click", function () {
            let a = this.getAttribute("data-id");
            deleteOrder({ id: a });
            location.reload();
        });
    });
}, 500);

function deleteOrder(data) {
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch(`${'http://localhost:8080/v1/cart/deleteItemFromCart'}/${data.id}`, options)
        .then((response) => response.json)
}

//MAKE ORDER FROM CART
document.getElementById('add-order').addEventListener("click", function () {
    fetch('http://localhost:8080/v1/cart/createOrder')
        .then(function (response) {
            return response.json();
        })
        .then(function (cartItems) {
            let tab = [];
            for (let i = 0; i < cartItems.length; i++) {
                tab.push(cartItems[i].id);
            }
            addNewOrder({ username: "unknown", "orderProducts": tab });
            alert('Pomyślne zamówienie');
        });
});

function addNewOrder(data) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch('http://localhost:8080/v1/order/createOrder', options)
        .then((response) => response.json)
}