function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = "Marca";
  this.preco = 2000;
}

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2("Mazda", 5000);

const honda = new Carro("Honda", 3000);

const fiat = new Carro("Fiat", 4000);

console.log(mazda);

//erro
// const carro = {
//   marca: "Marca",
//   preco: 0,
// };

// const honda = carro;
// honda.marca = "Honda";
// honda.preco = 2000;

// const fiat = carro;
// fiat.marca = "fiat";
// preco.fiat = 3000;
