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
    sortBy: "default"
};


function render() {

    let products = [...state.products];

    // SEARCH
    if (state.search !== "") {
        products = products.filter(product =>
            product.title
                .toLowerCase()
                .includes(state.search.toLowerCase())
        );
    }

    // CATEGORY
    if (state.category !== "all") {
        products = products.filter(product =>
            product.category === state.category
        );
    }

    // SORT
    if (state.sortBy === "price-low") {
        products.sort((a, b) => a.price - b.price);
    }

    if (state.sortBy === "price-high") {
        products.sort((a, b) => b.price - a.price);
    }

    if (state.sortBy === "rating-high") {
        products.sort((a, b) => b.rating - a.rating);
    }

    // RENDER
    const container = document.querySelector("#product-list");

    container.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");

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


// SEARCH EVENT

const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", event => {

    state.search = event.target.value;

    render();

});


// CATEGORY EVENT

const categorySelect = document.querySelector("#category-select");

categorySelect.addEventListener("change", event => {

    state.category = event.target.value;

    render();

});


// SORT EVENT

const sortSelect = document.querySelector("#sort-select");

sortSelect.addEventListener("change", event => {

    state.sortBy = event.target.value;

    render();

});


render();