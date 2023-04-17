const promiseSuccess = new Promise((resolve, reject) => {
  resolve("성공");
});

promiseSuccess
  .then((value) => {
    console.log(value); // 성공
  })
  .catch((error) => {
    // Promise 함수에서 reject() 함수 호출 시 수행(실패)
  });

const promiseFail = new Promise((resolve, reject) => {
  reject("실패");
});

promiseFail
  .then((value) => {
    // Promise 함수에서 resolve() 함수 호출 시 수행(성공)
  })
  .catch((error) => {
    console.log(error); // 실패
  });
