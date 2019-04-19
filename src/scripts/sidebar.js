//CREATE LEFT SIDEBAR HOME
function displaySidebar() {
    fetch('https://infinite-hamlet-99648.herokuapp.com/v1/group/getGroups')
        .then(function (response) {
            return response.json();
        })
        .then(function (productsGroups) {
            let html = '';
            for (let i = 0; i < productsGroups.length; i++) {
                html += `<a href="group/${productsGroups[i].id}" class="list-group-item"> ${productsGroups[i].name} </a>`
            }
            $("#sidebar").append(html);
        });
}
displaySidebar();