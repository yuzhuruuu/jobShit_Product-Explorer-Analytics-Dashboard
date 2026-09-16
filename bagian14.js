// Queue (FIFO)
// 14.1 Membuat Queue

class Queue {

    constructor() {
        this.items = [];
    }


    // Menambahkan item ke belakang
    enqueue(item) {
        this.items.push(item);
    }


    // Mengambil item paling depan
    dequeue() {
        return this.items.shift();
    }


    // Melihat item paling depan
    peek() {
        return this.items[0];
    }


    // Mengecek apakah Queue kosong
    isEmpty() {
        return this.items.length === 0;
    }
}


// 14.2 Membuat request queue

const requestQueue = new Queue();

requestQueue.enqueue("Request A");
requestQueue.enqueue("Request B");
requestQueue.enqueue("Request C");


console.log("=== BAGIAN 14.1 ===");

console.log(
    "Isi Queue:",
    requestQueue.items
);


// 14.3 Peek

console.log("\n=== BAGIAN 14.2 ===");

console.log(
    "Request paling depan:",
    requestQueue.peek()
);


// 14.4 Dequeue

console.log("\n=== BAGIAN 14.3 ===");

console.log(
    "Request diproses:",
    requestQueue.dequeue()
);

console.log(
    "Queue setelah dequeue:",
    requestQueue.items
);


// 14.5 Dequeue berikutnya

console.log(
    "Request diproses:",
    requestQueue.dequeue()
);

console.log(
    "Queue sekarang:",
    requestQueue.items
);


// 14.6 Cek kosong

console.log("\n=== BAGIAN 14.4 ===");

console.log(
    "Apakah Queue kosong?",
    requestQueue.isEmpty()
);