// While
let numero = 1;

while (numero <= 5) {
  console.log("Número: " + numero);
  numero++; // numero + 1
}

console.log("Contagem com while concluída!");

let funcionariosRegistrados = 0;

while (funcionariosRegistrados < 3) {
  console.log(
    "Funcionário " + (funcionariosRegistrados = 1) + " registrou suas horas."
  );
  funcionariosRegistrados++;
}

console.log("Fim de registro");
