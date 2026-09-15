export async function fetchProducts() {

    const response = await fetch(
        "https://dummyjson.com/products?limit=30"
    );

    const data = await response.json();

    return data.products;

}