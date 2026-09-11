// BAGIAN 6 - LINEAR SEARCH
// 6.1 LINEAR SEARCH

function linearSearch(array, target) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] === target) {
            return i;
        }

    }

    return -1;
}


// TEST LINEAR SEARCH

const numbers = [10, 20, 30, 40, 50];

console.log("=== LINEAR SEARCH ===");

console.log("Index 30:", linearSearch(numbers, 30));
console.log("Index 50:", linearSearch(numbers, 50));
console.log("Index 99:", linearSearch(numbers, 99));


// 6.2 SEARCH PRODUCT BY ID

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800
    },
    {
        id: 3,
        title: "Headphones",
        price: 100
    }
];


function searchProductById(products, targetId) {

    for (let i = 0; i < products.length; i++) {

        if (products[i].id === targetId) {
            return products[i];
        }

    }

    return -1;
}


console.log("\n=== SEARCH PRODUCT ===");

console.log(
    "Product ID 2:",
    searchProductById(products, 2)
);

console.log(
    "Product ID 99:",
    searchProductById(products, 99)
);