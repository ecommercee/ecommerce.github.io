//GET ORDERS
function createOrdersList() {
    fetch('http://localhost:8080/v1/order/getOrders')
        .then(function (response) {
            return response.json();
        })
        .then(function (ordersList) {
            let html = '';
            for (let i = 0; i < ordersList.length; i++) {
                html += `
                    <tr>
                        <td> ${ordersList[i].id} </td>
                        <td> ${ordersList[i].username} </td>
                        <td> ${ordersList[i].orderProducts} </td>
                    </tr>
                `
            }
            $("#orders").append(html);
        });
}
createOrdersList();

//DELETE ORDER
function deleteOrder(data) {
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch(`${'http://localhost:8080/v1/order/deleteOrder'}/${data.id}`, options)
        .then((response) => response.json)
}

document.getElementById("delete-order").addEventListener('click', function () {
    let deleteOrderId = document.getElementById('order-id').value;
    deleteOrder({ id:deleteOrderId });
    location.reload();
});

//CHANGE ORDER DATA
function editOrder(data) {
    let options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch(`${'http://localhost:8080/v1/order/updateOrder'}/${data.id}`, options)
        .then((response) => response.json)
}

document.getElementById("edit-order").addEventListener('click', function () {
    let editOrderId = document.getElementById('edit-id').value;
    let editOrderName = document.getElementById('edit-name').value;
    let editOrderProducts = document.getElementById('edit-order-products').value;
    console.log(editOrderProducts);
    editOrder({ id:editOrderId, username: editOrderName, orderProducts: editOrderProducts });
    location.reload();
});