// const person = {
//   name: "Max",
//   age: 15,
//   location: {
//     city: "Clarksburg"
//   }
// };

// const { name, age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature = 9999 } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// // publisherName or self-published
// const { name: publisherName = "self-published" } = book.publisher;

// console.log(publisherName);

// Array destructuring

// const address = [
//   "1299 S Juniper Street",
//   "Philadelphia",
//   "Pennsylvania",
//   "19147"
// ];

// const [street, city, state, zip] = address;

// console.log(`You are in ${city}, ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [coffee, , medPrice] = item;

console.log(`${coffee} for a medium size costs ${medPrice} `);
