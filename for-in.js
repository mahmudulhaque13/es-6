// const formData = {
//   username: "mahmud",
//   email: "test@gmail.com",
//   password: "1234",
// };

// for (let field in formData) {
//   if (formData[field]) {
//     console.log(field + " is required");
//   }
// }

// const formData = {
//   username: "mahmud",
//   email: "test@gmail.com",
//   password: "1234",
// };

// for (let field in formData) {
//   if (!formData[field]) {
//     console.log(field + " is required");
//   }
// }

const book = {
  title: "JS Basics",
  price: 300,
  author: "Mahmud",
};
for (let key in book) {
  console.log(key + ":", book[key]);
}
