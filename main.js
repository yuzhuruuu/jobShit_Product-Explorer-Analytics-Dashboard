// ==================================================
// ADVANCED JAVASCRIPT & DATA STRUCTURES
// BAGIAN 1 - 13
// ==================================================


// ==================================================
// BAGIAN 1 — JAVASCRIPT FUNDAMENTALS
// ==================================================


// 1.1 Menghitung harga setelah diskon

function calculateDiscountedPrice(
    price,
    discountPercent
) {
    return price -
        (price * discountPercent) / 100;
}


const finalPrice =
    calculateDiscountedPrice(1000, 20);


console.log("=== BAGIAN 1.1 ===");

console.log(
    "Harga setelah diskon:",
    finalPrice
);


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
            item.price -
            (
                item.price *
                item.discountPercent
            ) / 100;

        result.push({
            title: item.title,
            finalPrice: finalPrice
        });
    }

    return result;
}


console.log("\n=== BAGIAN 1.2 ===");

console.log(
    applyDiscounts(cart)
);


// ==================================================
// BAGIAN 2 — ARRAY OF OBJECTS
// ==================================================


const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "laptops",
        stock: 5,
        rating: 4.5,
        brand: "Lenovo"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "phones",
        stock: 15,
        rating: 4.2,
        brand: "Samsung"
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "audio",
        stock: 3,
        rating: 4.0,
        brand: "Sony"
    },
    {
        id: 4,
        title: "Gaming Laptop",
        price: 1500,
        category: "laptops",
        stock: 8,
        rating: 4.8,
        brand: "ASUS"
    }
];


// 2.1 Mencari produk berdasarkan ID

function findProductById(
    products,
    id
) {

    return products.find(
        product => product.id === id
    );
}


console.log("\n=== BAGIAN 2.1 ===");

console.log(
    findProductById(products, 2)
);


// 2.2 Produk dengan stok kurang dari 10

const lowStockProducts =
    products.filter(
        product => product.stock < 10
    );


console.log("\n=== BAGIAN 2.2 ===");

console.log(
    lowStockProducts
);


// 2.3 Update stock tanpa mutasi

