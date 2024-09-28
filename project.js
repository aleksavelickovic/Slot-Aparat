const ulaz = require("prompt-sync")();

function getPocetniDepozit() {
  while (true) {
    const depositAmount = parseFloat(ulaz("Unesite iznos pocetnog depozita: "));
    if (isNaN(depositAmount) || depositAmount <= 0) {
      console.log("Molimo vas unesite validnu vrednost!");
    } else {
      return depositAmount;
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function zavrti() {
  for (a = 0; a < 250; a++) {
    for (i = 0; i < 3; i++) {
      // console.log(simbol)
      broj = Math.random();
      if (broj < 0.40) {
        matricaAparata[0][i] = "D";
      } else if (0.40 < broj < 0.70) {
        matricaAparata[0][i] = "C";
      } else if (0.70 < broj < 0.90) {
        matricaAparata[0][i] = "B";
      } else {
        matricaAparata[0][i] = "A";
      }
    }
    console.log(matricaAparata[0]);
    console.log(matricaAparata[1]);
    console.log(matricaAparata[2]);
  }
}

let matricaAparata = [
  ["a", "a", "a"],
  ["b", "b", "b"],
  ["c", "c", "c"],
];

zavrti();

// let kredit = getPocetniDepozit();

/* 
A = 5x
B = 4x
C = 3x
D = 2x
*/
