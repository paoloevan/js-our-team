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
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Waleter gordon',
        ruolo: 'Chief Editor',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Wayne Barnett',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
];

//MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
console.log(team);

// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
//seleziono elemento dom
const containerEl = document.querySelector('.container');

printTeam(team, containerEl)

function printTeam(array, wrapperEl) {
    //ciclo all'interno dell'array
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        //creo elemento dom del singolo profilo
        let profileEL = document.createElement('div');
        profileEL.classList.add('row')
        //ciclo all'interno del singolo oggetto
        for (let key in element) {
            let profile = element[key];
            let elementProfile = document.createElement('div')
            if (key === 'foto') {
                profileEL.insertAdjacentHTML('afterbegin', `<img src="./assets/img/${profile}" alt="">`)
            } else if (key === 'ruolo') {
                elementProfile.append(profile)
                elementProfile.style.fontStyle = 'italic'
                profileEL.append(elementProfile)
            } else {
                elementProfile.append(profile)
                elementProfile.style.marginBottom = '0.5rem'
                profileEL.append(elementProfile)
            }

        }
        wrapperEl.append(profileEL)
    }
}
