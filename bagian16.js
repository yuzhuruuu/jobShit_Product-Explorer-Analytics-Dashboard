// Day 04 - Bagian 16
// Algorithm Complexity / Big-O


// 16.1 Linear Search dengan penghitung langkah

function linearSearchWithSteps(
    array,
    target
) {

    let steps = 0;


    for (
        let i = 0;
        i < array.length;
        i++
    ) {

        steps++;


        if (
            array[i] === target
        ) {

            return {
                index: i,
                steps: steps
            };
        }
    }


    return {
        index: -1,
        steps: steps
    };
}


// 16.2 Binary Search dengan penghitung langkah

function binarySearchWithSteps(
    array,
    target
) {

    let left = 0;

    let right =
        array.length - 1;

    let steps = 0;


    while (left <= right) {

        steps++;


        const mid =
            Math.floor(
                (left + right) / 2
            );


        if (
            array[mid] === target
        ) {

            return {
                index: mid,
                steps: steps
            };
        }


        if (
            array[mid] < target
        ) {

            left = mid + 1;

        } else {

            right = mid - 1;
        }
    }


    return {
        index: -1,
        steps: steps
    };
}


// 16.3 Membuat array 10.000 elemen

const numbers = [];

for (
    let i = 1;
    i <= 10000;
    i++
) {

    numbers.push(i);
}


const target = 9999;


// 16.4 Membandingkan Linear Search

const linearResult =
    linearSearchWithSteps(
        numbers,
        target
    );


// 16.5 Membandingkan Binary Search

const binaryResult =
    binarySearchWithSteps(
        numbers,
        target
    );


console.log(
    "=== BAGIAN 16 ==="
);


console.log(
    "Target:",
    target
);


console.log(
    "Linear Search:",
    linearResult
);


console.log(
    "Binary Search:",
    binaryResult
);


console.log(
    "\nComplexity:"
);

console.log(
    "Linear Search → O(n)"
);

console.log(
    "Binary Search → O(log n)"
);


// 16.6 Contoh O(1)

const firstNumber =
    numbers[0];


console.log(
    "\nO(1) Array Index:"
);

console.log(
    firstNumber
);