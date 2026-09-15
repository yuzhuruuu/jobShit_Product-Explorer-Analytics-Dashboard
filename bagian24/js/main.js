import { state } from "./state.js";

import { fetchProducts } from "./api.js";

import { renderProducts } from "./ui.js";


async function loadProducts() {

    try {

        state.status = "loading";

        console.log(
            "Loading products..."
        );


        const products =
            await fetchProducts();


        state.products = products;

        state.status = "success";


        renderProducts(
            state.products
        );


    } catch (error) {

        state.status = "error";

        console.error(error);


        document.querySelector(
            "#product-list"
        ).innerHTML = `
            <p>
                Failed to load products.
            </p>
        `;

    }

}


loadProducts();