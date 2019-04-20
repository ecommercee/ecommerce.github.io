'use strict';

//GET PRODUCT GROUP LIST
function createProductGroupList() {
    fetch('https://infinite-hamlet-99648.herokuapp.com/v1/group/getGroup').then(function (response) {
        return response.json();
    }).then(function (productsGroups) {
        var html = '';
        for (var i = 0; i < productsGroups.length; i++) {
            html += '\n                    <tr>\n                        <td> ' + productsGroups[i].id + ' </td>\n                        <td> ' + productsGroups[i].name + ' </td>\n                    </tr>\n                ';
        }
        $("#product-groups-list").append(html);
    });
}
createProductGroupList();

//CREATE NEW GROUP
function createGroup(data) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return fetch('https://infinite-hamlet-99648.herokuapp.com/v1/group/createGroup', options).then(function (response) {
        return response.json;
    });
}

document.getElementById("add-group").addEventListener('click', function () {
    var addGroupName = document.getElementById('name').value;
    createGroup({ name: addGroupName });
    location.reload();
});

//EDIT PRODUCT GROUP
function editGroup(data) {
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return fetch('https://infinite-hamlet-99648.herokuapp.com/v1/group/updateGroup' + '/' + data.id, options).then(function (response) {
        return response.json;
    });
}

document.getElementById("edit-group").addEventListener('click', function () {
    var editGroupId = document.getElementById('edit-id').value;
    var editGroupName = document.getElementById('edit-name').value;
    editGroup({ id: editGroupId, name: editGroupName });
    location.reload();
});