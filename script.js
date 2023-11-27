  // Função tradicional sem parâmetros
  function saudacao() {
    console.log("Olá! Bem-vindo à calculadora.");
  }

  // Função tradicional com parâmetros e retorno de valor
  function somar(a, b) {
    return a + b;
  }

  // Arrow function com parâmetros e retorno de valor
  const multiplicar = (a, b) => a * b;

  // Utilizando as funções
  saudacao(); // Chamando a função sem parâmetros

  const resultadoSoma = somar(5, 3); // Chamando a função com parâmetros
  console.log("Resultado da soma:", resultadoSoma);

  const resultadoMultiplicacao = multiplicar(4, 6); // Chamando a arrow function
  console.log("Resultado da multiplicação:", resultadoMultiplicacao);