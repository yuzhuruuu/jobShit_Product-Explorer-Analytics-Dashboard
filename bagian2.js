const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "laptops",
        stock: 5
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "phones",
        stock: 15
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "audio",
        stock: 3
    }
];

const product = products.find(product => product.id === 2);

console.log("Produk ditemukan:", product);

const lowStockProducts = products.filter(product => product.stock < 10);

console.log("Produk stok rendah:", lowStockProducts);