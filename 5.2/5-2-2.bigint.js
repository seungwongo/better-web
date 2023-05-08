const bigint1 = 9007199254740991n;

const bigint2 = BigInt(9007199254740991);
// 9007199254740991n

const bigint3 = BigInt("9007199254740991");
// 9007199254740991n

const maxSafeInteger = BigInt(Number.MAX_SAFE_INTEGER);
// 9007199254740991n

const maxPlusOne = maxSafeInteger + 1n;
// 9007199254740992n

const maxMulti = maxSafeInteger * 2n;
// 18014398509481982n

console.log(1n < 2); // true
console.log(2n > 1); // true
console.log(2n > 2); // false
console.log(2n == 2); // true
console.log(2n === 2); // false
