// BAGIAN 4 - FLATTENING DATA
// Data produk
const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",

    tags: [
      "computer",
      "electronics",
      "office"
    ],

    dimensions: {
      width: 30,
      height: 2,
      depth: 20
    },

    reviews: [
      {
        user: "A",
        rating: 5,
        comment: "Good product"
      },
      {
        user: "B",
        rating: 4,
        comment: "Worth it"
      }
    ]
  },

  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",

    tags: [
      "mobile",
      "electronics"
    ],

    dimensions: {
      width: 7,
      height: 0.8,
      depth: 15
    },

    reviews: [
      {
        user: "C",
        rating: 4,
        comment: "Nice camera"
      },
      {
        user: "D",
        rating: 5,
        comment: "Fast"
      },
      {
        user: "E",
        rating: 3,
        comment: "Battery so-so"
      }
    ]
  }
];


// MENAMPILKAN DATA PRODUK

const productsOutput = document.getElementById("productsOutput");

productsOutput.textContent = JSON.stringify(
  products,
  null,
  2
);


// LATIHAN 4.1
// Ambil seluruh tags dari semua produk menjadi satu array menggunakan flatMap()

const allTags = products.flatMap(
  product => product.tags
);

console.log("Semua Tags:");
console.log(allTags);


const tagsOutput = document.getElementById("tagsOutput");

tagsOutput.textContent = JSON.stringify(
  allTags,
  null,
  2
);


// LATIHAN 4.2
// Ambil seluruh comment dari semua review di semua produk menjadi satu array of strings

const allComments = products.flatMap(
  product => product.reviews.map(
    review => review.comment
  )
);

console.log("Semua Comments:");
console.log(allComments);


// Tampilkan hasil
const commentsOutput = document.getElementById("commentsOutput");

commentsOutput.textContent = JSON.stringify(
  allComments,
  null,
  2
);