function updateStock(
    products,
    id,
    newStock
) {

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


const updatedProducts =
    updateStock(
        products,
        1,
        20
    );


console.log("\n=== BAGIAN 2.3 ===");

console.log(
    "Data asli:"
);

console.log(products);

console.log(
    "Data setelah update:"
);

console.log(updatedProducts);


// ==================================================
// BAGIAN 3 — NESTED DATA
// ==================================================


const nestedProducts = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",
        brand: "Lenovo",

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
        brand: "Samsung",

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


// 3.1 Mengambil tags

const firstProductTags =
    nestedProducts[0].tags;


console.log("\n=== BAGIAN 3.1 ===");

console.log(
    "Tags Laptop:",
    firstProductTags
);


// 3.2 Mengakses dimensions

const laptopWidth =
    nestedProducts[0]
        .dimensions
        .width;


console.log("\n=== BAGIAN 3.2 ===");

console.log(
    "Lebar Laptop:",
    laptopWidth
);


// 3.3 Mencari produk berdasarkan tag

function findProductsByTag(
    products,
    tag
) {

    return products.filter(
        product =>
            product.tags.includes(tag)
    );
}


console.log("\n=== BAGIAN 3.3 ===");

console.log(
    findProductsByTag(
        nestedProducts,
        "electronics"
    )
);


// 3.4 Menghitung jumlah review

const reviewCounts =
    nestedProducts.map(product => {

        return {
            id: product.id,
            title: product.title,
            totalReviews:
                product.reviews.length
        };
    });


console.log("\n=== BAGIAN 3.4 ===");

console.log(reviewCounts);


// ==================================================
// BAGIAN 4 — FLATTENING DATA
// ==================================================


// 4.1 Semua tags

const allTags =
    nestedProducts.flatMap(
        product => product.tags
    );


console.log("\n=== BAGIAN 4.1 ===");

console.log(allTags);


// 4.2 Semua comments

const allComments =
    nestedProducts.flatMap(
        product =>
            product.reviews.map(
                review => review.comment
            )
    );


console.log("\n=== BAGIAN 4.2 ===");

console.log(allComments);


// ==================================================
// BAGIAN 5 — MAP, FILTER, REDUCE
// ==================================================


// 5.1 MAP

const productTitles =
    products.map(
        product => product.title
    );


console.log("\n=== BAGIAN 5.1 — MAP ===");

console.log(productTitles);


// 5.2 FILTER

const expensiveProducts =
    products.filter(
        product => product.price > 500
    );


console.log("\n=== BAGIAN 5.2 — FILTER ===");

console.log(expensiveProducts);


// 5.3 REDUCE

const totalStock =
    products.reduce(
        (sum, product) =>
            sum + product.stock,
        0
    );


console.log("\n=== BAGIAN 5.3 — REDUCE ===");

console.log(
    "Total stock:",
    totalStock
);


// 5.4 Kombinasi filter + map + reduce

const laptopPrices =
    products
        .filter(
            product =>
                product.category === "laptops"
        )
        .map(
            product => product.price
        );


const totalLaptopPrice =
    laptopPrices.reduce(
        (sum, price) =>
            sum + price,
        0
    );


const averageLaptopPrice =
    totalLaptopPrice /
    laptopPrices.length;


console.log(
    "\n=== BAGIAN 5.4 ==="
);

console.log(
    "Harga laptop:",
    laptopPrices
);

console.log(
    "Rata-rata:",
    averageLaptopPrice
);


// 5.5 Statistics

function getStatistics(products) {

    const totalProducts =
        products.length;


    const averagePrice =
        products.reduce(
            (sum, product) =>
                sum + product.price,
            0
        ) / products.length;


    const highestPrice =
        Math.max(
            ...products.map(
                product => product.price
            )
        );


    const lowestPrice =
        Math.min(
            ...products.map(
                product => product.price
            )
        );


    const totalStock =
        products.reduce(
            (sum, product) =>
                sum + product.stock,
            0
        );


    const averageRating =
        products.reduce(
            (sum, product) =>
                sum + product.rating,
            0
        ) / products.length;


    return {
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating
    };
}


console.log(
    "\n=== BAGIAN 5.5 — STATISTICS ==="
);

console.log(
    getStatistics(products)
);


// ==================================================
// BAGIAN 6 — LINEAR SEARCH
// ==================================================


function linearSearch(
    array,
    target
) {

    for (
        let i = 0;
        i < array.length;
        i++
    ) {

        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}


const numbers = [
    10,
    20,
    30,
    40,
    50
];


console.log(
    "\n=== BAGIAN 6.1 ==="
);

console.log(
    "Index 30:",
    linearSearch(numbers, 30)
);

console.log(
    "Index 99:",
    linearSearch(numbers, 99)
);


// 6.2 Search product by ID

function searchProductById(
    products,
    targetId
) {

    for (
        let i = 0;
        i < products.length;
        i++
    ) {

        if (
            products[i].id === targetId
        ) {
            return products[i];
        }
    }

    return -1;
}


console.log(
    "\n=== BAGIAN 6.2 ==="
);

console.log(
    searchProductById(products, 2)
);

console.log(
    searchProductById(products, 99)
);


// ==================================================
// BAGIAN 7 — BINARY SEARCH
// ==================================================


function binarySearch(
    array,
    target
) {

    let left = 0;

    let right =
        array.length - 1;


    while (left <= right) {

        const mid =
            Math.floor(
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


console.log(
    "\n=== BAGIAN 7.1 ==="
);

console.log(
    "Index 40:",
    binarySearch(
        sortedNumbers,
        40
    )
);

console.log(
    "Index 99:",
    binarySearch(
        sortedNumbers,
        99
    )
);


// 7.2 Binary Search berdasarkan harga

const productsSortedByPrice = [
    {
        id: 1,
        title: "Headphones",
        price: 100
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800
    },
    {
        id: 3,
        title: "Laptop",
        price: 1200
    },
    {
        id: 4,
        title: "Gaming Laptop",
        price: 1500
    }
];


function binarySearchByPrice(
    products,
    targetPrice
) {

    let left = 0;

    let right =
        products.length - 1;


    while (left <= right) {

        const mid =
            Math.floor(
                (left + right) / 2
            );


        if (
            products[mid].price ===
            targetPrice
        ) {

            return products[mid];
        }


        if (
            products[mid].price <
            targetPrice
        ) {

            left = mid + 1;

        } else {

            right = mid - 1;
        }
    }

    return -1;
}


console.log(
    "\n=== BAGIAN 7.2 ==="
);

console.log(
    binarySearchByPrice(
        productsSortedByPrice,
        1200
    )
);


// ==================================================
// BAGIAN 8 — SORTING
// ==================================================


// 8.1 Sorting angka

const numbersToSort = [
    5,
    3,
    8,
    1
];


const ascendingNumbers =
    [...numbersToSort]
        .sort(
            (a, b) => a - b
        );


const descendingNumbers =
    [...numbersToSort]
        .sort(
            (a, b) => b - a
        );


console.log(
    "\n=== BAGIAN 8.1 ==="
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

const productsByPrice =
    [...products].sort(
        (a, b) =>
            a.price - b.price
    );


console.log(
    "\n=== BAGIAN 8.2 ==="
);

console.log(productsByPrice);


// 8.3 Bubble Sort

function bubbleSort(numbers) {

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

            if (
                arr[j] >
                arr[j + 1]
            ) {

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


console.log(
    "\n=== BAGIAN 8.3 ==="
);

console.log(
    bubbleSort([
        5,
        3,
        8,
        1
    ])
);


// 8.4 Sorting products

function sortProducts(
    products,
    sortBy
) {

    const result =
        [...products];


    if (
        sortBy ===
        "price-asc"
    ) {

        return result.sort(
            (a, b) =>
                a.price - b.price
        );
    }


    if (
        sortBy ===
        "price-desc"
    ) {

        return result.sort(
            (a, b) =>
                b.price - a.price
        );
    }


    if (
        sortBy ===
        "rating"
    ) {

        return result.sort(
            (a, b) =>
                b.rating - a.rating
        );
    }


    if (
        sortBy ===
        "title"
    ) {

        return result.sort(
            (a, b) =>
                a.title.localeCompare(
                    b.title
                )
        );
    }


    return result;
}


console.log(
    "\n=== BAGIAN 8.4 ==="
);

console.log(
    "Price Asc:",
    sortProducts(
        products,
        "price-asc"
    )
);

console.log(
    "Price Desc:",
    sortProducts(
        products,
        "price-desc"
    )
);

console.log(
    "Rating:",
    sortProducts(
        products,
        "rating"
    )
);

console.log(
    "Title:",
    sortProducts(
        products,
        "title"
    )
);


// ==================================================
// BAGIAN 9 — GROUPING & AGGREGATION
// ==================================================


// 9.1 Grouping berdasarkan category

function groupByCategory(
    products
) {

    return products.reduce(
        (groups, product) => {

            const key =
                product.category;


            if (!groups[key]) {

                groups[key] = [];
            }


            groups[key].push(
                product
            );


            return groups;

        },
        {}
    );
}


const groupedProducts =
    groupByCategory(products);


console.log(
    "\n=== BAGIAN 9.1 ==="
);

console.log(
    groupedProducts
);


// 9.2 Ringkasan kategori

const categorySummary =
    Object.entries(
        groupedProducts
    ).map(
        ([category, products]) => {

            return {
                category,
                totalProducts:
                    products.length
            };
        }
    );


console.log(
    "\n=== BAGIAN 9.2 ==="
);

console.table(
    categorySummary
);


// ==================================================
// BAGIAN 10 — FREQUENCY COUNTING
// ==================================================


// 10.1 Function frequency

function countFrequency(
    array
) {

    return array.reduce(
        (counts, item) => {

            counts[item] =
                (counts[item] || 0) + 1;


            return counts;

        },
        {}
    );
}


// 10.2 Frequency category

const categoryValues =
    products.map(
        product =>
            product.category
    );


console.log(
    "\n=== BAGIAN 10.1 ==="
);

console.log(
    countFrequency(
        categoryValues
    )
);


// 10.3 Frequency rating

const ratingValues =
    products.map(
        product =>
            Math.round(
                product.rating
            )
    );


console.log(
    "\n=== BAGIAN 10.2 ==="
);

console.log(
    countFrequency(
        ratingValues
    )
);


// 10.4 Frequency tags

const frequencyTags =
    nestedProducts.flatMap(
        product =>
            product.tags
    );


console.log(
    "\n=== BAGIAN 10.3 ==="
);

console.log(
    countFrequency(
        frequencyTags
    )
);


// ==================================================
// BAGIAN 11 — SET
// ==================================================


// 11.1 Unique category

const uniqueCategories =
    [
        ...new Set(
            products.map(
                product =>
                    product.category
            )
        )
    ];


console.log(
    "\n=== BAGIAN 11.1 ==="
);

console.log(
    uniqueCategories
);


// 11.2 Unique brand

const uniqueBrands =
    [
        ...new Set(
            products.map(
                product =>
                    product.brand
            )
        )
    ];


console.log(
    "\n=== BAGIAN 11.2 ==="
);

console.log(
    uniqueBrands
);


// 11.3 Unique tags

const uniqueTags =
    [
        ...new Set(
            nestedProducts.flatMap(
                product =>
                    product.tags
            )
        )
    ];


console.log(
    "\n=== BAGIAN 11.3 ==="
);

console.log(
    uniqueTags
);


// 11.4 Set.has()

const categorySet =
    new Set(
        uniqueCategories
    );


console.log(
    "\n=== BAGIAN 11.4 ==="
);

console.log(
    "Ada laptops?",
    categorySet.has(
        "laptops"
    )
);

console.log(
    "Ada audio?",
    categorySet.has(
        "audio"
    )
);


// ==================================================
// BAGIAN 12 — MAP
// ==================================================


// 12.1 Membuat product lookup

function buildProductLookup(
    products
) {

    const productMap =
        new Map();


    for (
        const product of products
    ) {

        productMap.set(
            product.id,
            product
        );
    }


    return productMap;
}


const productLookup =
    buildProductLookup(
        products
    );


console.log(
    "\n=== BAGIAN 12.1 ==="
);

console.log(
    "Product ID 2:"
);

console.log(
    productLookup.get(2)
);


console.log(
    "Product ID 99:"
);

console.log(
    productLookup.get(99)
);


// 12.2 Mengecek key

console.log(
    "\n=== BAGIAN 12.2 ==="
);

console.log(
    "ID 2 tersedia?",
    productLookup.has(2)
);

console.log(
    "ID 99 tersedia?",
    productLookup.has(99)
);


// ==================================================
// BAGIAN 13 — STACK
// ==================================================


class Stack {

    constructor() {

        this.items = [];
    }


    push(item) {

        this.items.push(item);
    }


    pop() {

        return this.items.pop();
    }


    peek() {

        return this.items[
            this.items.length - 1
        ];
    }


    isEmpty() {

        return (
            this.items.length === 0
        );
    }
}


// 13.1 Search History

const searchHistory =
    new Stack();


searchHistory.push(
    "laptop"
);

searchHistory.push(
    "phone"
);

searchHistory.push(
    "tablet"
);


console.log(
    "\n=== BAGIAN 13.1 ==="
);

console.log(
    "Search history:",
    searchHistory.items
);


// 13.2 Peek

console.log(
    "\n=== BAGIAN 13.2 ==="
);

console.log(
    "Search terakhir:",
    searchHistory.peek()
);


// 13.3 Pop / Undo

console.log(
    "\n=== BAGIAN 13.3 ==="
);

console.log(
    "Undo:",
    searchHistory.pop()
);


console.log(
    "History setelah undo:",
    searchHistory.items
);


// 13.4 Cek kosong

console.log(
    "\n=== BAGIAN 13.4 ==="
);

console.log(
    "Apakah Stack kosong?",
    searchHistory.isEmpty()
);// =====================================================
// ADVANCED JAVASCRIPT & DATA STRUCTURES
// BAGIAN 1 - 17
// =====================================================


// =====================================================
// BAGIAN 1 — JAVASCRIPT FUNDAMENTALS
// =====================================================


function calculateDiscountedPrice(
    price,
    discountPercent
) {

    return price -
        (price * discountPercent) / 100;
}


const finalPrice =
    calculateDiscountedPrice(
        1000,
        20
    );


console.log(
    "=== BAGIAN 1.1 ==="
);

console.log(
    "Harga setelah diskon:",
    finalPrice
);


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


    for (
        const item of cart
    ) {

        const finalPrice =
            item.price -
            (
                item.price *
                item.discountPercent
            ) / 100;


        result.push({

            title: item.title,

            finalPrice:
                finalPrice

        });
    }


    return result;
}


console.log(
    "\n=== BAGIAN 1.2 ==="
);

console.log(
    applyDiscounts(cart)
);


// =====================================================
// BAGIAN 2 — ARRAY OF OBJECTS
// =====================================================


const products = [

    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "laptops",
        stock: 5,
        rating: 4.5,
        brand: "Lenovo"
    },

    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "phones",
        stock: 15,
        rating: 4.2,
        brand: "Samsung"
    },

    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "audio",
        stock: 3,
        rating: 4.0,
        brand: "Sony"
    },

    {
        id: 4,
        title: "Gaming Laptop",
        price: 1500,
        category: "laptops",
        stock: 8,
        rating: 4.8,
        brand: "ASUS"
    }
];


function findProductById(
    products,
    id
) {

    return products.find(
        product =>
            product.id === id
    );
}


console.log(
    "\n=== BAGIAN 2.1 ==="
);

console.log(
    findProductById(
        products,
        2
    )
);


const lowStockProducts =
    products.filter(
        product =>
            product.stock < 10
    );


console.log(
    "\n=== BAGIAN 2.2 ==="
);

console.log(
    lowStockProducts
);


function updateStock(
    products,
    id,
    newStock
) {

    return products.map(
        product => {

            if (
                product.id === id
            ) {

                return {

                    ...product,

                    stock:
                        newStock
                };
            }


            return product;
        }
    );
}


const updatedProducts =
    updateStock(
        products,
        1,
        20
    );


console.log(
    "\n=== BAGIAN 2.3 ==="
);

console.log(
    "Data asli:",
    products
);

console.log(
    "Data setelah update:",
    updatedProducts
);


// =====================================================
// BAGIAN 3 — NESTED DATA
// =====================================================


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
                comment:
                    "Good product"
            },

            {
                user: "B",
                rating: 4,
                comment:
                    "Worth it"
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
                comment:
                    "Nice camera"
            },

            {
                user: "D",
                rating: 5,
                comment:
                    "Fast"
            },

            {
                user: "E",
                rating: 3,
                comment:
                    "Battery so-so"
            }
        ]
    }
];


