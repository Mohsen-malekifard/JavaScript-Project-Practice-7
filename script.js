const products = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Phone", price: 300 },
  { id: 3, name: "Tablet", price: 400 }
];

const names = products.map((p) => p.name);
const up = products.filter((p) => p.price > 350);
const total = products.reduce((acc, p) => acc + p.price, 0);

products.forEach((p) => {
    console.log(`${p.name}: $${p.price}`);
});

console.log("Names:", names);
console.log("Products > 350:", up);
console.log("Total price:", total);
