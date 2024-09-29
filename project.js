const ulaz = require("prompt-sync")();

const matricaAparata = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function getPocetniDepozit() {
  while (true) {
    const depositAmount = parseFloat(ulaz("Unesite iznos pocetnog depozita: "));
    if (isNaN(depositAmount) || depositAmount <= 0) {
      console.log("Molimo Vas unesite validnu vrednost!");
    } else {
      return depositAmount;
    }
  }
}

function getBrojLinija(kredit, ulogPoLiniji) {
  while (true) {
    const brojLinija = parseFloat(
      ulaz("Unesite broj linija na koje zelite da se kladite (1-3): ")
    );
    if (isNaN(brojLinija) || brojLinija <= 0) {
      console.log("Molimo Vas unesite validnu vrednost!");
    } else if (brojLinija > 3 || brojLinija < 1) {
      console.log("Molimo Vas unesite broj od 1 do 3!");
    } else if (ulogPoLiniji * brojLinija > kredit) {
      console.log("Nemate dovoljno kredita za ovaj ulog!");
    } else {
      return brojLinija;
    }
  }
}

function zavrti(brojLinija) {
  for (i = 0; i < brojLinija; i++) {
    for (j = 0; j < 3; j++) {
      broj = Math.random();
      // console.log(broj);
      if (broj < 0.4) {
        matricaAparata[i][j] = "D";
      } else if (broj >= 0.4 && broj < 0.7) {
        matricaAparata[i][j] = "C";
      } else if (broj >= 0.7 && broj < 0.9) {
        matricaAparata[i][j] = "B";
      } else {
        matricaAparata[i][j] = "A";
      }
    }
  }

  console.log(matricaAparata[0]);
  console.log(matricaAparata[1]);
  console.log(matricaAparata[2]);
}

function JeDobijeno() {
  for (let i = 0; i < 3; i++) {
    if (matricaAparata[i][0] != "") {
      if (
        matricaAparata[i][0] === matricaAparata[i][1] &&
        matricaAparata[i][1] === matricaAparata[i][2]
      ) {
        return true;
      }
    }
  }
  return false;
}

let kredit = getPocetniDepozit();
let ulogPoLiniji = parseFloat(ulaz("Unesite ulog po liniji: "));
let brojLinija = getBrojLinija(kredit, ulogPoLiniji);
zavrti(brojLinija);
console.log(JeDobijeno());
// if (JeDobijeno()) {
//   kredit += izracunajDobitak();
// } else {
//   console.log("Niste dobili :(");
// }

/* 
A = 5x
B = 4x
C = 3x
D = 2x
*/
