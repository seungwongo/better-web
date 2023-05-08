const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "500ms 후에 실행됩니다."); // 500ms 후에 resolve 함수를 실행합니다.
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "100ms 후에 실행됩니다."); // 100ms 후에 resolve 함수를 실행합니다.
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});
// 100ms 후에 실행됩니다.
