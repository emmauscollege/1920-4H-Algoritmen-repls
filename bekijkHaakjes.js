// algoritme bekijkHaakjes
// input: string met haakjes
// output: 'goed' als haakjes in de juiste volgorde
//         'fout' als volgorde of aantal haakjes niet klopt 
// haakjes zijn '(', ')', '{', '}'
// nesten van haakjes toegestaan
// voorbeeld:
// "(){}" => goed
// "({})()(())" => goed
// "(()))" => fout op plek 4
// "({)}" => fout op plek 2
// "({}" => fout, haakje mist aan het einde

function bekijkHaakjes(tekst) {
  var verwacht = ["start"];
  var i = 0;
  while (i < tekst.length) {
    if (tekst[i] === '(') {
      verwacht.push(')');
    }
    if (tekst[i] === '{') {
      verwacht.push('}');
    }
    if (tekst[i] === ')') {
      if (verwacht.pop() !== ')') {
        return "fout op plek "+i;
      }
    }
    if (tekst[i] === '}') {
      if (verwacht.pop() !== '}') {
        return "fout op plek "+i;
      }
    }
    i = i + 1;
  }
  if (verwacht.length === 1) {
    return "goed";
  } else {
    return "fout, haakje mist aan het einde" ;
  }
}

bekijkHaakjes("({})()(())"); // output goed
