import { state } from "./state.js";

import { fetchProducts } from "./api.js";

import { renderProducts } from "./ui.js";

import {
    getStatistics
} from "./algorithms.js";


async function loadProducts() {

    try {

        state.status = "loading";


        const products =
            await fetchProducts();


        state.products = products;

        state.status = "success";


        renderProducts(
            state.products
        );


        const statistics =
            getStatistics(
                state.products
            );


        console.log(
            "Statistics:",
            statistics
        );


    } catch (error) {

        state.status = "error";

        console.error(error);

    }

}


loadProducts();