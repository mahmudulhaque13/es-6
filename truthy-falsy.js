let data;
data = 0;
data = "";
data = " ";
data = "0";
data = false;
data = true;
data = {};
data = [];
data = null;
data = false;
data = true;
data = [];
console.log("value of data", data);

if (data) {
  console.log("value of data is truthy");
} else {
  console.log(data, "is falsy");
}

// if i need to capture the falsy value to go inside if block
// use logical not
if (!data) {
  console.log("inside if with a falsy value");
}

// capture all positive value
// double not!!
// capture any value to boolean(true/false)
if (!!data === true) {
  console.log("only true inside the double not");
}
