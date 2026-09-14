const state = {
    products: [
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
    ],

    search: "",
    category: "all",
    sortBy: "default",
    favorites: [],
    status: "success"
};

function render() {
    const container = document.querySelector("#product-list");
    const status = document.querySelector("#status");

    container.innerHTML = "";

    let products = state.products;

    if (state.search !== "") {
        products = products.filter(product =>
            product.title
                .toLowerCase()
                .includes(state.search.toLowerCase())
        );
    }

    if (state.category !== "all") {
        products = products.filter(product =>
            product.category === state.category
        );
    }

    for (const product of products) {
        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
            <p>Rating: ${product.rating}</p>
            <p>Stock: ${product.stock}</p>
        `;

        container.append(card);
    }

    status.textContent =
        `${products.length} product(s) displayed.`;
}

render();