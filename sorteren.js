// Algoritme: sorteren met het Bubblesort algoritme
// Emmauscollege 2019/04/14 GEE
// Voorbeeld van het Bubblesort algoritme voor het sorteren van een lijst met lengtes van leerlingen 
// Naast bubblesort zijn er veel meer algoritmen om te sorteren, 
// Bubblesort is een relatief eenvoudig te begrijpen algoritme

var lijst = [172, 180, 174, 160]; // lijst met te sorteren getallen
console.log("Ongesorteerd: " + lijst); // lijst afdrukken op console

// buitenste loop
// 1e keer: zet het grootste getal achteraan in de rij
// 2e keer: het een na grootste getal op de een na laatste plaats
// enzovoort
// Vraag: waarom begint bij j=1? Antwoord:  je hoeft 1 getal minder te sorteren dan het aantal getallen in de rij, want een rij met 1 getal is al gesorteerd.
for(var j=1; j<lijst.length; j++) { 
  console.log("j=" + j); 

  // binnenste loop
  // loop de rij af van voor tot achter,
  // als een getal groter is dan het getal erachter, wissel beide getallen dan om
  // Vraag: waarom wordt j afgetrokken van de lengte? Antwoord: de gesorteerde getallen aan het einde van de rij hoef je niet nogmaals te bekijken, het aantal te sorteren getallen wordt dus steeds kleiner.
  for(var i=0; i<lijst.length-j; i++) { 
    if (lijst[i] > lijst[i+1]) {
      // wissel getallen om
      let bewaar = lijst[i];
      lijst[i] = lijst[i+1];
      lijst[i+1] = bewaar;
    }
    console.log("  tussenresultaat i=" + i+": " + lijst);
  }
}

console.log("Gesorteerd: " + lijst);
