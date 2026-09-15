import { state } from "./state.js";

import { products } from "./data.js";

import { renderProducts } from "./ui.js";


state.products = products;

renderProducts(state.products);


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