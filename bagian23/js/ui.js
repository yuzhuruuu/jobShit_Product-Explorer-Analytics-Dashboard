import { formatPrice } from "./utils.js";


export function renderProducts(products) {

    const container =
        document.querySelector("#product-list");

    container.innerHTML = "";

    products.forEach(product => {

        const card =
            document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <h2>${product.title}</h2>

            <p>
                Category: ${product.category}
            </p>

            <p>
                Price: ${formatPrice(product.price)}
            </p>

            <p>
                Rating: ${product.rating}
            </p>

            <p>
                Stock: ${product.stock}
            </p>
        `;

        container.append(card);

    });

}