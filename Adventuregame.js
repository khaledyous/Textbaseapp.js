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
function politiebureau () {
  console.log ('Je loop langzamerhand een beetje richting de politie bureau')
  console.log ('Oppeens begin je je zelf af te vragen waarom dit jou moet overkomen')
  console.log (`${naam}; Waarom ben ik akkoord gegaan met zo iets doms eigenlijk`)
  const politiebureau = readlineSync.keyInSelect(['vertel de waarheid aan de politie', 'Ren weg',], 'Wat ga je doen?');
  if (politiebureau==1) {
    console.log ('Je rent weg.')
    IndeStadKeuze();
  }
  if (politiebureau==0) {
    console.log ('Je loopt rustig de politie bureau binnen.')
    console.log ('De Agent die op dat moment bij de balie zit staart je lang aan')
    console.log ('Agent: Goedendag waarmee kan ik u van dienst zijn?')
    const politieagent = readlineSync.keyInSelect(['Ik kom mijzelf aangeven aangezien ik iets hbe gedaan wat strafbaar is', 'Ik had een vraag maar die ben ik weer vergeten dus ik ga weer weg',])
    if (politieagent==0) {
      console.log (`${naam}: Ik ben mijn vraag vergeten dus sorry ik ga weer weg`)
      console.log ('Agent: Maakt niks uit fijne dag nog')
      console.log ('Je rent snel naar de uitgang van het polite bureau')
      IndeStadKeuze();
    }
    if (politieagent==1) {
      console.log (`${naam}: Goedendag meneer de agent, Ik kom mij bij deze aangeven van iets wat ik heb gedaan`)
      console.log (`Agent: Wat heeft u gedaan?`)
      console.log (`${naam}: Ik heb een scooter ongeluk gemaakt terwijl ik niet verzekerd ben. En daarna ben ik op de vlucht geslagen`)
      console.log (`Agent: Oke dan gaan we dat even checken in het systeem heb je ID voor mij?`)
      console.log (`${naam}: Zeker Asjeblieft`)
      console.log (`Agent: Dankjewel ik check het even in het systeem`)
      console.log (`${naam}: Oke gaat u gang`)
      console.log (`===========Agent bekijkt systeem===========`)
      console.log (`===========Agent belt zijn leidinggevend op===========`)
      console.log (`${naam}: Meneer de agent waarom bel je je leidinggevende op?`)
      console.log (`Agent: Je bent bij deze aangehouden. Je mag even meekomen.`)
      const escape = readlineSync.keyInSelect(['Je begint oppeens weg te rennen van de polite', 'Je geeft jezelf over',], 'Wat ga je doen?');
      if (escape==0) {
        console.log ('Je rent zo snel mogelijk naar de uitgang van de politie bureau.')
        console.log ('Zodra je buiten bent ren je zo snel mogelijk naar de kant van de hotel')
        console.log ('Je rent eindelijk het hotel in')
        hotel();
      }
      if (escape==1) {
        console.log (`${naam}: Ik blijf hier wel staan`)
        console.log (`============Even later komen der 2 bewapende agenten naar binnen============`)
        console.log (`Bewapende Agenten: STAAN BLIJVEN EN NIET BEWEGEN!!`)
        console.log (`${naam}: Ik doe niks`)
        console.log (`Bewapende Agenten: HANDEN OMHOOG EN NIET BEWEGEN!!`)
        const handenomhoog = readlineSync.keyInSelect(['Niet luisteren en wegrennen', 'Luisteren naar de agenten en je handen omhoog doen', ], 'Wat ga je doen?');
        if (handenomhoog==1) {
          console.log ('Je bent niet aan het luisteren naar de agenten')
          console.log ('Zodra je begint te rennen. Beginnen de agenten te schieten')
          console.log ('Je bent helaas overleden')
          console.log ('===================================')
          console.log ('EINDE')
          console.log ('===================================')
          startgame()
        }
        if (handenomhoog==0) {
          console.log ('Je wordt eerst geboeid door de agenten en dan wordt je meegenomen')
          console.log ('Ze stoppen je in een undercover politie auto en ze nemen je mee')
          console.log ('===============PAAR UUR LATER JE ARRIVEERT OP DE POLITIE BUREAU===============')
          console.log ('Bewapende agent: Haal hem maar uit de auto')
          console.log (`${naam}: Waar ben ik?`)
          console.log ('Bewapende agent: Je bent op de politie bureau we brengen je naar de commissaris')
          console.log ('===============PAAR MINUTEN LATER ===============')
          console.log ('Commissaris: Goed werk gedaan heren!!')
          console.log (`Commissaris: Goedendag ${naam} je weet waarom u hier bent. `)
          console.log (`${naam}: Ik heb geen idee`)
          console.log (`Commissaris: De reden is omdat de agent bij de bureau had aangeven dat iemand met de naam ${naam} zich wil aangeven`)
          function vraag1() {
          const vraag1 = readlineSync.keyInSelect(['Wat heb ik gedaan', 'Wat ga je met mij doen', ], 'Wat ga je vragen?');
          if (vraag1==0) {
            console.log (`${naam}: Wat ga je met mij doen?`)
            console.log (`commissaris: op dit moment gaan we nog niks met jou doen`)
          }
          if (vraag1==1) {
            console.log (`${naam}: Kan je vertellen wat ik heb gedaan. Want het lijkt alsof ik hier voor niks zit`)
            console.log (`Commissaris: Ga je nu ontkennen?`)
          }
          console.log(`Commissaris: De agent op de bureau heeft aan mij vertelt dat je zo wat alles bent vergeten `)
          console.log(`${naam}: Dat is juist wat ik probeer te zeggen`)
          console.log(`Commissaris: Oke, Ik ga het dan even vertellen. 5 dagen voordat je de ongeval van je scooter hebt gehad. Wordt je verdacht van moord en we konden jou al die tijd niet vinden op je aan te houden en hebben we je. `)
          console.log(`${naam}: Dat heb ik helemaal niet gedaan!`)
          console.log(`Commissaris: Oke, We hebben nu een onderzoek. Zodra die onderzoek klaar is mag je uit de gevangenis. `)
          console.log(`${naam}: DUS IK GA NU NAAR DE GEVANGENIS`)
          console.log(`Commissaris: Ja dat heb je goed begrepen.`)
          console.log(`Commissaris: We wachten nu even op de transport naar de gevangenis.`)
          console.log(`====================20 MINUTEN LATER====================`)
          console.log(`Commissaris: Stap maar in de bus`)
          console.log(`====================50 MINUTEN LATER AANKOMST GEVANGENIS====================`)
          console.log(`DJI agent: Goedendag, ${naam} U bent aangekomen in de gevangenis `)
          console.log('DJI agent: Kan je al je spullen in deze zak doen')
          const gevangenis = readlineSync.keyInSelect(['Doe spullen in zak', ], 'Wat ga je doen?');
          if (gevangenis==0) {
            console.log ('Je doet alle spullen die je hebt in de zak')
          }
          console.log ('Doe deze kleren aan.')
          console.log ('Doe je oude kleren in deze zak')
          const klerenuit = readlineSync.keyInSelect(['Doe de nieuwe kleren aan', ], 'Wat ga je doen?');
          if (klerenuit==0) {
            console.log ('Je doet al je oude kleren uit en doet die in de zak')
            console.log ('Je doet je nieuwe kleren aan')
          }
          console.log ('DJI agent: Kom maar mee ik breng je naar je cel. ')
          console.log ('DJI agent: Dit is je cel voor de aankomende tijd als je nog vragen hebt hoor ik het')
          const cel = readlineSync.keyInSelect(['Je loopt de cel in', 'Je loopt de cel niet in', ], 'Wat ga je doen?');
          if (cel==0) {
            console.log ('Je loopt de cel in')
          }
          else {
            console.log ('De DJI agent duwt je de cel in')
          }
          console.log ('De DJI agent wenst je veel succes en doet de deur achter je dicht')
          console.log (`====================================`)
          console.log (`EINDE`)
          console.log (`====================================`)
          startgame()
          }
        }
      }
    }
  }
}
}
function naarhethuis()
{
      console.log ('Je bent bij het grotehuis wat, Wat ga je doen?')
      const grotehuis = readlineSync.keyInSelect(['Je belt aan', 'Je klopt op de deur', 'Je loopt weg', ], 'Wat ga je doen?');
      if (grotehuis==0) {
        console.log ('Je belt aan')
        console.log ('Niemand doet open')
        startgame()
      }
      if (grotehuis==1) {
        console.log ('Je klopt aan')
        console.log ('Niemand doet open')
        startgame()
      }

      if (grotehuis==2) {
        console.log ('Je loopt weg')
        startgame()
      }
    }
startgame()









