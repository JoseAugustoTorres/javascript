// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add("ativar");
//   },
// };

function Dom(seletor) {
  this.seletor = seletor;
  this.element = function () {
    return document.querySelector(this.seletor);
  };
  this.ativar = function (classe) {
    this.element().classList.add(classe);
  };
}

const li = new Dom("li");
li.ativar("ativar");
const ul = new Dom("ul");
ul.ativar("ativar");
