const arr = [1, 2, 3, 4, 5];

// 화살표 함수
const f1 = v => v**2;
const f2 = v => Math.sqrt(v);
const f3 = v => v**3;

// 일반 함수
/*
function f1(v){return v**2;}
function f2(v){return Math.sqrt(v);}
function f3(v){return v**3;}
*/

// const result = arr.map(f3);

const result = [f1, f2, f3].reduce((pre, f) => pre.map(f), arr);
console.log('result', result);
