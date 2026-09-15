const products = [
    {
        title: "Laptop",
        tags: ["electronics", "computer"],
        reviews: [
            { rating: 5, comment: "Laptop bagus" },
            { rating: 4, comment: "Performanya baik" }
        ]
    },
    {
        title: "Smartphone",
        tags: ["electronics", "mobile"],
        reviews: [
            { rating: 5, comment: "Kameranya bagus" }
        ]
    }
];

// Semua tags
const allTags = products.flatMap(product => product.tags);

console.log("Semua tags:", allTags);

// Semua komentar review
const allComments = products.flatMap(product =>
    product.reviews.map(review => review.comment)
);

console.log("Semua komentar:", allComments);