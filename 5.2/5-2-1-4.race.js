const promise1 = new Promise((resolve, reject) => {
  // 500ms 후에 resolve('one') 함수 호출
  setTimeout(resolve, 500, "500ms 후에 실행됩니다.");
});

const promise2 = new Promise((resolve, reject) => {
  // 100ms 후에 resolve('two') 함수 호출
  setTimeout(resolve, 100, "100ms 후에 실행됩니다.");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});
// 100ms 후에 실행됩니다.
