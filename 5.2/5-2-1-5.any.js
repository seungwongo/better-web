const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve, reject) => {
  // 500ms 후에 resolve 함수를 실행합니다.
  setTimeout(resolve, 500, "500ms 후에 실행됩니다.");
});

const promise3 = new Promise((resolve, reject) => {
  // 100ms 후에 resolve 함수를 실행합니다.
  setTimeout(resolve, 100, "100ms 후에 실행됩니다.");
});

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));
// 100ms 후에 실행됩니다.
