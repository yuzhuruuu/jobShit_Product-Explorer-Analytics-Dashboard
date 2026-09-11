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

// BAGIAN 5 — MAP, FILTER, REDUCE

const productsDay2 = [
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


// 5.1 MAP
// Mengambil semua nama produk

const productTitles = productsDay2.map(
    product => product.title
);

console.log("\n=== BAGIAN 5.1 — MAP ===");
console.log("Daftar produk:");
console.log(productTitles);


// 5.2 FILTER
// Mengambil produk dengan harga lebih dari 500

const expensiveProducts = productsDay2.filter(
    product => product.price > 500
);

console.log("\n=== BAGIAN 5.2 — FILTER ===");
console.log("Produk dengan harga > 500:");
console.log(expensiveProducts);


// 5.3 REDUCE
// Menghitung total seluruh stock

const totalStock = productsDay2.reduce(
    (sum, product) => sum + product.stock,
    0
);

console.log("\n=== BAGIAN 5.3 — REDUCE ===");
console.log("Total stock:", totalStock);


// 5.4 FILTER + MAP + REDUCE
// Menghitung rata-rata harga laptop

const laptopPrices = productsDay2
    .filter(product => product.category === "laptops")
    .map(product => product.price);

const totalLaptopPrice = laptopPrices.reduce(
    (sum, price) => sum + price,
    0
);

const averageLaptopPrice =
    totalLaptopPrice / laptopPrices.length;

console.log("\n=== BAGIAN 5.4 — KOMBINASI ===");
console.log("Harga laptop:", laptopPrices);
console.log("Total harga laptop:", totalLaptopPrice);
console.log("Rata-rata harga laptop:", averageLaptopPrice);


// 5.5 STATISTICS
// Membuat fungsi untuk menghitung statistik produk

function getStatistics(products) {

    const totalProducts = products.length;

    const averagePrice =
        products.reduce(
            (sum, product) => sum + product.price,
            0
        ) / products.length;

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
        products.reduce(
            (sum, product) => sum + product.rating,
            0
        ) / products.length;

    return {
        totalProducts: totalProducts,
        averagePrice: averagePrice,
        highestPrice: highestPrice,
        lowestPrice: lowestPrice,
        totalStock: totalStock,
        averageRating: averageRating
    };
}

console.log("\n=== BAGIAN 5.5 — STATISTICS ===");
console.log(getStatistics(productsDay2));


// BAGIAN 6 — LINEAR SEARCH


// 6.1 Linear Search pada array angka

function linearSearch(array, target) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}


const numbers = [10, 20, 30, 40, 50];

console.log("\n=== BAGIAN 6.1 — LINEAR SEARCH ===");

console.log(
    "Index angka 30:",
    linearSearch(numbers, 30)
);

console.log(
    "Index angka 50:",
    linearSearch(numbers, 50)
);

console.log(
    "Index angka 99:",
    linearSearch(numbers, 99)
);


// 6.2 Linear Search pada data produk

function searchProductById(products, targetId) {

    for (let i = 0; i < products.length; i++) {

        if (products[i].id === targetId) {
            return products[i];
        }
    }

    return -1;
}

console.log("\n=== BAGIAN 6.2 — SEARCH PRODUCT ===");

console.log(
    "Produk dengan ID 2:",
    searchProductById(productsDay2, 2)
);

console.log(
    "Produk dengan ID 99:",
    searchProductById(productsDay2, 99)
);


// BAGIAN 7 — BINARY SEARCH


// 7.1 Binary Search pada array angka

