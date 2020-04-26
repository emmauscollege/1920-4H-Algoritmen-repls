// algoritme telLetter
// input: een string
// output: het aantal keren dat de kleine letter 
//         'a' in de string voorkomt
// voorbeelden: 
// "informatica is gaaf" => 4
// "Appels en peren" => 0
// "Aardbei" => 1

function telLetter(tekst) {
  var aantal = 0;
  var i = 0;
  while (i < tekst.length) {
    if (tekst[i] === "a") {
      aantal = aantal + 1;
    }
    i = i + 1;
  }
  return aantal;
}

telLetter("Informatica is gaaf"); // output 4
