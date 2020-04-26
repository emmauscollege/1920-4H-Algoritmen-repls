
/* Hieronder kun je de door jou
   geschreven functies aanroepen en uitproberen. De eerste vijf functies hieronder zijn al af. Druk op 'run' om de uitkomsten te zien.
*/
console.log(isPositief(-9));
console.log(berekenSom([1, 3, 6, 9]));
console.log(berekenMacht(2, 10));

console.log(bevatEenA("Hallo wereld!"));
console.log(hoofdletters("Hallo wereld!"));


// zorg dat onderstaande regels het correcte antwoord geven:
// haal de // aan het begin van de regel weg als de functie volgens jou werkt.

// *********** Algoritmes voor getallen **************
// console.log(berekenGemiddelde([5, 6, 19, 42]));
// console.log(altBerekenMacht(5, 8));
// console.log(isDeelbaarDoorTwee(8)); // geeft 3
// console.log(isDeelbaarDoor(25, 4)); // geeft false
// console.log(isDeelbaarDoor(25, 5)); // geeft true
// console.log(faculteit(9)); // geeft 362880
// console.log(fibbonacci(20)); 



// *********** Algoritmes voor tekst **************
// console.log(bevatLetter("Hallo!" , "q")); // geeft false
// console.log(bevatLetter("Hallo!" , "h")); // geeft true
// console.log(verwijderKlinkers("Dit schijnt nog best makkelijk te lezen te zijn")); // geeft "Dt schnt ng bst mkklk t lzn t zn"
// console.log(isPalindroom("lepel")); // geeft true
// console.log(isPalindroom("vork")); // geeft false




// ***************************************************
/* Hieronder staan alle functies beschreven
   De functie berekenSom() is al voor je gemaakt.
   De andere functies hebben zijn leeg of onvolledig
*/


// *********** Algoritmes voor getallen **************

// geeft true als getal positief is
function isPositief(getal) {
  var teruggeefWaarde = true;

  if (getal < 0) {
    teruggeefWaarde = false;
  }

  return teruggeefWaarde;
}


// geeft de som van de getallen in een array
function berekenSom(getallenRij) {
  var uitkomst = 0;
  for (var i = 0; i < getallenRij.length; i++) {
    uitkomst = uitkomst + getallenRij[i];
  }

  return uitkomst;
}


/* Berekent het gemiddelde van alle getallen in een array */
function berekenGemiddelde(getallenRij) {
  var uitkomst = 0;

  // ga nu zelf verder...
}


/* Berekent a tot de macht b */
function berekenMacht(a, b) {
  return Math.pow(a, b); // dit is alles
}


/* Berekent a tot de macht b, maar maakt geen gebruik van de functie pow() */
function altBerekenMacht(a, b) {


}


// Geef true als getal een veelvoud van 2 is.
function isDeelbaarDoorTwee(getal) {
  var uitkomst = false;

  // bepaal in je code of de uitkomst false moet blijven.
}


// geeft true als getal een veelvoud van deler is
function isDeelbaarDoor(getal, deler) {
  var uitkomst = false;
}


// geeft true als getal een priemgetal is
function isPriemgetal(getal) {

}


// geeft n! (n faculteit), dwz 1 x 2 x 3 x ... x n
// dus 6! = 1 x 2 x 3 x 4 x 5 x 6 = 720
// tip: 0! = 1
function faculteit(n) {

}


// De fibbonacci getallen is een rij getallen die begint met 1, 1. Het volgende getal is steeds de som van de twee vorige getallen, dus 1, 1, 2, 3, 5, 8, 13 enz.
// Deze functie geeft een array terug met daarin de fibbonacci reekst tot en met het getal n. De reeks begint met n = 0, dus fibbonacci(8) geeft [1, 1, 2, 3, 5, 8, 13, 21, 34]
// tip: met uitkomst.push(5) voeg je het getal 5 aan de array 'uitkomst' toe

function fibbonacci(n) {
  var uitkomst = [];

  // the magic starts here...



  return uitkomst;
}



// *********** Algoritmes voor tekst **************// gebruik gerust https://www.w3schools.com/js/js_string_methods.asp voor inzicht in wat je met strings kunt doen


// geeft true als tekst een a of A bevat
function bevatEenA(tekst) {
  var uitkomst = false;

  if (tekst.indexOf("a") >= 0 || tekst.indexOf("A") >= 0) {
    uitkomst = true;
  }

  return uitkomst;
}


// geeft 'tekst' in allemaal hoofdletters
function hoofdletters(tekst) {
  return tekst.toUpperCase(); // dit is alles
}


// geeft true als 'tekst' de letter bevat. Deze functie moet hoofdletterongevoelig zijn
function bevatLetter(tekst, letter) {
  var uitkomst = false;

  // ...
}


// verwijdert alle klinkers uit tekst
function verwijderKlinkers(tekst) {
  var klinkers = ["a", "e", "i", "o", "u"];
  var uitkomst = tekst;

  // ... het verwijderen kan beginnen




  return uitkomst
}


// geeft true als tekst een palindroom (woord / zin dat achterstevoren hetzelfde is) is
// tip: gebruik string methode substr()
// zie https://www.w3schools.com/js/js_string_methods.asp
function isPalindroom(tekst) {
  var uitkomst = false;


}


