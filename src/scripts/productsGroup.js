//GET PRODUCT GROUP LIST
function createProductGroupList() {
    fetch('https://infinite-hamlet-99648.herokuapp.com/v1/group/getGroup')
        .then(function (response) {
            return response.json();
        })
        .then(function (productsGroups) {
            let html = '';
            for (let i = 0; i < productsGroups.length; i++) {
                html += `
                    <tr>
                        <td> ${productsGroups[i].id} </td>
                        <td> ${productsGroups[i].name} </td>
                    </tr>
                `
            }
            $("#product-groups-list").append(html);
        });
}
createProductGroupList();

//CREATE NEW GROUP
function createGroup(data) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch('https://infinite-hamlet-99648.herokuapp.com/v1/group/createGroup', options)
        .then((response) => response.json)
}

document.getElementById("add-group").addEventListener('click', function () {
    let addGroupName = document.getElementById('name').value;
    createGroup({ name: addGroupName });
    location.reload();
});

//EDIT PRODUCT GROUP
function editGroup(data) {
    let options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch(`${'https://infinite-hamlet-99648.herokuapp.com/v1/group/updateGroup'}/${data.id}`, options)
        .then((response) => response.json)
}

document.getElementById("edit-group").addEventListener('click', function () {
    let editGroupId = document.getElementById('edit-id').value;
    let editGroupName = document.getElementById('edit-name').value;
    editGroup({ id:editGroupId, name: editGroupName });
    location.reload();
});