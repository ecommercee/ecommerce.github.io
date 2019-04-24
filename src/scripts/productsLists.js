//CREATE PRODUCT LIST HOME
function createProductList() {
    fetch('http://localhost:8080/v1/product/getProducts')
        .then(function (response) {
            return response.json();
        })
        .then(function (productsList) {
            let html = '';
            for (let i = 0; i < productsList.length; i++) {
                html += `
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card h-100">
                            <a href="/product/${productsList[i].id}"><img class="card-img-top" src="http://placehold.it/250x250" alt=""></a>
                            <div class="card-body">
                                <h4 class="card-title">
                                    <a href="/product">${productsList[i].name}</a>
                                </h4>
                                <h5>$${productsList[i].price}</h5>
                            </div>
                        </div>
                    </div>
                `
            }
            $("#products").append(html);
        });
}
createProductList();