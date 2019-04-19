'use strict';

//GET USERS LIST
function createUsersList() {
    fetch(endpoints.users.url).then(function (response) {
        return response.json();
    }).then(function (usersList) {
        var html = '';
        for (var i = 0; i < usersList.length; i++) {
            html += '\n                    <tr>\n                        <td> ' + usersList[i].id + ' </td>\n                        <td> ' + usersList[i].username + ' </td>\n                        <td> ' + usersList[i].userKey + ' </td>\n                        <td class="center"> ' + usersList[i].status + ' </td>\n                    </tr>\n                ';
        }
        $("#users-list").append(html);
    });
}
createUsersList();

//CREATE NEW USER
function createUser(data) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return fetch(endpoints.users.url, options).then(function (response) {
        return response.json;
    });
}

document.getElementById("add-user").addEventListener('click', function () {
    var addUserName = document.getElementById('name').value;
    var addUserStatus = document.getElementById('status').value;
    var addUserKey = document.getElementById('key').value;
    createUser({ username: addUserName, status: addUserStatus, userKey: addUserKey });
    location.reload();
});

//BLOCK USER BY CHANGING STATUS
function blockUser(data) {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return fetch(endpoints.users.url + '/' + data.id, options).then(function (response) {
        return response.json;
    });
}

document.getElementById("block-user").addEventListener('click', function () {
    var addUserId = document.getElementById('identify').value;
    var addUserStatus = document.getElementById('user-status').value;
    blockUser({ id: addUserId, "status": addUserStatus });
    location.reload();
});

//GENERATE KEY
function keyGenerator(data) {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return fetch(endpoints.users.url + '/' + data.id, options).then(function (response) {
        return response.json;
    });
}

document.getElementById("key-generator").addEventListener('click', function () {
    var addUserId = document.getElementById('key-id').value;
    keyGenerator({ id: addUserId, "userKey": Math.floor(Math.random() * 100000) });
    location.reload();
});