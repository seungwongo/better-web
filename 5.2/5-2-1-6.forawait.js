function doSomething(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(i);
      resolve(i);
    }, 1000);
  });
}

async function foo(array) {
  for await (const i of array) {
    doSomething(i);
  }
}

foo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
