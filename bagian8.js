// BAGIAN 8 - SORTING

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        rating: 4.0
    },
    {
        id: 4,
        title: "Gaming Laptop",
        price: 1500,
        rating: 4.8
    }
];

// 8.1 SORT ANGKA

const numbers = [5, 3, 8, 1];

const ascendingNumbers = [...numbers].sort((a, b) => a - b);

const descendingNumbers = [...numbers].sort((a, b) => b - a);

console.log("=== SORT NUMBERS ===");
console.log("Ascending:", ascendingNumbers);
console.log("Descending:", descendingNumbers);

// 8.2 SORT PRODUCT BY PRICE

const productsByPrice = [...products].sort(
    (a, b) => a.price - b.price
);

console.log("\n=== SORT PRODUCT BY PRICE ===");
console.log(productsByPrice);

// 8.3 BUBBLE SORT

function bubbleSort(numbers) {

    // Membuat array baru agar array asli tidak berubah
    const arr = [...numbers];

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {

                [arr[j], arr[j + 1]] =
                    [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}


console.log("\n=== BUBBLE SORT ===");

console.log(
    bubbleSort([5, 3, 8, 1])
);


// 8.4 SORT PRODUCTS

function sortProducts(products, sortBy) {

    const result = [...products];

    if (sortBy === "price-asc") {

        return result.sort(
            (a, b) => a.price - b.price
        );

    }

    if (sortBy === "price-desc") {

        return result.sort(
            (a, b) => b.price - a.price
        );

    }

    if (sortBy === "rating") {

        return result.sort(
            (a, b) => b.rating - a.rating
        );

    }

    if (sortBy === "title") {

        return result.sort(
            (a, b) => a.title.localeCompare(b.title)
        );

    }

    return result;
}


// TEST SORT PRODUCTS

console.log("\n=== SORT PRODUCTS ===");

console.log(
    "Price Asc:",
    sortProducts(products, "price-asc")
);

console.log(
    "Price Desc:",
    sortProducts(products, "price-desc")
);

console.log(
    "Rating:",
    sortProducts(products, "rating")
);

console.log(
    "Title:",
    sortProducts(products, "title")
);