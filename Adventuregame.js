const readlineSync = require('readline-sync');
function startgame() {
const player = {
  naam: ' ',
}

console.log('Welkom bij mijn Adventure game. Deze adventure game is gemaakt door khaled. Veel speelplezier!!!')

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
function hotel () {
  console.log ('Je loopt naar de hotel toe. en besluit op naar binnen te gaan.')
  console.log ('Je loopt door de gangen van het hotel. 2 minuutjes later hoor je harde geschreeuw bij de receptie een dronken man is aan het schreeuwen tegen de manager van het hotel.')
  const manager = readlineSync.keyInSelect([ 'Je praat met de dronken man.', 'Je praat met de manager van het hotel'], '');
  if (manager==0) {
    console.log (`${naam}: Goedendag, Bent u de manager van dit hotel?`)
    console.log ('Manager: Kan je even een ogenblikje wachten!')
    console.log ('Dronken man: Dit is geen goede hotel je wordt slecht behandeld hier. dit is de laatste keer dat ik hier ben.')
    console.log ('Manager: Dat is geheel uw eigen keuze.')
  }
  else {
    console.log('Je begint tegen de dronken man te praten')
    console.log('Dronken man: Dit is een hele slechte plek als ik jou was zou ik hier weg gaan')
    console.log('De dronken man rent naar de uitgang en is binnen no time verdwenen')
  }

  console.log ('Wat komt u hier doen?')
  const waaromkomjehier =readlineSync.keyInSelect([ 'Sorry ik ben gevallen van de scooter en ik heb overal bloed wat moet ik doen?', 'Laat maar zitten (ga weg)', ]);
  if (waaromkomjehier==1) {
    console.log (`${naam}: Laat maar.`)
    IndeStadKeuze();
  }
  if (waaromkomjehier==0) {
    console.log (`${naam}: Ik heb een ongelukje gemaakt met een scooter. En ik heb veel bloed verloren aangezien ik gewond ben in mijn arm. En toen ben ik gaan lopen en daarna ben ik hier gestrand`)
    console.log (`Manager: Ik kan je helaas niet helpen aangezien je een ongeluk hebt gemaakt en je bent misschien niet verzekerd dus ik ga de politie bellen zodat. de politie dit veder kan onderzoeken. want het kan ook zijn dat je een crimineel bent en hier wilt komen verstoppen `)
    console.log (`${naam}: Sorry je moet mij echt helpen. Ik ben een goede persoon. Ik ben geen crimineel!`)
    console.log (`Manager: Wacht even. Ik heb een plan maar je moet mij vertrouwen.`)
    const vertrouwen = readlineSync.keyInSelect([ 'Vetrouw de manager van het hotel',])
    if (vertrouwen==0) {
      console.log (`${naam}: Bij deze ik vertrouw je.`)
      console.log (`Manager: Goedzo, Volg mij maar.`)
      console.log (`Manager: Neem hier plaats.`)
      console.log (`${naam}: Wat gaan we hier precies doen?`)
      console.log (`Manager: Dat boeit je niks heb je dat begrepen? Om 3 uur in de nacht stap je in deze busje in begrepen?`)
      console.log (`${naam}: Ja dat is duidelijk wat je zij.`)
      console.log (`Manager: Goed dat het duidelijk is veel succes!!`)
      const tijdchecken = readlineSync.keyInSelect([ 'Bekijkt tijd' ,])
      if (tijdchecken==0){
        console.log('Je bekijkt de tijd op je horloge')
        console.log ('-----------')
        console.log ('/    ___    \ ')
        console.log ('|    __/    |')
        console.log ('|   __/     |')
        console.log ('|           |')
        console.log ('|           |')
        console.log ('|           |')
        console.log ('-----------')
        const stapin = readlineSync.keyInSelect([ 'Je stapt in het busje.', ])
        if (stapin==0){
          console.log ('Het is 3:00 uur je stapt in het busje.')
          console.log ('Je doet de deur van het busje rustig achter je dicht.')
          console.log ('Je bent aan het wachten tot er iets gebeurd.')
          console.log ('...........Paar minuten later...........')
          console.log ('Je hoort iemand in stappen in het busje. Die persoon begint het busje te starten en begint weg te rijden.')
          console.log ('...........Paar uur later...........')
          console.log ('De busje is gestopt. Je hoort zware voetstappen naar het voertuig lopen. ')
          console.log ('De zij deur van het busje gaat open.')
          console.log ('Je ziet een groot man. Die je een hand geeft;')
          console.log (`Groote man: Goedendag is dit ${naam}?!`)
          const deman = readlineSync.keyInSelect(['Klopt dat is mijn naam', 'Wat is jou naam als ik vragen mag', ])
          if (deman==0){
            console.log (`${naam}: Ja dat is mijn naam!`)
            console.log ('Groote man: Duidelijk, Die man van het hotel had het over jou.')
            console.log (`${naam}: Mag ik nog weten wie jij bent?`)
            console.log ('Groote man: Nee dat mag je niet weten. Je bent nu van mij.')
          }
          else {
            console.log (`${naam}: Mag ik nog weten wie jij bent?`)
            console.log ('Groote man: Nee dat mag je niet weten. Je bent nu van mij. ')
          }
          console.log (`${naam}: Wat bedoel je met je bent nu van mij?`)
          console.log ('Groote man: We hebben je meegenomen naar duitsland')
          console.log (`${naam}: Waar in duitsland ben ik?`)
          console.log ('Groote man: Dusseldorf')
          console.log (`${naam}: Wat doe ik hier!!!!`)
          console.log ('Groote man: dat is veder niet van belang je gaat hier huishouden voor rijke mensen')
          console.log (`${naam}: NEE DAT GA IK NIET DOEN`)
          console.log ('=================================================')
          console.log ('EINDE')
          console.log ('=================================================')
          startgame()

        }
      }
    }
  }
}
}

































}



































startgame()









