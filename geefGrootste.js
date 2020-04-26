// algoritme geefGrootste
// input: rij met één of meer positieve getallen
// output: grootste getal in de rij
// voorbeeld:
// [100, 50, 70] => 100
// [0, 50, 80, 30] => 80

function geefGrootste(lijst) {
  var grootste = 0;
  var i = 0;
  while (i < lijst.length) {
    if (lijst[i] > grootste) {
      grootste = lijst[i];
    }
    i = i + 1;
  }
  return grootste;
}

geefGrootste([100, 50, 70]); // output 100