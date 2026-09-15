// ========================================
// BAGIAN 5 - MAP, FILTER, REDUCE
// ========================================

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


// ========================================
// 5.1 MAP
// Mengambil title dari setiap produk
// ========================================

const titles = products.map(product => product.title);

console.log("=== MAP ===");
console.log(titles);


// ========================================
// 5.2 FILTER
// Mengambil produk dengan harga > 500
// ========================================

const expensiveProducts = products.filter(product => product.price > 500);

console.log("\n=== FILTER ===");
console.log(expensiveProducts);


// ========================================
// 5.3 REDUCE
// Menghitung total stock
// ========================================

const totalStock = products.reduce(
    (sum, product) => sum + product.stock,
    0
);

console.log("\n=== REDUCE ===");
console.log("Total stock:", totalStock);


// ========================================
// 5.4 FILTER + MAP + REDUCE
// Rata-rata harga produk kategori laptops
// ========================================

const laptopPrices = products
    .filter(product => product.category === "laptops")
    .map(product => product.price);

const averageLaptopPrice =
    laptopPrices.reduce((sum, price) => sum + price, 0)
    / laptopPrices.length;

console.log("\n=== AVERAGE LAPTOP PRICE ===");
console.log("Harga laptop:", laptopPrices);
console.log("Rata-rata:", averageLaptopPrice);


// ========================================
// 5.5 GET STATISTICS
// ========================================

function getStatistics(products) {

    const totalProducts = products.length;

    const averagePrice =
        products.reduce((sum, product) => sum + product.price, 0)
        / products.length;

    const highestPrice = Math.max(
        ...products.map(product => product.price)
    );

    const lowestPrice = Math.min(
        ...products.map(product => product.price)
    );

    const totalStock = products.reduce(
        (sum, product) => sum + product.stock,
        0
    );

    const averageRating =
        products.reduce((sum, product) => sum + product.rating, 0)
        / products.length;

    return {
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating
    };
}

console.log("\n=== STATISTICS ===");
console.log(getStatistics(products));