console.log(
    "\n=== BAGIAN 3.1 ==="
);

console.log(
    "Tags Laptop:",
    nestedProducts[0].tags
);


console.log(
    "\n=== BAGIAN 3.2 ==="
);

console.log(
    "Lebar Laptop:",
    nestedProducts[0]
        .dimensions
        .width
);


function findProductsByTag(
    products,
    tag
) {

    return products.filter(
        product =>
            product.tags.includes(tag)
    );
}


console.log(
    "\n=== BAGIAN 3.3 ==="
);

console.log(
    findProductsByTag(
        nestedProducts,
        "electronics"
    )
);


const reviewCounts =
    nestedProducts.map(
        product => {

            return {

                id:
                    product.id,

                title:
                    product.title,

                totalReviews:
                    product.reviews.length
            };
        }
    );


console.log(
    "\n=== BAGIAN 3.4 ==="
);

console.log(
    reviewCounts
);


// =====================================================
// BAGIAN 4 — FLATTENING DATA
// =====================================================


const allTags =
    nestedProducts.flatMap(
        product =>
            product.tags
    );


console.log(
    "\n=== BAGIAN 4.1 ==="
);

console.log(
    allTags
);


const allComments =
    nestedProducts.flatMap(
        product =>
            product.reviews.map(
                review =>
                    review.comment
            )
    );


