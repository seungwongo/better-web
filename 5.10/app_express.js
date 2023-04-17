const express = require("express"); // express 모듈을 가져옵니다.
const app = express(); // express 함수를 실행해서 app 객체를 생성합니다.
const port = 3000; // 서버 실행 포트번호

// 클라이언트에서 HTTP 요청 메소드 중 GET를 이용해서 'http://localhost:3000'로 요청을 보내면 실행되는 라우트입니다.
app.get("/", (req, res) => {
  res.send("Hello World!"); // 클라이언트에게 'Hello World!'라는 문자열을 보냅니다.
});

// 클라이언트에서 HTTP 요청 메소드 중 GET를 이용해서 'http://localhost:3000/customers'로 요청을 보내면 실행되는 라우트입니다.
app.get("/customers", (req, res) => {
  const customers = [
    { name: "홍길동", age: 20 },
    { name: "김철수", age: 30 },
  ];
  res.send(customers); // 클라이언트에게 customers 객체를 보냅니다.
});

// app.listen 함수를 사용해서 지정된 포트로 서버를 실행합니다.
app.listen(port, () => {
  // 서버가 실행되면 콜백 함수가 실행됩니다.
  console.log(`서버가 http://localhost:${port} 로 실행되었습니다.`);
});
