// Day 03 - Bagian 12
// Map


const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "laptops"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "phones"
    },
    {
        id: 3,
        title: "Gaming Laptop",
        price: 1500,
        category: "laptops"
    },
    {
        id: 4,
        title: "Headphones",
        price: 100,
        category: "audio"
    }
];


// 12.1 Membuat Map sederhana

const productMap = new Map();

productMap.set(1, "Laptop");
productMap.set(2, "Smartphone");
productMap.set(3, "Gaming Laptop");


console.log("=== BAGIAN 12.1 ===");

console.log(
    "Product ID 2:",
    productMap.get(2)
);

console.log(
    "Product ID 99:",
    productMap.get(99)
);


// 12.2 Membuat product lookup

function buildProductLookup(products) {

    const productMap = new Map();

    for (const product of products) {

        productMap.set(
            product.id,
            product
        );
    }

    return productMap;
}


const productLookup =
    buildProductLookup(products);


console.log("\n=== BAGIAN 12.2 ===");

console.log(
    "Product ID 1:"
);

console.log(
    productLookup.get(1)
);


console.log(
    "Product ID 3:"
);

console.log(
    productLookup.get(3)
);


console.log(
    "Product ID 99:"
);

console.log(
    productLookup.get(99)
);


// 12.3 Mengecek apakah ID tersedia

console.log("\n=== BAGIAN 12.3 ===");

console.log(
    "ID 2 tersedia?",
    productLookup.has(2)
);

console.log(
    "ID 99 tersedia?",
    productLookup.has(99)
);