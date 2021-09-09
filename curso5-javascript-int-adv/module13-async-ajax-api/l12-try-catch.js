"use strict";

// Try serve para o JS tentar executar um pedaço de código e catch serve para cuidar dos erros que o bloco try possam gerar
try {
  let x = 1;
  const y = 2;

  // Erro de atribuição a variável const
  y = 3;
} catch (error) {
  console.log('Doidera');
}