console.log(
    "\n=== BAGIAN 4.2 ==="
);

console.log(
    allComments
);


// =====================================================
// BAGIAN 5 — MAP, FILTER, REDUCE
// =====================================================


const productTitles =
    products.map(
        product =>
            product.title
    );


console.log(
    "\n=== BAGIAN 5.1 ==="
);

console.log(
    productTitles
);


const expensiveProducts =
    products.filter(
        product =>
            product.price > 500
    );


console.log(
    "\n=== BAGIAN 5.2 ==="
);

console.log(
    expensiveProducts
);


const totalStock =
    products.reduce(
        (sum, product) =>
            sum + product.stock,
        0
    );


console.log(
    "\n=== BAGIAN 5.3 ==="
);

console.log(
    "Total stock:",
    totalStock
);


const laptopPrices =
    products

        .filter(
            product =>
                product.category ===
                "laptops"
        )

        .map(
            product =>
                product.price
        );


const averageLaptopPrice =
    laptopPrices.reduce(
        (sum, price) =>
            sum + price,
        0
    ) / laptopPrices.length;


console.log(
    "\n=== BAGIAN 5.4 ==="
);

console.log(
    "Harga laptop:",
    laptopPrices
);

console.log(
    "Rata-rata:",
    averageLaptopPrice
);


