"use strict";

const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};
console.log(new Intl.DateTimeFormat("en-US").format(now));
console.log(new Intl.DateTimeFormat("pt-BR").format(now));
console.log(new Intl.DateTimeFormat("ar-SY").format(now));
console.log(new Intl.DateTimeFormat("en-US", options).format(now));
console.log(new Intl.DateTimeFormat("pt-BR", options).format(now));
console.log(new Intl.DateTimeFormat("ar-SY", options).format(now));
