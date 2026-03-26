// ============================================================
//  tf-04.js  |  Aula 04 – Funções em JavaScript
// ============================================================
 
// ────────────────────────────────────────────────
// 1. USO BÁSICO DE FUNÇÕES
// ────────────────────────────────────────────────
console.log("=== 1. Uso básico de funções ===");
 
function somar(a, b) {
  return a + b;
}
 
const resultado = somar(5, 3);
console.log("somar(5, 3) →", resultado); // 8
 
function saudacao(nome) {
  return `Olá, ${nome}! Bem-vindo(a).`;
}
 
console.log(saudacao("Maria")); // Olá, Maria! Bem-vindo(a).
 
// ────────────────────────────────────────────────
// 2. FUNÇÃO COMO VALOR EM CONSTANTE (Arrow Function)
// ────────────────────────────────────────────────
console.log("\n=== 2. Função como valor em constante ===");
 
const dobrar = (n) => n * 2;
 
console.log("dobrar(7)  →", dobrar(7));  // 14
console.log("dobrar(15) →", dobrar(15)); // 30
 
const cumprimentar = (nome) => `Oi, ${nome}!`;
 
console.log(cumprimentar("Carlos")); // Oi, Carlos!
 
// ────────────────────────────────────────────────
// 3. FUNÇÃO EM OBJETO COMO MÉTODO
// ────────────────────────────────────────────────
console.log("\n=== 3. Função em objeto como método ===");
 
const calculadora = {
  marca: "CalcJS",
  somar(a, b) {
    return a + b;
  },
  subtrair(a, b) {
    return a - b;
  },
  apresentar() {
    return `Calculadora: ${this.marca}`;
  },
};
 
console.log(calculadora.apresentar());          // Calculadora: CalcJS
console.log("10 + 4 =", calculadora.somar(10, 4));      // 14
console.log("10 - 4 =", calculadora.subtrair(10, 4));   // 6
 
// ────────────────────────────────────────────────
// 4. CALLBACK
// ────────────────────────────────────────────────
console.log("\n=== 4. Callback ===");
 
// Função que recebe outra função (callback) como argumento
function executarOperacao(a, b, callback) {
  const resultado = callback(a, b);
  console.log(`Resultado da operação: ${resultado}`);
}
 
const multiplicar = (x, y) => x * y;
const dividir    = (x, y) => x / y;
 
executarOperacao(6, 3, multiplicar); // 18
executarOperacao(6, 3, dividir);     // 2
 
// Callback clássico com setTimeout (assíncrono)
console.log("Aguardando callback assíncrono...");
setTimeout(() => {
  console.log("Callback do setTimeout executado após 500ms!");
}, 500);
 
// ────────────────────────────────────────────────
console.log("\n✅ tf-04.js executado com sucesso!");