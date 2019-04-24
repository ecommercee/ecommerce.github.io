//GET USERS LIST
function createUsersList() {
    fetch(endpoints.users.url)
        .then(function (response) {
            return response.json();
        })
        .then(function (usersList) {
            let html = '';
            for (let i = 0; i < usersList.length; i++) {
                html += `
                    <tr>
                        <td> ${usersList[i].id} </td>
                        <td> ${usersList[i].username} </td>
                        <td> ${usersList[i].userKey} </td>
                        <td class="center"> ${usersList[i].status} </td>
                    </tr>
                `
            }
            $("#users-list").append(html);
        });
}
createUsersList();

//CREATE NEW USER
function createUser(data) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch('http://localhost:8080/v1/user/createUser', options)
        .then((response) => response.json)
}

document.getElementById("add-user").addEventListener('click', function () {
    let addUserName = document.getElementById('name').value;
    let addUserStatus = document.getElementById('status').value;
    let addUserKey = document.getElementById('key').value;
    createUser({ username: addUserName, status: addUserStatus, userKey: addUserKey });
    location.reload();
});

//BLOCK USER BY CHANGING STATUS
function blockUser(data) {
    let options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch(`${'http://localhost:8080/v1/user/badUser'}/${data.id}`, options)
        .then((response) => response.json)
}

document.getElementById("block-user").addEventListener('click', function () {
    let addUserId = document.getElementById('identify').value;
    let addUserStatus = document.getElementById('user-status').value;
    blockUser({ id: addUserId, "status": addUserStatus });
    location.reload();
});

//GENERATE KEY
function keyGenerator(data) {
    let options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch(`${'http://localhost:8080/v1/user/getToken'}/${data.id}`, options)
        .then((response) => response.json)
}

document.getElementById("key-generator").addEventListener('click', function () {
    let addUserId = document.getElementById('key-id').value;
    keyGenerator({ id: addUserId, "userKey": Math.floor(Math.random() * 100000) });
    location.reload();
});