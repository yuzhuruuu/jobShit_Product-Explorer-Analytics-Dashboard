// Frequency Counting


// 10.1 Frequency Counting sederhana

const words = [
    "laptop",
    "phone",
    "laptop",
    "tablet",
    "phone",
    "laptop"
];


function countFrequency(array) {

    return array.reduce(
        (counts, item) => {

            counts[item] =
                (counts[item] || 0) + 1;

            return counts;

        },
        {}
    );
}


console.log("=== BAGIAN 10.1 ===");

console.log(
    countFrequency(words)
);


// 10.2 Frequency category

const products = [
    {
        id: 1,
        title: "Laptop",
        category: "laptops",
        rating: 4.5
    },
    {
        id: 2,
        title: "Smartphone",
        category: "phones",
        rating: 4.2
    },
    {
        id: 3,
        title: "Gaming Laptop",
        category: "laptops",
        rating: 4.8
    },
    {
        id: 4,
        title: "Headphones",
        category: "audio",
        rating: 4.0
    },
    {
        id: 5,
        title: "MacBook",
        category: "laptops",
        rating: 4.7
    }
];


const categories = products.map(
    product => product.category
);


console.log("\n=== BAGIAN 10.2 ===");

console.log(
    "Frequency category:"
);

console.log(
    countFrequency(categories)
);

// 10.3 Frequency rating
// Rating dibulatkan terlebih dahulu

const ratings = products.map(
    product => Math.round(product.rating)
);


console.log("\n=== BAGIAN 10.3 ===");

console.log(
    "Rating:",
    ratings
);

console.log(
    "Frequency rating:"
);

console.log(
    countFrequency(ratings)
);

// 10.4 Contoh frequency dengan tags

const nestedProducts = [
    {
        id: 1,
        title: "Laptop",
        tags: [
            "computer",
            "electronics",
            "office"
        ]
    },
    {
        id: 2,
        title: "Smartphone",
        tags: [
            "mobile",
            "electronics"
        ]
    },
    {
        id: 3,
        title: "Tablet",
        tags: [
            "mobile",
            "electronics",
            "office"
        ]
    }
];


const allTags = nestedProducts.flatMap(
    product => product.tags
);


console.log("\n=== BAGIAN 10.4 ===");

console.log(
    "All tags:",
    allTags
);

console.log(
    "Frequency tags:"
);

console.log(
    countFrequency(allTags)
);