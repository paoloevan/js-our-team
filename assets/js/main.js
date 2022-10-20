/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede
*/

// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
const team = [
    {
        nome: 'Wayne Barnett',
        ruolo:'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela',
        ruolo:'Chief Editor',
        foto: 'angela-carro-chief-editor.jpg'
    },
    {
        nome: 'Waleter gordon',
        ruolo:'Chief Editor',
        foto: 'waleter-gordon-office-manager.jpg'
    },
    {
        nome: 'Wayne Barnett',
        ruolo:'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scotto Estrada',
        ruolo:'Developer',
        foto: 'scotto-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo:'Graphic Designer',
        foto: 'barbara-ramos-graphiv-designer.jpg'
    }
];
console.log(team);