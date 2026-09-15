// Day 03 - Bagian 9
// Grouping dan Aggregation


const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "laptops",
        stock: 10,
        rating: 4.5
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "phones",
        stock: 15,
        rating: 4.2
    },
    {
        id: 3,
        title: "Gaming Laptop",
        price: 1500,
        category: "laptops",
        stock: 5,
        rating: 4.8
    },
    {
        id: 4,
        title: "Headphones",
        price: 100,
        category: "audio",
        stock: 20,
        rating: 4.0
    }
];


// 9.1 Grouping berdasarkan category

function groupByCategory(products) {

    return products.reduce(
        (groups, product) => {

            const key = product.category;

            if (!groups[key]) {
                groups[key] = [];
            }

            groups[key].push(product);

            return groups;

        },
        {}
    );
}


const groupedProducts = groupByCategory(products);

console.log("=== BAGIAN 9.1 ===");
console.log(groupedProducts);


// 9.2 Ringkasan jumlah produk per kategori

const categorySummary = Object.entries(
    groupedProducts
).map(([category, products]) => {

    return {
        category: category,
        totalProducts: products.length
    };

});


console.log("\n=== BAGIAN 9.2 ===");
console.table(categorySummary);