// Objeto produto com os atributos(nome, preco, disponibilidade e emEstoque)
const produto = {
  nome: "Laptop",
  preco: 2500,
  disponibilidade: true,
  emEstoque: 10,
};

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
console.log(Object.keys(produto)); //chave em uma lista(metodo keys)
console.log(Object.values(produto)); // valores em uma lista(metodo values)
console.log(Object.entries(produto)); // lista contendo listas de chave e valor(metodo entries)
