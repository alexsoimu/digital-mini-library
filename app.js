let arhiva = [
  {
    cod: "123",
    nume: "You deserve better",
    numeAutor: "Anne Marie",
    anulPublicarii: 2023,
  },
  {
    cod: "423",
    nume: "The art of feeling better",
    numeAutor: "Matilda Heindow",
    anulPublicarii: 2023,
  },
  {
    cod: "772",
    nume: "The power of when",
    numeAutor: "Michael Breus",
    anulPublicarii: 2016,
  },
];

let userInputField = document.getElementById("user-input");

function getBook(codIntrodus) {
  for (let i = 0; i < arhiva.length; i++) {
    if (arhiva[i].cod === codIntrodus) {
      const titluCarte = document.createElement("p");
      const numeAutor = document.createElement("p");
      const anAparitie = document.createElement("p");
      titluCarte.textContent = arhiva[i].nume;
      numeAutor.textContent = arhiva[i].numeAutor;
      anAparitie.textContent = arhiva[i].anulPublicarii;
      return document.body.append(titluCarte, numeAutor, anAparitie);
    }
  }
  const errorMessage = document.createElement("p");
  errorMessage.textContent = "Nu a fost gasita nicio carte cu acest cod.";
  document.body.append(errorMessage);
}

userInputField.addEventListener("change", (e) => getBook(e.target.value));
