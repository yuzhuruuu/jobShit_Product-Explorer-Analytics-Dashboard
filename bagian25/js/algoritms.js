export function linearSearch(array, target) {

    for (const item of array) {

        if (item.id === target) {
            return item;
        }

    }

    return null;
}


export function binarySearch(array, target) {

    let left = 0;

    let right = array.length - 1;

    while (left <= right) {

        const middle =
            Math.floor((left + right) / 2);

        if (array[middle].id === target) {
            return array[middle];
        }

        if (array[middle].id < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }

    }

    return null;
}


export function groupByCategory(products) {

    return products.reduce(
        (groups, product) => {

            const category =
                product.category;

            if (!groups[category]) {
                groups[category] = [];
            }

            groups[category].push(product);

            return groups;

        },
        {}
    );

}

export function getStatistics(products) {

    if (products.length === 0) {

        return {
            totalProducts: 0,
            averagePrice: 0,
            highestPrice: 0,
            lowestPrice: 0,
            totalStock: 0,
            averageRating: 0
        };

    }


    const totalProducts =
        products.length;


    const totalPrice =
        products.reduce(
            (sum, product) =>
                sum + product.price,
            0
        );


    const totalStock =
        products.reduce(
            (sum, product) =>
                sum + product.stock,
            0
        );


    const totalRating =
        products.reduce(
            (sum, product) =>
                sum + product.rating,
            0
        );


    const prices =
        products.map(
            product => product.price
        );


    return {

        totalProducts,

        averagePrice:
            totalPrice / totalProducts,

        highestPrice:
            Math.max(...prices),

        lowestPrice:
            Math.min(...prices),

        totalStock,

        averageRating:
            totalRating / totalProducts

    };

}