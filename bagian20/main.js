const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "laptops",
        rating: 4.5,
        stock: 10
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "phones",
        rating: 4.2,
        stock: 15
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "audio",
        rating: 4.0,
        stock: 3
    }
];


// ARROW FUNCTION

const getTitle = product => product.title;


// DESTRUCTURING

const firstProduct = products[0];

const {
    title,
    price,
    category
} = firstProduct;

console.log(title);
console.log(price);
console.log(category);


// SPREAD

const updatedProduct = {
    ...firstProduct,
    stock: 20
};

console.log(updatedProduct);


// REST PARAMETER

function sumPrices(...prices) {

    return prices.reduce(
        (total, price) => total + price,
        0
    );

}

console.log(sumPrices(100, 200, 300));


// OPTIONAL CHAINING + NULLISH COALESCING

const productWithoutDimension = {};

const width =
    productWithoutDimension.dimensions?.width
    ?? "Tidak diketahui";

console.log(width);


// DEFAULT PARAMETER

function filterByCategory(
    products,
    category = "all"
) {

    if (category === "all") {
        return products;
    }

    return products.filter(
        product => product.category === category
    );

}


// STATISTICS

function getStatistics(products) {

    if (products.length === 0) {

        return {
            totalProducts: 0,
            averagePrice: 0,
            totalStock: 0,
            averageRating: 0
        };

    }

    const totalProducts = products.length;

    const totalPrice = products.reduce(
        (sum, { price }) => sum + price,
        0
    );

    const totalStock = products.reduce(
        (sum, { stock = 0 }) => sum + stock,
        0
    );

    const totalRating = products.reduce(
        (sum, { rating = 0 }) => sum + rating,
        0
    );

    return {
        totalProducts,
        averagePrice: totalPrice / totalProducts,
        totalStock,
        averageRating: totalRating / totalProducts
    };

}


const statistics = getStatistics(products);

document.querySelector("#statistics").innerHTML = `
    <h3>Statistics</h3>

    <p>Total Products: ${statistics.totalProducts}</p>

    <p>
        Average Price:
        $${statistics.averagePrice.toFixed(2)}
    </p>

    <p>
        Total Stock:
        ${statistics.totalStock}
    </p>

    <p>
        Average Rating:
        ${statistics.averageRating.toFixed(2)}
    </p>
`;


// RENDER PRODUCTS

function renderProducts(products) {

    const container =
        document.querySelector("#product-list");

    container.innerHTML = "";

    products.forEach(product => {

        const card =
            document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <h2>${product.title}</h2>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
            <p>Stock: ${product.stock}</p>
        `;

        container.append(card);

    });

}


renderProducts(products);