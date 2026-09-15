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