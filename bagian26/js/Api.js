const BASE_URL = "https://dummyjson.com/products";

export async function fetchProducts(limit = 30) {
  const response = await fetch(`${BASE_URL}?limit=${limit}`);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();
  return data.products; 
}