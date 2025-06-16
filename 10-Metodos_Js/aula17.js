const pessoa = {
  cidade: "Rio de Janeiro",
  surf: true,
  falar: function () {
    console.log("Olá");
  },
};

const carro = {
  modelo: "Corolla",
  marca: "Toyota",
};

const joao = Object.create(pessoa); // Herdar de um objeto
Object.assign(joao, carro); // Copiar as propriedade
joao.falar();
console.log(joao.cidade, joao.surf);
joao.nome = "João";
joao.idade = 30;

console.log(joao);

console.log(joao.hasOwnProperty("surf"));
