// BAGIAN 7 - BINARY SEARCH

// 7.1 BINARY SEARCH

function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}


// TEST BINARY SEARCH

const numbers = [
    10,
    20,
    30,
    40,
    50,
    60,
    70
];

console.log("=== BINARY SEARCH ===");

console.log("Index 40:", binarySearch(numbers, 40));
console.log("Index 60:", binarySearch(numbers, 60));
console.log("Index 99:", binarySearch(numbers, 99));


// 7.2 BINARY SEARCH BY PRODUCT PRICE 

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 500
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800
    },
    {
        id: 3,
        title: "Gaming Laptop",
        price: 1200
    },
    {
        id: 4,
        title: "Monitor",
        price: 1500
    }
];


function binarySearchByPrice(products, targetPrice) {

    let left = 0;
    let right = products.length - 1;

    while (left <= right) {

        const mid = Math.floor((left + right) / 2);

        if (products[mid].price === targetPrice) {
            return products[mid];
        }

        if (products[mid].price < targetPrice) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}


console.log("\n=== BINARY SEARCH BY PRICE ===");

console.log(
    "Price 1200:",
    binarySearchByPrice(products, 1200)
);

console.log(
    "Price 999:",
    binarySearchByPrice(products, 999)
);