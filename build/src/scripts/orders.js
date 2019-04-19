'use strict';

//GET ORDERS
function createOrdersList() {
    fetch('http://localhost:8080/v1/order/getOrders').then(function (response) {
        return response.json();
    }).then(function (ordersList) {
        var html = '';
        for (var i = 0; i < ordersList.length; i++) {
            html += '\n                    <tr>\n                        <td> ' + ordersList[i].id + ' </td>\n                        <td> ' + ordersList[i].username + ' </td>\n                        <td> ' + ordersList[i].orderProducts + ' </td>\n                    </tr>\n                ';
        }
        $("#orders").append(html);
    });
}
createOrdersList();

//DELETE ORDER
function deleteOrder(data) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return fetch('http://localhost:8080/v1/order/deleteOrder' + '/' + data.id, options).then(function (response) {
        return response.json;
    });
}

document.getElementById("delete-order").addEventListener('click', function () {
    var deleteOrderId = document.getElementById('order-id').value;
    deleteOrder({ id: deleteOrderId });
    location.reload();
});

//CHANGE ORDER DATA
function editOrder(data) {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return fetch('http://localhost:8080/v1/order/updateOrder' + '/' + data.id, options).then(function (response) {
        return response.json;
    });
}

document.getElementById("edit-order").addEventListener('click', function () {
    var editOrderId = document.getElementById('edit-id').value;
    var editOrderName = document.getElementById('edit-name').value;
    var editOrderProducts = document.getElementById('edit-order-products').value;
    console.log(editOrderProducts);
    editOrder({ id: editOrderId, username: editOrderName, orderProducts: editOrderProducts });
    location.reload();
});