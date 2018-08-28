const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is my data");
  }, 1500);
});

console.log("before");
promise.then(data => {
  console.log(data);
});

console.log("after");
