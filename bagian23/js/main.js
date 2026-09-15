import { state } from "./state.js";

import { products } from "./data.js";

import {
    linearSearch,
    binarySearch,
    groupByCategory
} from "./algorithms.js";

import { renderProducts } from "./ui.js";


// Masukkan data lokal ke state

state.products = products;


// Render

renderProducts(state.products);


// Testing algorithm

console.log(
    "Linear Search:",
    linearSearch(state.products, 2)
);


console.log(
    "Binary Search:",
    binarySearch(state.products, 2)
);


console.log(
    "Group By Category:",
    groupByCategory(state.products)
);

// PROMISE

const productPromise = new Promise(
    (resolve, reject) => {

        const success = true;

        if (success) {

            resolve(
                "Data produk berhasil diproses"
            );

        } else {

            reject(
                "Terjadi error"
            );

        }

    }
);


productPromise

    .then(result => {
        console.log(result);
    })

    .catch(error => {
        console.error(error);
    })

    .finally(() => {
        console.log("Promise selesai");
    });

async function loadProducts() {

    try {

        state.status = "loading";

        console.log("Loading...");


        // Simulasi data asynchronous

        const data = await Promise.resolve(products);


        state.products = data;

        state.status = "success";


        renderProducts(state.products);


    } catch (error) {

        state.status = "error";

        console.error(error);


    } finally {

        console.log(
            "Proses selesai"
        );

    }

}


loadProducts();