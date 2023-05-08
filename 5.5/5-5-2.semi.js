function example() {
  let a = 3;
  let b = 5;
  let c = a + b[(1, 2, 3)].forEach((n) => console.log(n));
  // 세미콜론이 없는 c와 그 아래 문장을 하나로 인식해서 오류가 발생
  // let c = a + b[(1, 2, 3)].forEach((n) => console.log(n));
}

if (condition1) {
  // do something
}

for (let i = 0; i < 10; i++) {
  // do something
}

function myFunction() {
  // do something
}
