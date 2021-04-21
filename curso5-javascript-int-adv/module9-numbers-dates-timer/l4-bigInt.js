"use strict";

// Maior numero integer
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

// Big Int
console.log(65156156156565645489714194899841891894198498448691);
console.log(65156156156565645489714194899841891894198498448691n);
console.log(BigInt(65156156156565645489714194899841891894198498448691));

// Operações
console.log(1000n + 1000n);
console.log(156145614561561456456456456456156156n * 2165156156n);

// Não é possível fazer uma operação com um big int e um int, é necessário converter o int para bigInt
const huge = 2610261561650545604564056056456456n;
const normal = 1000;
console.log(huge * BigInt(normal));
