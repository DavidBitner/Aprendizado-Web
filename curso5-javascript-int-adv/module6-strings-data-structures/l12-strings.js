"use strict";

const airline = "TAP Air Brazil";
const plane = "A320";

// Apontar letra em uma string
console.log("1. " + plane[0]);
console.log("2. " + `B737`[0]);

// Tamanho da string
console.log("3. " + airline.length);
console.log(`4. ` + `B737`.length);

// Posição de algo na string
console.log("5. " + airline.indexOf("r"));
console.log("6. " + airline.lastIndexOf("r"));
console.log("7. " + airline.indexOf("Brazil"));

// Cortar string
console.log("8. " + airline.slice(4));
console.log("9. " + airline.slice(4, 7));
console.log("10. " + airline.slice(0, airline.indexOf(" ")));
console.log("11. " + airline.slice(airline.lastIndexOf(" ") + 1));
console.log("12. " + airline.slice(-4));

// Exemplo
function check_middle_seat(seat) {
  const s = seat.slice(-1);
  if (s == "B" || s == "E") {
    console.log(`13. Middle seat`);
  } else {
    console.log(`14. Not middle seat`);
  }
}

check_middle_seat("11B");
check_middle_seat("14A");
check_middle_seat("3E");

// Transformar string
console.log("15. " + airline.toLowerCase());
console.log("16. " + airline.toUpperCase());

// Corrigindo capitalização
const nome = "dAvId";
const nome_lower = nome.toLowerCase();
const nome_capitalizado = nome_lower[0].toUpperCase() + nome_lower.slice(1);
console.log("17. " + nome_capitalizado);

// Comparando emails
const email = "david@gmail.com";
const login_email = "   daVid@Gmail.com  \n";
const lower_email = login_email.toLowerCase();
const trimmed_email = lower_email.trim();
console.log("18. " + trimmed_email);

const all_in_one_email = login_email.toLowerCase().trim();
console.log("19. " + all_in_one_email);

// Mudando strings
const price_real = "R$370,00";
const price_dollar = price_real.replace("R$", "U$").replace(",", ".");
console.log("20. " + price_dollar);

// Exemplo
const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
//console.log(announcement.replaceAll("door", "gate"));
console.log("21. " + announcement.replace("door", "gate"));
console.log("22. " + announcement.replace(/door/g, "gate"));

// Booleans
const plane_boolean = "Airbus A320neo";
console.log("23. " + plane_boolean.includes("A320"));
console.log("24. " + plane_boolean.includes("Boeing"));
console.log("25. " + plane_boolean.startsWith("Airbus"));
console.log("26. " + plane_boolean.endsWith("neo"));

// Exemplo
function check_baggage(items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log(`27. NOT allowed on board`);
  } else {
    console.log(`28. ALLOWED on board`);
  }
}
check_baggage("laptop, food, pocket knife");
check_baggage("socks, camera");
check_baggage("snacks, gun");

// Separar string
console.log("29. " + `a+very+nice+string`.split("+"));
console.log("30. " + `David Bitner`.split(" "));

const [primeiro_nome, sobrenome] = "David Bitner".split(" ");
console.log("31. " + primeiro_nome, sobrenome);

// Juntar string
const novo_nome = ["Sr.", primeiro_nome, sobrenome].join("---");
console.log("32. " + novo_nome);

// Exemplo
function capitalize_name(name) {
  const names = name.split(" ");
  const names_capitalized = [];

  for (const iterator of names) {
    names_capitalized.push(
      iterator[0].toUpperCase() + iterator.slice(1).toLowerCase()
    );
    // names_capitalized.push(
    //  iterator.replace(iterator[0], n[0].toUpperCase())
    // );
  }
  console.log(`33. ` + names_capitalized.join(" "));
}
capitalize_name("daVid BiTNER");
capitalize_name("deborah souza silva");

// Adicionando caracteres até string ter um tamanho determinado
const message = "Go to gate 99!";
console.log(`34. ` + message.padStart(20, " ").padEnd(30, "."));
console.log(`35. ` + "David".padStart(20, " ").padEnd(30, "."));

// Exemplo
function credit_card(number) {
  const card = String(number);
  const last_four = card.slice(-4);
  const secret = last_four.padStart(card.length - 4, "*");
  console.log("36. " + secret);
}
credit_card(45145156561561);
credit_card("4451456156156569766");

// Repetir string
const message2 = "Repeating message! ";
console.log(`37. ` + message2.repeat(5));
