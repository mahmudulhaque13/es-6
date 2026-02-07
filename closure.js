function counter() {
  let count = 0;

  return function (user) {
    count++;
    console.log("inside inner", user, count);
  };
}

// const myFunc = counter();
// myFunc();
// myFunc();
// myFunc();

const rahimCounter = counter();
rahimCounter("rahim");
rahimCounter("rahim");
rahimCounter("rahim");
rahimCounter("rahim");
console.log("------------------------");

const karimCounter = counter();
karimCounter("karim");
karimCounter("karim");
karimCounter("karim");
karimCounter("karim");
karimCounter("karim");
rahimCounter("rahim");
karimCounter("karim");