function getStatistics(
    products
) {

    const totalProducts =
        products.length;


    const averagePrice =
        products.reduce(
            (sum, product) =>
                sum + product.price,
            0
        ) / products.length;


    const highestPrice =
        Math.max(
            ...products.map(
                product =>
                    product.price
            )
        );


    const lowestPrice =
        Math.min(
            ...products.map(
                product =>
                    product.price
            )
        );


    const totalStock =
        products.reduce(
            (sum, product) =>
                sum + product.stock,
            0
        );


    const averageRating =
        products.reduce(
            (sum, product) =>
                sum + product.rating,
            0
        ) / products.length;


    return {

        totalProducts,

        averagePrice,

        highestPrice,

        lowestPrice,

        totalStock,

        averageRating
    };
}


console.log(
    "\n=== BAGIAN 5.5 ==="
);

console.log(
    getStatistics(products)
);


// =====================================================
// BAGIAN 6 — LINEAR SEARCH
// =====================================================


function linearSearch(
    array,
    target
) {

    for (
        let i = 0;
        i < array.length;
        i++
    ) {

        if (
            array[i] === target
        ) {

            return i;
        }
    }


    return -1;
}


const numbers = [
    10,
    20,
    30,
    40,
    50
];


console.log(
    "\n=== BAGIAN 6 ==="
);

