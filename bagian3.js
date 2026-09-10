const products = [
    {
        id: 1,
        title: "Laptop",
        tags: ["electronics", "computer"],
        dimensions: {
            width: 35,
            height: 2
        },
        reviews: [
            {
                rating: 5,
                comment: "Laptop bagus"
            },
            {
                rating: 4,
                comment: "Performanya cukup baik"
            }
        ]
    },
    {
        id: 2,
        title: "Smartphone",
        tags: ["electronics", "mobile"],
        dimensions: {
            width: 7,
            height: 15
        },
        reviews: [
            {
                rating: 5,
                comment: "Kameranya bagus"
            }
        ]
    }
];

console.log("Tags Laptop:", products[0].tags);
console.log("Lebar Laptop:", products[0].dimensions.width);
console.log("Review pertama:", products[0].reviews[0].comment);

const productsWithElectronics = products.filter(product =>
    product.tags.includes("electronics")
);

console.log("Produk electronics:", productsWithElectronics);

const reviewCounts = products.map(product => ({
    title: product.title,
    totalReviews: product.reviews.length
}));

console.log("Jumlah review:", reviewCounts);