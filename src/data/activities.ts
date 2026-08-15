import walkImage from "../assets/images/walkgroup.webp";
import trainingImage from "../assets/images/puppytraining.webp";
import cafeImage from "../assets/images/cafevasastan.webp";
import aktivitydogImage from "../assets/images/aktivitydog.webp";

export type Activity = {
  id: number;
  title: string;
  category: string;
  location: string;
  distance: string;
  description: string;
  image: string;
  alt: string;
  time?: string;
  date?: string;
  duration?: string;
  price?: string;
  suitableFor?: string;
  intro?: string;
  about?: string[];
  program?: string[];
  tips?: string[];
  questions?: string;
};

export const activities: Activity[] = [
  {
    id: 1,
    title: "Promenadgrupp i Hagaparken",
    category: "Promenad",
    location: "Hagaparken",
    distance: "2 km bort",
    image: walkImage,
    alt: "Hundägare promenerar tillsammans med sina hundar i Hagaparken",
    description:
      "En lugn promenad för hundägare som vill träffa andra i området. Aktiviteten passar både nya och vana hundägare.",
    time: "Söndagar kl. 10.00",
    duration: "Cirka 60 minuter",
    price: "Kostnadsfritt",
    suitableFor:
      "Hundägare som vill träffa andra och promenera i lugnt tempo",

    intro:
      "Följ med på en lugn och social promenad där både hundar och hundägare får möjlighet att träffas, umgås och upptäcka nya promenadstråk tillsammans.",

    about: [
      "Promenadgruppen passar dig som vill göra hundpromenaden mer social och samtidigt ge din hund möjlighet att vistas nära andra hundar på ett lugnt och kontrollerat sätt.",
      "Under promenaden går gruppen i ett lugnt tempo genom Hagaparken. Det finns tid för samtal, erfarenhetsutbyte och kortare pauser.",
      "Aktiviteten fungerar bra för hundägare som vill ha mer inspiration i vardagen och hitta nya promenadstråk."
    ],

    tips: [
      "Ta gärna med vatten till både dig och hunden.",
      "Använd vanligt koppel under hela promenaden.",
      "Kom några minuter innan start så gruppen kan samlas i lugn och ro.",
      "Visa hänsyn till andra deltagare, hundar och personer i parken."
    ]
  },
{
  id: 2,
  title: "Valpträning utomhus",
  category: "Träning",
  location: "Vasaparken",
  distance: "3 km bort",
  image: trainingImage,
  alt: "Hundägare tränar valpar tillsammans utomhus i en park",
  description:
    "Träning med fokus på kontakt, inkallning och vardagslydnad i en trygg, avkopplad och positiv miljö varje söndag från kl. 10.00 till kl. 11.00.",

  time: "Tisdagar kl. 17.30",
  duration: "Cirka 45 minuter",
  price: "120 kr per tillfälle",
  suitableFor:
    "Valpar och unga hundar som behöver träna kontakt och vardagslydnad",

  intro:
    "Träna tillsammans med din valp i en trygg och positiv miljö med fokus på kontakt, inkallning och vardagslydnad.",

  about: [
    "Valpträningen passar dig som vill stärka kontakten mellan dig och din valp på ett lugnt och positivt sätt. Övningarna är enkla och anpassade för unga hundar som håller på att lära sig vardagens grundläggande rutiner.",
    "Under träningen arbetar deltagarna med kontaktövningar, inkallning och vardagslydnad. Målet är att skapa trygghet, tydlighet och samarbete mellan hund och ägare i en miljö där valpen också får träna på att vistas nära andra hundar.",
    "Aktiviteten fungerar bra för hundägare som vill få inspiration till hur man kan träna korta stunder i vardagen och samtidigt bygga en positiv relation med sin hund."
  ],

  tips: [
    "Ta med små hundgodisar som valpen tycker om.",
    "Ha valpen i koppel under hela träningen.",
    "Ta gärna med vatten och en filt om valpen behöver vila.",
    "Håll träningspassen korta och positiva."
  ]
},
{
  id: 3,
  title: "Hundvänligt caféhäng",
  category: "Café",
  location: "Vasastan",
  distance: "3 km bort",
  image: cafeImage,
  alt: "Hundägare umgås tillsammans med sina hundar på ett hundvänligt café i Vasastan",
  description:
    "Träffa andra hundägare på ett hundvänligt café med avslappnad stämning och social gemenskap.",

  time: "Torsdagar kl. 18.00",
  duration: "Cirka 90 minuter",
  price: "Du betalar själv för fika",
  suitableFor:
    "Hundägare som vill träffa andra i en lugn och social miljö",

  intro:
    "Träffa andra hundägare på ett hundvänligt café i Vasastan med avslappnad stämning, fika och social gemenskap.",

  about: [
    "Hundvänligt caféhäng passar dig som vill träffa andra hundägare i en avslappnad miljö. Aktiviteten är tänkt som en social träff där både människor och hundar kan känna sig välkomna.",
    "Under träffen finns möjlighet att fika, prata med andra hundägare och dela erfarenheter kring vardagen med hund. Miljön är lugn och enkel att ta sig till, vilket gör aktiviteten till ett bra alternativ för både nya och vana hundägare.",
    "Caféhänget fungerar också som ett sätt för hunden att träna på att vistas i offentliga miljöer på ett tryggt och kontrollerat sätt."
  ],

  tips: [
    "Håll hunden nära dig och visa hänsyn till andra gäster.",
    "Ta gärna med en filt eller liten plats där hunden kan vila.",
    "Se till att hunden har rastats innan cafébesöket.",
    "Välj en lugn plats om din hund är ovan vid offentliga miljöer."
  ]
},
{
  id: 4,
  title: "Aktivitetsdag på Djurgården",
  category: "Event",
  location: "Djurgården",
  distance: "6 km bort",
  image: aktivitydogImage,
  alt: "Hundar och hundägare deltar i en aktivitetsdag utomhus på Djurgården",

  description:
    "Aktivitetsdagen bjuder på social gemenskap, inspiration och roliga aktiviteter för både hundar och hundägare.",

  intro:
    "En inspirerande dag fylld med roliga aktiviteter, hundmöten och gemenskap för både hundar och deras ägare.",

  date: "Lördag 14 juni",
  time: "Kl. 11.00–15.00",
  price: "Kostnadsfritt",
  suitableFor:
    "Alla hundägare, familjer och hundar i olika åldrar",

  about: [
    "Aktivitetsdagen är ett öppet evenemang där hundägare kan träffas, inspireras och prova olika aktiviteter tillsammans med sina hundar. Målet är att skapa en trevlig mötesplats där både nya och erfarna hundägare känner sig välkomna.",
    "Under dagen finns möjlighet att delta i enklare prova-på-aktiviteter, träffa andra hundägare och få inspiration kring ett aktivt hundliv. Det finns även gott om utrymme för social samvaro och promenader i den natursköna miljön på Djurgården.",
    "Aktiviteten passar perfekt för dig som vill upptäcka nya hundvänliga aktiviteter, skapa nya kontakter och ge din hund en rolig dag tillsammans med andra hundar."
  ],

  program: [
    "11.00 – Välkommen och gemensam promenad",
    "12.00 – Prova-på-träning och aktivitetsövningar",
    "13.00 – Hundvänligt caféhäng och fika",
    "14.00 – Frågestund och erfarenhetsutbyte"
  ],

  tips: [
    "Ta med vatten och en vattenskål till hunden.",
    "Kom gärna i god tid för att hinna ta del av dagens aktiviteter.",
    "Ha hunden kopplad under hela evenemanget.",
    "Visa hänsyn till andra deltagare och hundar."
  ],

  questions:
    "Har du frågor om aktivitetsdagen är du välkommen att kontakta arrangören eller prata med våra volontärer på plats under evenemanget."
},
];