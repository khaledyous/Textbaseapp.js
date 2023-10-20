let  readlineSync =  require('readline-sync');

console.log ('Welkom mijn naam is Khaled en Welkom bij mijn Adventure game. Veel speelplezier!!')

let userName = readlineSync.question('Voordat we gaan beginnen mag ik jou naam weten?');
console.log('Hoi' + userName + '!' + 'Welkom bij de avondtuur!');

console.log('+++++++++++++++++++++++++++')
console.log('Het Horror Avondtuur')
console.log('+++++++++++++++++++++++++++')

const Avondtuur = {
    intro: {
        prompt:'Wat ga je doen?',
        text: 'Je bent aan het wandelen in het bos. Je ziet in de verte iets op de grond liggen.',
        options: [
            {
                key: 'Weggaan',
                action: 'Wegrennen'
            },
            {
                key: 'Gaan',
                action: 'Naar toe gaan'
            }
        ],
    
    },

Weggaan: {
    prompt:'Wat ga je doen?',
    text: 'Je rent door de bos welke kant ga je op?',
    options: [
        {
            key: 'Rechts',
            action: 'Oosten'
        },
    
    ]
},


Gaan: {
    prompt: 'Wat ga je doen',
    text: 'Je ziet een persoon met een mes in zijn buik',
    options: [
        {
            key: 'Deruithalen',
            action: 'Je trekt de mes uit zijn buik'
        },
        {
            key: 'Bellen',
            action: ' Je belt de politie'
        }
    ]
},


Rechts: {
    prompt: 'Wat ga je doen',
    text: 'Je loopt naar het oosten',
    options: [
        {
            key: 'verlorenhelaas',
            action: 'Laten we kijken hoe de verhaal veder gaat.....'

        }
    ]
},


Deruithalen: {
    prompt:'Wat ga je doen',
    text:'Je haalt de mes uit zij lichaam maar zodra je dat doet hoor je de politie sirenes op de achtergrond ',
    options: [
        {
            key: 'Rennen',
            action:'Wegrennen'
        },
        {
            key: 'Staan',
            action: 'Je blijf staan'
        }
        
    ],
},




Bellen: {
    prompt: 'Wat ga je doen?',
    text: 'De politie vraagt je locatie',
    options: [
        {
            key: 'Geven',
            action: 'Je geeft je exacte locatie aan de politie'
        },
        {
            key:'Niet geven',
            action: 'Je geeft je locatie niet aan de politie',
        }

    ]
},


veder










































}




















































































































const getPrompts = Avondtuur => {
    const mainPrompt = Avondtuur.prompt,
    options = Avondtuur.options,
    text = Avondtuur.text,
    optionsLength = options.length,
    optionsPrompt = options
       .map((option, i) => `[${i + 1}] ${option.action}`)
        .join("\n");
    return { mainPrompt, text, options, optionsLength, optionsPrompt }
  }
  
  const avondtuur = (currentAvondtuur = Avondtuur.intro) => {
    const { text, mainPrompt, options, optionsLength, optionsPrompt } = getPrompts(currentAvondtuur);
    console.log(text)
  
    let response = readlineSync.question(`${mainPrompt}\n${optionsPrompt}\n`)
    response = parseInt(response);
    if (response > optionsLength) response = NaN;
    if (isNaN(response)) console.log(`"${response}" Je hebt geen goede antwoord gegeven druk 1 of 2 in!`);
    if (!response) avondtuur(currentAvondtuur);
  
    const nextAvondtuur = options[response - 1].key
    avondtuur(Avondtuur[nextAvondtuur])
  }
  
  avondtuur();