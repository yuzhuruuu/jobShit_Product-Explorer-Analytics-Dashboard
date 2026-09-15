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