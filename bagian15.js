// Day 04 - Bagian 15
// Recursion


// 15.1 Countdown dengan recursion

function countdown(n) {

    // Base case
    if (n <= 0) {
        console.log("Selesai");
        return;
    }


    console.log(n);


    // Recursive call
    countdown(n - 1);
}


console.log("=== BAGIAN 15.1 ===");

countdown(5);


// 15.2 Struktur kategori bertingkat

const categories = [
    {
        name: "Electronics",

        children: [
            {
                name: "Computer",

                children: [
                    {
                        name: "Laptop",
                        children: []
                    },
                    {
                        name: "Desktop",
                        children: []
                    }
                ]
            },

            {
                name: "Phone",

                children: [
                    {
                        name: "Android",
                        children: []
                    },
                    {
                        name: "iPhone",
                        children: []
                    }
                ]
            }
        ]
    }
];


// 15.3 Menampilkan kategori secara recursive

function printCategories(
    categories,
    depth = 0
) {

    for (const category of categories) {

        console.log(
            " ".repeat(depth * 2) +
            category.name
        );


        if (
            category.children.length > 0
        ) {

            printCategories(
                category.children,
                depth + 1
            );
        }
    }
}


console.log(
    "\n=== BAGIAN 15.2 ==="
);

printCategories(categories);