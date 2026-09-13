// Day 04 - Bagian 17
// DOM Manipulation


const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "laptops",
        rating: 4.5,
        thumbnail:
            "https://dummyjson.com/image/200x150"
    },

    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "phones",
        rating: 4.2,
        thumbnail:
            "https://dummyjson.com/image/200x150"
    },

    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "audio",
        rating: 4.0,
        thumbnail:
            "https://dummyjson.com/image/200x150"
    },

    {
        id: 4,
        title: "Gaming Laptop",
        price: 1500,
        category: "laptops",
        rating: 4.8,
        thumbnail:
            "https://dummyjson.com/image/200x150"
    },

    {
        id: 5,
        title: "Tablet",
        price: 600,
        category: "phones",
        rating: 4.3,
        thumbnail:
            "https://dummyjson.com/image/200x150"
    }
];


// 17.1 Function untuk render produk

function renderProducts(products) {

    const container =
        document.querySelector(
            "#product-list"
        );


    // Kosongkan container
    container.innerHTML = "";


    // Loop setiap produk
    for (
        const product of products
    ) {

        // Buat div card
        const card =
            document.createElement(
                "div"
            );


        // Tambahkan class
        card.classList.add(
            "product-card"
        );


        // Isi card
        card.innerHTML = `

            <img
                src="${product.thumbnail}"
                alt="${product.title}"
            >

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


        // Masukkan card ke container
        container.append(card);
    }
}


// 17.2 Render 5 produk

renderProducts(products);