function binarySearch(array, target) {

    let left = 0;
    let right = array.length - 1;

    while (left <= right) {

        const mid = Math.floor(
            (left + right) / 2
        );

        if (array[mid] === target) {
            return mid;
        }

        if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}


const sortedNumbers = [
    10,
    20,
    30,
    40,
    50,
    60,
    70
];

console.log("\n=== BAGIAN 7.1 — BINARY SEARCH ===");

console.log(
    "Index angka 40:",
    binarySearch(sortedNumbers, 40)
);

console.log(
    "Index angka 60:",
    binarySearch(sortedNumbers, 60)
);

console.log(
    "Index angka 99:",
    binarySearch(sortedNumbers, 99)
);


// 7.2 Binary Search berdasarkan harga produk

const productsSortedByPrice = [
    {
        id: 1,
        title: "Laptop",
        price: 500
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800
    },
    {
        id: 3,
        title: "Gaming Laptop",
        price: 1200
    },
    {
        id: 4,
        title: "Monitor",
        price: 1500
    }
];


function binarySearchByPrice(products, targetPrice) {

    let left = 0;
    let right = products.length - 1;

    while (left <= right) {

        const mid = Math.floor(
            (left + right) / 2
        );

        if (products[mid].price === targetPrice) {
            return products[mid];
        }

        if (products[mid].price < targetPrice) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}


console.log("\n=== BAGIAN 7.2 — BINARY SEARCH PRODUCT ===");

console.log(
    "Produk dengan harga 1200:",
    binarySearchByPrice(
        productsSortedByPrice,
        1200
    )
);

console.log(
    "Produk dengan harga 999:",
    binarySearchByPrice(
        productsSortedByPrice,
        999
    )
);


// BAGIAN 8 — SORTING


// 8.1 Sorting angka menggunakan .sort()

const numbersToSort = [
    5,
    3,
    8,
    1
];

const ascendingNumbers = [
    ...numbersToSort
].sort((a, b) => a - b);

const descendingNumbers = [
    ...numbersToSort
].sort((a, b) => b - a);


console.log("\n=== BAGIAN 8.1 — SORTING ANGKA ===");

console.log(
    "Data asli:",
    numbersToSort
);

console.log(
    "Ascending:",
    ascendingNumbers
);

console.log(
    "Descending:",
    descendingNumbers
);


// 8.2 Sorting produk berdasarkan harga

const productsByPrice = [
    ...productsDay2
].sort(
    (a, b) => a.price - b.price
);

console.log("\n=== BAGIAN 8.2 — SORT PRODUCT BY PRICE ===");

console.log(productsByPrice);


// 8.3 Bubble Sort

function bubbleSort(numbers) {

    // Copy array supaya array asli tidak berubah
    const arr = [...numbers];

    for (
        let i = 0;
        i < arr.length - 1;
        i++
    ) {

        for (
            let j = 0;
            j < arr.length - 1 - i;
            j++
        ) {

            if (arr[j] > arr[j + 1]) {

                [
                    arr[j],
                    arr[j + 1]
                ] = [
                    arr[j + 1],
                    arr[j]
                ];
            }
        }
    }

    return arr;
}


console.log("\n=== BAGIAN 8.3 — BUBBLE SORT ===");

console.log(
    "Hasil Bubble Sort:",
    bubbleSort([5, 3, 8, 1])
);


// 8.4 Sorting produk berdasarkan beberapa kriteria

function sortProducts(products, sortBy) {

    // Copy array supaya data asli tidak berubah
    const result = [...products];


    // Harga: kecil → besar
    if (sortBy === "price-asc") {

        return result.sort(
            (a, b) => a.price - b.price
        );
    }


    // Harga: besar → kecil
    if (sortBy === "price-desc") {

        return result.sort(
            (a, b) => b.price - a.price
        );
    }


    // Rating: tinggi → rendah
    if (sortBy === "rating") {

        return result.sort(
            (a, b) => b.rating - a.rating
        );
    }


    // Judul: A → Z
    if (sortBy === "title") {

        return result.sort(
            (a, b) =>
                a.title.localeCompare(b.title)
        );
    }


    // Jika sortBy tidak dikenali
    return result;
}


console.log("\n=== BAGIAN 8.4 — SORT PRODUCTS ===");

console.log(
    "Harga termurah:",
    sortProducts(
        productsDay2,
        "price-asc"
    )
);

console.log(
    "Harga termahal:",
    sortProducts(
        productsDay2,
        "price-desc"
    )
);

console.log(
    "Rating tertinggi:",
    sortProducts(
        productsDay2,
        "rating"
    )
);

console.log(
    "Judul A-Z:",
    sortProducts(
        productsDay2,
        "title"
    )
);