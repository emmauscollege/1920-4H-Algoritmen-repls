// algoritme geefGemiddelde
// input: lijst met één of meer getallen
// output: gemiddelde van alle getallen uit de lijst
// voorbeelden: 
// [10, 2, 6] => 6
// [0, -2, 4, 8] => 2.5

function geefGemiddelde(lijst) {
  var som = 0;
  var aantal = 0;
  while (aantal < lijst.length) {
    som = som + lijst[aantal];
    aantal = aantal + 1;
  }
  return som / aantal;
}

geefGemiddelde([10, 2, 6]); // output 6
