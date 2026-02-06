let data;
data = 0;
data = "";
data = " ";
data = "0";
data = false;
data = true;
data = {};
data = [];
console.log("value of data", data);

if (data) {
  console.log("value of data is truthy");
} else {
  console.log(data, "is falsy");
}
