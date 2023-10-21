const readlineSync = require('readline-sync');
function startgame() {
const player = {
  naam: ' ',
}

var naam = readlineSync.question ('Wat is je naam?')
console.log (`Hallo, ${naam}! welkom bij je nieuwe advontuur`)

console.log ('Je bent lekker aan het touren met je scooter oppeens knal je tegen een stoep aan en je valt op de grond')

console.log ('Alles draait om je heen')
console.log ('Je hebt pijn aan je arm')
console.log ("Wil je de pijn bekijken?")
const keuze = readlineSync.keyInSelect([ 'Bekijk de pijn', 'Niet kijken'], 'Wat ga je doen');

if (keuze==1) {
    console.log('Je bekijkt je arm niet')
    console.log('je begint veder te lopen maar alles draait om je heen aangezien je duizelig bent dus je begint naar je wond te kijken')
    console.log('je komt erachter dat je veel bloed hebt verloren en dat je dood gaat')
    console.log('=================================================')
    console.log('EINDE')
    console.log('=================================================')
    startgame()
}
 else {
    console.log('Je bekijkt je wond. Je bent er achter gekomen dat het een groote wond is. Je hebt inmiddels veel bloed verloren')
    console.log('Je pakt de sjaal die je om had en die bind je goed vast om je arm zodat de bloeding stopt')
    console.log('Je hebt veel bloed verloren')
 }
 console.log('je gaat veder lopen langzamer hand begin je moe te worden terwijl je doel was om vandaag naar de stad te lopen. je ziet vederop een kleine huisje')
const stad = readlineSync.keyInSelect([ 'Naar de stad lopen', 'Rusten in dat afgelegen huisje'], 'Wat ga je doen?');

if (stad==0) {
    console.log('Je blijft lopen naar de stad. vederop zie je een dier die een beetje op een wolf lijkt, Ga je wegrennen of loop je naar de wolf toe?')
    const wolf = readlineSync.keyInSelect([ 'Loop naar het dier toe', 'Wegrennen', 'Wat ga je doen']);

    if (wolf==0) {
        console.log ('Je loopt naar de wolf toe,')
        console.log ('Je probeert de wolf aan te raken,')
        console.log ('Je aait de wolf en oppeens bijt hij jou. Daarna komen er nog meer wolven achter de struiken vandaan,')
        console.log ('Ze bijten je allemaal en je gaat dood,')
        console.log ('=================================================')
        console.log ('EINDE')
        console.log ('=================================================')
        startgame()
    }

    else {
      console.log('Je sprint weg,')
      console.log('Je raakt uit evenwicht en valt,')
      console.log('Je glijdt uit en je hoofd raakt de stoep,')
      console.log('=================================================')
      console.log('EINDE')
      console.log('=================================================')
      startgame()
    }
}  

else {
  console.log ('Je zit in het huisje en wacht tot het nacht is')
  console.log ('Je hebt bloed derbij gekregen')
  console.log ('Je wordt wakker van een muis die een broodje van je aan het eten is,')
  console.log (`${naam}: Dankzij jou heb ik nu ook geen eten meer`)
  console.log ('Je staat op om alvast je zelf ready te maken om te gaan lopen')
  console.log ('Je loopt nu naar de stad')
  console.log ('Onderweg krijg je het gevoel dat je veel honger begint te krijgen')

  console.log ('=================================================')
  console.log('Je bent nu aangekomen in deze kleine stad,')
  console.log('In deze stad heb je allerlei verschillende en leuke winkels,')
  console.log('Je hebt links van je een gebouw die op een hotel lijkt')
  console.log('Je hebt rechts van je een villa')
  console.log('En als je rechtdoor gaat heb je een grote politie bureau')



IndeStadKeuze();
}

function IndeStadKeuze()
{

const indestad = readlineSync.keyInSelect([ 'Naar die gebouw die op een hotel lijkt', 'Naar de villa gaan', 'Naar de politie gaan'], 'Wat ga je doen?');

if (indestad==0) {
    hotel();
}

if (indestad==1) {
    naarhethuis();
}

if (indestad==2) {
    politiebureau();
}





}
























}



































startgame()