console.log(
    "Index 30:",
    linearSearch(
        numbers,
        30
    )
);

console.log(
    "Index 99:",
    linearSearch(
        numbers,
        99
    )
);


function searchProductById(
    products,
    targetId
) {

    for (
        let i = 0;
        i < products.length;
        i++
    ) {

        if (
            products[i].id ===
            targetId
        ) {

            return products[i];
        }
    }


    return -1;
}


console.log(
    searchProductById(
        products,
        2
    )
);


// =====================================================
// BAGIAN 7 — BINARY SEARCH
// =====================================================


function binarySearch(
    array,
    target
) {

    let left = 0;

    let right =
        array.length - 1;


    while (
        left <= right
    ) {

        const mid =
            Math.floor(
                (left + right) / 2
            );


        if (
            array[mid] === target
        ) {

            return mid;
        }


        if (
            array[mid] < target
        ) {

            left =
                mid + 1;

        } else {

            right =
                mid - 1;
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


console.log(
    "\n=== BAGIAN 7 ==="
);

console.log(
    "Index 40:",
    binarySearch(
        sortedNumbers,
        40
    )
);

console.log(
    "Index 99:",
    binarySearch(
        sortedNumbers,
        99
    )
);


const productsSortedByPrice =
    [...products].sort(
        (a, b) =>
            a.price - b.price
    );


function binarySearchByPrice(
    products,
    targetPrice
) {

    let left = 0;

    let right =
        products.length - 1;


    while (
        left <= right
    ) {

        const mid =
            Math.floor(
                (left + right) / 2
            );


        if (
            products[mid].price ===
            targetPrice
        ) {

            return products[mid];
        }


        if (
            products[mid].price <
            targetPrice
        ) {

            left =
                mid + 1;

        } else {

            right =
                mid - 1;
        }
    }


    return -1;
}


console.log(
    binarySearchByPrice(
        productsSortedByPrice,
        1200
    )
);


// =====================================================
// BAGIAN 8 — SORTING
// =====================================================


const ascendingNumbers =
    [...numbers]
        .sort(
            (a, b) =>
                a - b
        );


const descendingNumbers =
    [...numbers]
        .sort(
            (a, b) =>
                b - a
        );


console.log(
    "\n=== BAGIAN 8.1 ==="
);

console.log(
    "Ascending:",
    ascendingNumbers
);

console.log(
    "Descending:",
    descendingNumbers
);


const productsByPrice =
    [...products].sort(
        (a, b) =>
            a.price - b.price
    );


console.log(
    "\n=== BAGIAN 8.2 ==="
);

console.log(
    productsByPrice
);


function bubbleSort(
    numbers
) {

    const arr =
        [...numbers];


    for (
        let i = 0;
        i < arr.length - 1;
        i++
    ) {

        for (
            let j = 0;
            j <
            arr.length - 1 - i;
            j++
        ) {

            if (
                arr[j] >
                arr[j + 1]
            ) {

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


console.log(
    "\n=== BAGIAN 8.3 ==="
);

console.log(
    bubbleSort([
        5,
        3,
        8,
        1
    ])
);


function sortProducts(
    products,
    sortBy
) {

    const result =
        [...products];


    if (
        sortBy ===
        "price-asc"
    ) {

        return result.sort(
            (a, b) =>
                a.price - b.price
        );
    }


    if (
        sortBy ===
        "price-desc"
    ) {

        return result.sort(
            (a, b) =>
                b.price - a.price
        );
    }


    if (
        sortBy ===
        "rating"
    ) {

        return result.sort(
            (a, b) =>
                b.rating - a.rating
        );
    }


    if (
        sortBy ===
        "title"
    ) {

        return result.sort(
            (a, b) =>
                a.title.localeCompare(
                    b.title
                )
        );
    }


    return result;
}


console.log(
    "\n=== BAGIAN 8.4 ==="
);

console.log(
    sortProducts(
        products,
        "price-asc"
    )
);


// =====================================================
// BAGIAN 9 — GROUPING
// =====================================================


function groupByCategory(
    products
) {

    return products.reduce(
        (
            groups,
            product
        ) => {

            const key =
                product.category;


            if (
                !groups[key]
            ) {

                groups[key] = [];
            }


            groups[key].push(
                product
            );


            return groups;

        },
        {}
    );
}


const groupedProducts =
    groupByCategory(
        products
    );


console.log(
    "\n=== BAGIAN 9 ==="
);

console.log(
    groupedProducts
);


// =====================================================
// BAGIAN 10 — FREQUENCY COUNTING
// =====================================================


function countFrequency(
    array
) {

    return array.reduce(
        (
            counts,
            item
        ) => {

            counts[item] =
                (
                    counts[item] ||
                    0
                ) + 1;


            return counts;

        },
        {}
    );
}


const categoryValues =
    products.map(
        product =>
            product.category
    );


console.log(
    "\n=== BAGIAN 10 ==="
);

console.log(
    countFrequency(
        categoryValues
    )
);


const ratingValues =
    products.map(
        product =>
            Math.round(
                product.rating
            )
    );


console.log(
    countFrequency(
        ratingValues
    )
);


const tagValues =
    nestedProducts.flatMap(
        product =>
            product.tags
    );


console.log(
    countFrequency(
        tagValues
    )
);


// =====================================================
// BAGIAN 11 — SET
// =====================================================


const uniqueCategories =
    [
        ...new Set(
            products.map(
                product =>
                    product.category
            )
        )
    ];


const uniqueBrands =
    [
        ...new Set(
            products.map(
                product =>
                    product.brand
            )
        )
    ];


const uniqueTags =
    [
        ...new Set(
            nestedProducts.flatMap(
                product =>
                    product.tags
            )
        )
    ];


console.log(
    "\n=== BAGIAN 11 ==="
);

console.log(
    "Unique Categories:",
    uniqueCategories
);

console.log(
    "Unique Brands:",
    uniqueBrands
);

console.log(
    "Unique Tags:",
    uniqueTags
);


const categorySet =
    new Set(
        uniqueCategories
    );


console.log(
    "Ada laptops?",
    categorySet.has(
        "laptops"
    )
);


// =====================================================
// BAGIAN 12 — MAP
// =====================================================


function buildProductLookup(
    products
) {

    const productMap =
        new Map();


    for (
        const product of products
    ) {

        productMap.set(
            product.id,
            product
        );
    }


    return productMap;
}


const productLookup =
    buildProductLookup(
        products
    );


console.log(
    "\n=== BAGIAN 12 ==="
);

console.log(
    productLookup.get(2)
);

console.log(
    "ID 2 tersedia?",
    productLookup.has(2)
);

console.log(
    "ID 99 tersedia?",
    productLookup.has(99)
);


// =====================================================
// BAGIAN 13 — STACK
// =====================================================


class Stack {

    constructor() {

        this.items = [];
    }


    push(item) {

        this.items.push(
            item
        );
    }


    pop() {

        return this.items.pop();
    }


    peek() {

        return this.items[
            this.items.length - 1
        ];
    }


    isEmpty() {

        return (
            this.items.length === 0
        );
    }
}


const searchHistory =
    new Stack();


searchHistory.push(
    "laptop"
);

searchHistory.push(
    "phone"
);

searchHistory.push(
    "tablet"
);


console.log(
    "\n=== BAGIAN 13 ==="
);

console.log(
    "History:",
    searchHistory.items
);

console.log(
    "Search terakhir:",
    searchHistory.peek()
);

console.log(
    "Undo:",
    searchHistory.pop()
);

console.log(
    "History:",
    searchHistory.items
);


// =====================================================
// BAGIAN 14 — QUEUE
// =====================================================


class Queue {

    constructor() {

        this.items = [];
    }


    enqueue(item) {

        this.items.push(
            item
        );
    }


    dequeue() {

        return this.items.shift();
    }


    peek() {

        return this.items[0];
    }


    isEmpty() {

        return (
            this.items.length === 0
        );
    }
}


const requestQueue =
    new Queue();


requestQueue.enqueue(
    "Request A"
);

requestQueue.enqueue(
    "Request B"
);

requestQueue.enqueue(
    "Request C"
);


console.log(
    "\n=== BAGIAN 14 ==="
);

console.log(
    "Queue:",
    requestQueue.items
);

console.log(
    "Peek:",
    requestQueue.peek()
);

console.log(
    "Diproses:",
    requestQueue.dequeue()
);

console.log(
    "Queue:",
    requestQueue.items
);


// =====================================================
// BAGIAN 15 — RECURSION
// =====================================================


function countdown(
    n
) {

    if (
        n <= 0
    ) {

        console.log(
            "Selesai"
        );

        return;
    }


    console.log(n);


    countdown(
        n - 1
    );
}


console.log(
    "\n=== BAGIAN 15.1 ==="
);

countdown(5);


const categories = [

    {
        name: "Electronics",

        children: [

            {
                name: "Computer",

                children: [

                    {
                        name: "Laptop",
                        children: []
                    },

                    {
                        name: "Desktop",
                        children: []
                    }
                ]
            },

            {
                name: "Phone",

                children: [

                    {
                        name: "Android",
                        children: []
                    },

                    {
                        name: "iPhone",
                        children: []
                    }
                ]
            }
        ]
    }
];


function printCategories(
    categories,
    depth = 0
) {

    for (
        const category of categories
    ) {

        console.log(
            " ".repeat(
                depth * 2
            ) +
            category.name
        );


        if (
            category.children.length > 0
        ) {

            printCategories(
                category.children,
                depth + 1
            );
        }
    }
}


console.log(
    "\n=== BAGIAN 15.2 ==="
);

printCategories(
    categories
);


// =====================================================
// BAGIAN 16 — BIG-O
// =====================================================


function linearSearchWithSteps(
    array,
    target
) {

    let steps = 0;


    for (
        let i = 0;
        i < array.length;
        i++
    ) {

        steps++;


        if (
            array[i] === target
        ) {

            return {
                index: i,
                steps: steps
            };
        }
    }


    return {
        index: -1,
        steps: steps
    };
}


function binarySearchWithSteps(
    array,
    target
) {

    let left = 0;

    let right =
        array.length - 1;

    let steps = 0;


    while (
        left <= right
    ) {

        steps++;


        const mid =
            Math.floor(
                (left + right) / 2
            );


        if (
            array[mid] === target
        ) {

            return {
                index: mid,
                steps: steps
            };
        }


        if (
            array[mid] < target
        ) {

            left =
                mid + 1;

        } else {

            right =
                mid - 1;
        }
    }


    return {
        index: -1,
        steps: steps
    };
}


const bigArray = [];


for (
    let i = 1;
    i <= 10000;
    i++
) {

    bigArray.push(i);
}


const targetValue = 9999;


const linearResult =
    linearSearchWithSteps(
        bigArray,
        targetValue
    );


const binaryResult =
    binarySearchWithSteps(
        bigArray,
        targetValue
    );


console.log(
    "\n=== BAGIAN 16 ==="
);

console.log(
    "Linear Search:",
    linearResult
);

console.log(
    "Binary Search:",
    binaryResult
);

console.log(
    "Linear Search → O(n)"
);

console.log(
    "Binary Search → O(log n)"
);

console.log(
    "Array index → O(1)"
);


// =====================================================
// BAGIAN 17 — DOM MANIPULATION
// =====================================================
//
// Bagian 17 membutuhkan browser.
// Function ini akan digunakan oleh index.html.
// =====================================================


function renderProducts(
    products
) {

    const container =
        document.querySelector(
            "#product-list"
        );


    if (!container) {

        return;
    }


    container.innerHTML = "";


    for (
        const product of products
    ) {

        const card =
            document.createElement(
                "div"
            );


        card.classList.add(
            "product-card"
        );


        card.innerHTML = `

            <h3>
                ${product.title}
            </h3>

            <p>
                Category:
                ${product.category}
            </p>

            <p>
                Harga:
                $${product.price}
            </p>

            <p>
                Rating:
                ${product.rating}
            </p>

        `;


        container.append(
            card
        );
    }
}
