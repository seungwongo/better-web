const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve(4), 1000)
);
const promise3 = Promise.reject(new Error("에러 발생"));
const promises = [promise1, promise2, promise3];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result))
);
