function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + " andou");
  };
}

const pessoa1 = new Pessoa("João", 20);
const pessoa2 = new Pessoa("Maria", 25);
const pessoa3 = new Pessoa("Bruno", 15);

/*--------------------------------------------------------*/

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;

  this.addClass = function (classe) {
    elementList.forEach((e) => {
      e.classList.add(classe);
    });
  };

  this.removeClass = function (classe) {
    elementList.forEach((e) => {
      e.classList.remove(classe);
    });
  };
}

const li = new Dom("li");
li.addClass("abluble");

const ul = new Dom("ul");
ul.addClass("sas");
