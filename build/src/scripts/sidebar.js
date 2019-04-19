'use strict';

//CREATE LEFT SIDEBAR HOME
function displaySidebar() {
    fetch('http://localhost:8080/v1/group/getGroups').then(function (response) {
        return response.json();
    }).then(function (productsGroups) {
        var html = '';
        for (var i = 0; i < productsGroups.length; i++) {
            html += '<a href="group/' + productsGroups[i].id + '" class="list-group-item"> ' + productsGroups[i].name + ' </a>';
        }
        $("#sidebar").append(html);
    });
}
displaySidebar();