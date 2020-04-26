// algoritme geefDeelbaar
// input: een geheel getal groter dan 0
// output: 'even' als deelbaar door 2, 
//         'oneven' als niet deelbaar door 2
// eis: je mag alleen + of - gebruiken
// voorbeelden: 
// 20 => even
// 13 => oneven

function geefDeelbaar(getal) {
  while (getal > 0) {
    getal = getal -2;
  }
  if (getal === 0) {
    return "even";
  } else
    return "oneven";
}

geefDeelbaar(20); // output even
