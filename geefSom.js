// algoritme geefSom
// input: lijst met één of meer getallen
// output: som van alle getallen uit de lijst
// voorbeelden: 
// [10, 2, 5] => 17
// [0, -1, 3, 7] => 9

function geefSom(lijst) {
  var som = 0;
  var i = 0;
  while (i < lijst.length) {
    som = som + lijst[i];
    i = i + 1;
  }
  return som;
}

console.log(geefSom([10, 2, 3,5])); // output 17
