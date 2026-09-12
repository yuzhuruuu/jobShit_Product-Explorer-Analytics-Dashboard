// Day 03 - Bagian 13
// Stack (LIFO)


// 13.1 Membuat Stack

class Stack {

    constructor() {
        this.items = [];
    }


    // Menambahkan item
    push(item) {
        this.items.push(item);
    }


    // Mengambil item terakhir
    pop() {
        return this.items.pop();
    }


    // Melihat item terakhir
    peek() {
        return this.items[
            this.items.length - 1
        ];
    }


    // Mengecek apakah Stack kosong
    isEmpty() {
        return this.items.length === 0;
    }
}


const stack = new Stack();


// 13.2 Menambahkan data

stack.push("laptop");
stack.push("phone");
stack.push("tablet");


console.log("=== BAGIAN 13.1 ===");

console.log(
    "Isi Stack:",
    stack.items
);


// 13.3 Melihat item paling atas

console.log("\n=== BAGIAN 13.2 ===");

console.log(
    "Item paling atas:",
    stack.peek()
);


// 13.4 Mengambil item terakhir

console.log("\n=== BAGIAN 13.3 ===");

console.log(
    "Item yang diambil:",
    stack.pop()
);

console.log(
    "Isi Stack setelah pop:",
    stack.items
);


// 13.5 Search History

const searchHistory = new Stack();

searchHistory.push("laptop");
searchHistory.push("phone");
searchHistory.push("tablet");


console.log("\n=== BAGIAN 13.4 ===");

console.log(
    "Search history:",
    searchHistory.items
);


console.log(
    "Undo search:",
    searchHistory.pop()
);


console.log(
    "Search history setelah undo:",
    searchHistory.items
);