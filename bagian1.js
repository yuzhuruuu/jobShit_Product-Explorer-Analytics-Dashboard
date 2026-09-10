function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}

const finalPrice = calculateDiscountedPrice(1000, 20);

console.log("Harga setelah diskon:", finalPrice);