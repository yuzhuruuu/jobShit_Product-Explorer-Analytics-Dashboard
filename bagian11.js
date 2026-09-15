// Day 03 - Bagian 11
// Set


const products = [
    {
        id: 1,
        title: "Laptop",
        category: "laptops",
        brand: "Lenovo",
        tags: [
            "computer",
            "electronics",
            "office"
        ]
    },
    {
        id: 2,
        title: "Smartphone",
        category: "phones",
        brand: "Samsung",
        tags: [
            "mobile",
            "electronics"
        ]
    },
    {
        id: 3,
        title: "Gaming Laptop",
        category: "laptops",
        brand: "ASUS",
        tags: [
            "computer",
            "gaming",
            "electronics"
        ]
    },
    {
        id: 4,
        title: "Tablet",
        category: "phones",
        brand: "Samsung",
        tags: [
            "mobile",
            "electronics"
        ]
    }
];


// 11.1 Unique category

const uniqueCategories = [
    ...new Set(
        products.map(
            product => product.category
        )
    )
];


console.log("=== BAGIAN 11.1 ===");

console.log(
    "Unique categories:",
    uniqueCategories
);


// 11.2 Unique brand

const uniqueBrands = [
    ...new Set(
        products.map(
            product => product.brand
        )
    )
];


console.log("\n=== BAGIAN 11.2 ===");

console.log(
    "Unique brands:",
    uniqueBrands
);


// 11.3 Unique tags

const allTags = products.flatMap(
    product => product.tags
);

const uniqueTags = [
    ...new Set(allTags)
];


console.log("\n=== BAGIAN 11.3 ===");

console.log(
    "All tags:",
    allTags
);

console.log(
    "Unique tags:",
    uniqueTags
);


// 11.4 Mengecek apakah data ada di Set

const categorySet = new Set(
    uniqueCategories
);


console.log("\n=== BAGIAN 11.4 ===");

console.log(
    "Apakah laptops ada?",
    categorySet.has("laptops")
);

console.log(
    "Apakah audio ada?",
    categorySet.has("audio")
);