const ulaz = require("prompt-sync")();

const matricaAparata = [
  ["a", "a", "a"],
  ["b", "b", "b"],
  ["c", "c", "c"],
];

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


function zavrti() {
  for (i = 0; i < 3; i++) {
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

function proveriDobitak() {
  for (let i = 0; i < 3; i++) {
    if (
      matricaAparata[i][0] === matricaAparata[i][1] &&
      matricaAparata[i][1] === matricaAparata[i][2]
    ) {
      return true;
    }
  }
  return false;
}

zavrti();
console.log(proveriDobitak());

// let kredit = getPocetniDepozit();

/* 
A = 5x
B = 4x
C = 3x
D = 2x
*/
