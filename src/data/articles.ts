import trainingImage from "../assets/images/comehere.webp";
import walkImage from "../assets/images/walkroutines.webp";
import cafeImage from "../assets/images/cafevisit.webp";

export type Article = {
    id: number;
    title: string;
    category: string;
    description: string;
    tips?: string[];
    image: string;
};

export const articles: Article[] = [
    {
        id: 1,
        title: "Så tränar du inkallning",
        category: "Träning",
        description:
            "Enkla tips för att stärka kontakt och trygghet mellan dig och din hund. Inkallning är en av de viktigaste övningarna i vardagen med hund. Det handlar inte bara om att hunden ska komma när du ropar, utan också om att bygga kontakt och trygghet mellan hund och ägare.",
        tips: [
            "Börja träna inkallning i en lugn miljö med få störningar.",
            "Använd en glad röst, belöna snabb som godis eller lek, när hunden kommer till dig.",
            "Träna inkallning i korta pass och öka gradvis svårighetsgraden, till exempel längre avstånd eller en mer aktiv miljö.",
            "Var konsekvent och träna regelbundet, men avsluta alltid träningen på ett positivt sätt.",
            "Var tålmodig och ha realistiska förväntningar. Alla hundar lär sig i sin egen takt.",
        ],
        image: trainingImage,
    },
    {
        id: 2,
        title: "Bästa promenadrutinerna",
        category: "Vardag",
        description:
            "Skapa en lugn och balanserad promenad som fungerar i vardagen. En bra promenadrutin behöver inte vara avancerad. För många hundar är det viktigaste att promenaden är förutsägbar, lugn och ger tid för både rörelse och nosarbete.",
        tips: [
            "Skapa en tydlig rutin för promenaderna, till exempel samma tid på dagen och samma rutt.",
            "Variera promenaderna med olika miljöer, underlag och aktiviteter för att stimulera hunden både fysiskt och mentalt.",
            "Ge hunden tid att nosa och utforska under promenaden. Det är viktigt för hundens välbefinnande.",
            "Använd rätt utrustning, som sele eller koppel, som passar din hunds behov och storlek.",
            "Var uppmärksam på hundens signaler och anpassa promenaden efter dess behov och energinivå.",
        ],  
        image: walkImage,
    },
    {
        id: 3,
        title: "Ta med hunden på café",
        category: "Hundvänliga platser",
        description:
            "Vad du kan tänka på när du besöker caféer och offentliga miljöer. Att ta med hunden till ett café kan vara både trevligt och socialt, men det kräver att miljön fungerar för hunden. En del hundar trivs snabbt bland människor, ljud och rörelse, medan andra behöver mer tid och lugnare platser.",
        tips: [
            "Välj ett hundvänligt café som har utrymme för hunden att sitta eller ligga ner.",
            "Ta med en filt eller hundbädd så att hunden har en egen plats att vila på.",
            "Ha med vatten och eventuellt en skål för hunden, särskilt under varma dagar.",
            "Var uppmärksam på hundens signaler och behov. Om hunden blir stressad eller orolig, ta en paus eller lämna caféet.",
            "Belöna hunden för lugnt och trevligt beteende under besöket, till exempel med godis eller beröm.",
            "Var noga med att följa caféets regler och respektera andra gäster. Håll hunden kopplad och under kontroll.",
        ],
        image: cafeImage,
    },
];