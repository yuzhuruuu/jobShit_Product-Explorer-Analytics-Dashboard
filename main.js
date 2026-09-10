// Day 01 - Bagian 1 sampai 4

// BAGIAN 1 — JAVASCRIPT FUNDAMENTALS

// 1.1 Menghitung harga setelah diskon

function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}

// Contoh penggunaan
const finalPrice = calculateDiscountedPrice(1000, 20);

console.log("=== BAGIAN 1.1 ===");
console.log("Harga setelah diskon:", finalPrice);


// 1.2 Menghitung diskon untuk banyak produk

const cart = [
    {
        title: "Laptop",
        price: 1000,
        discountPercent: 10
    },
    {
        title: "Mouse",
        price: 20,
        discountPercent: 5
    },
    {
        title: "Keyboard",
        price: 50,
        discountPercent: 0
    }
];

function applyDiscounts(cart) {
    const result = [];

    for (const item of cart) {
        const finalPrice =
            item.price - (item.price * item.discountPercent) / 100;

        result.push({
            title: item.title,
            finalPrice: finalPrice
        });
    }

    return result;
}

console.log("\n=== BAGIAN 1.2 ===");
console.log(applyDiscounts(cart));


// BAGIAN 2 — ARRAY OF OBJECTS

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


// 2.1 Mencari produk berdasarkan ID

function findProductById(products, id) {
    return products.find(product => product.id === id);
}

console.log("\n=== BAGIAN 2.1 ===");
console.log(findProductById(products, 2));


// 2.2 Mencari produk dengan stok kurang dari 10

const lowStockProducts = products.filter(
    product => product.stock < 10
);

console.log("\n=== BAGIAN 2.2 ===");
console.log(lowStockProducts);


// 2.3 Mengubah stock tanpa memutasi array asli

function updateStock(products, id, newStock) {
    return products.map(product => {
        if (product.id === id) {
            return {
                ...product,
                stock: newStock
            };
        }

        return product;
    });
}

const updatedProducts = updateStock(products, 1, 20);

console.log("\n=== BAGIAN 2.3 ===");
console.log("Data asli:");
console.log(products);

console.log("Data setelah update:");
console.log(updatedProducts);


// BAGIAN 3 — NESTED DATA

const nestedProducts = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",

        tags: [
            "computer",
            "electronics",
            "office"
        ],

        dimensions: {
            width: 30,
            height: 2,
            depth: 20
        },

        reviews: [
            {
                user: "A",
                rating: 5,
                comment: "Good product"
            },
            {
                user: "B",
                rating: 4,
                comment: "Worth it"
            }
        ]
    },

    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones",

        tags: [
            "mobile",
            "electronics"
        ],

        dimensions: {
            width: 7,
            height: 0.8,
            depth: 15
        },

        reviews: [
            {
                user: "C",
                rating: 4,
                comment: "Nice camera"
            },
            {
                user: "D",
                rating: 5,
                comment: "Fast"
            },
            {
                user: "E",
                rating: 3,
                comment: "Battery so-so"
            }
        ]
    }
];


// 3.1 Mengambil semua tag dari produk

const firstProductTags = nestedProducts[0].tags;

console.log("\n=== BAGIAN 3.1 ===");
console.log("Tags Laptop:", firstProductTags);


// 3.2 Mengakses nested object dimensions

const laptopWidth = nestedProducts[0].dimensions.width;

console.log("\n=== BAGIAN 3.2 ===");
console.log("Lebar Laptop:", laptopWidth);


// 3.3 Mencari produk berdasarkan tag

function findProductsByTag(products, tag) {
    return products.filter(product =>
        product.tags.includes(tag)
    );
}

console.log("\n=== BAGIAN 3.3 ===");
console.log(
    findProductsByTag(nestedProducts, "electronics")
);


// 3.4 Menghitung jumlah review setiap produk

const reviewCounts = nestedProducts.map(product => {
    return {
        id: product.id,
        title: product.title,
        totalReviews: product.reviews.length
    };
});

console.log("\n=== BAGIAN 3.4 ===");
console.log(reviewCounts);


// BAGIAN 4 — FLATTENING DATA


// 4.1 Mengambil seluruh tags dengan flatMap()

const allTags = nestedProducts.flatMap(
    product => product.tags
);

console.log("\n=== BAGIAN 4.1 ===");
console.log(allTags);


// 4.2 Mengambil seluruh comment dari semua review

const allComments = nestedProducts.flatMap(product =>
    product.reviews.map(review => review.comment)
);

console.log("\n=== BAGIAN 4.2 ===");
console.log(allComments);