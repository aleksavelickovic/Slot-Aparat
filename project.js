const ulaz = require("prompt-sync")();

function pocetniDepozit() {
  while (true) {
    const depositAmount = parseFloat(ulaz("Unesite iznos pocetnog depozita: "));
    if (isNaN(depositAmount) || depositAmount <= 0) {
      console.log("Molimo vas unesite validnu vrednost!");
    } else {
      return depositAmount;
    }
  }
}

pocetniDepozit();
