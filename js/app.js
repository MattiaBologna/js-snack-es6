console.log(' ciao');

// *SNACK 1
// // Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// // Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
// // [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// // Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// // nome del tavolo,
// // nome dell’ospite,
// // posto occupato.
// // Generiamo e stampiamo in console la lista per i segnaposto.

// const tavoloVip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// // console.log(tavoloVip);

// // per ogni elemento dell'array creare un oggetto con le informazioni di ogni ospite
// const tavoloVipOutput = []
// // contatore posto
// let posto = 0

// for (let i = 0; i < tavoloVip.length; i++) {
//     const vip = {}
//     posto +=1
//     vip.nomeOspite = tavoloVip[i]
//     vip.nomeTavolo = 'Tavolo Vip'
//     vip.posto = posto
//     // console.log(vip, posto);
//     tavoloVipOutput.push(vip)
// }

// console.log(tavoloVipOutput);

// * SNAK 2
// // Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// // 1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
// // ES (Marco della Rovere => MARCO DELLA ROVERE);
// // 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// // 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
// // Questo è l’elenco degli studenti:
// // Id   Name                    Grades
// // 213  Marco della Rovere      78
// // 110  Paola Cortellessa       96
// // 250  Andrea Mantegna 	      48
// // 145  Gaia Borromini          74
// // 196  Luigi Grimaldello 	  68
// // 102  Piero della Francesca   50
// // 120  Francesca da Polenta    84

// const students = [
//     {
//         id: 213,
//         name: 'Marco della Rovere',
//         grades: 78
//     },
//     {
//         id: 110,
//         name: 'Paola Cortellessa',
//         grades: 96
//     },
//     {
//         id: 250,
//         name: 'Andrea Mantegna',
//         grades: 48
//     },
//     {
//         id: 145,
//         name: 'Gaia Borromini',
//         grades: 74
//     },
//     {
//         id: 196,
//         name: 'Luigi Grimaldello',
//         grades: 68
//     },
//     {
//         id: 102,
//         name: 'Piero della Francesca',
//         grades: 50
//     },
//     {
//         id: 120,
//         name: 'Francesca da Polenta',
//         grades: 84
//     },
// ]

// // console.log(students);

// // ! UPPERCASE LIST
// const upperNamesArray = generateUpperNamesArray(students)
// console.log('Upper case list:', upperNamesArray);


// // ! GREATER THAN 70 LIST
// const gradesGreaterThan70Array = generateGreaterThan70Array(students)
// console.log('Grades > 70 list:', gradesGreaterThan70Array);

// // ! GREATER THAN 70 AND GREATER THAN 120 
// const greaterThan70and120 = generateGreaterThan70And120(gradesGreaterThan70Array)
// console.log('Grades > 70 and Id > 120 list:', greaterThan70and120);

// // ? 1 Creare una lista con i nomi degli studenti in maiuscolo 
// function generateUpperNamesArray(students) {
//     // generare l'array vuoto da restituire
//     const studentsUpperNames = []

//     // rendere maiuscoli i nomi degli studenti 
//     for (let i = 0; i < students.length; i++) {
//         // recuperare i nomi degli studenti
//         const studentName = students[i].name
//         const studentNameUpper = studentName.toUpperCase()
//         studentsUpperNames.push(studentNameUpper)
//     }

//     return studentsUpperNames
// }


// // ? 2 Creare un'array con tutti gli studenti che hanno più di 70 come somma voti
// function generateGreaterThan70Array(students) {
//     // generare l'array vuoto da restituire
//     const gradesGreaterThan70 = []

//     // prendere i voti degli studenti 
//     for (let i = 0; i < students.length; i++) {
//         // recuperare i voti degli studenti
//         const studentGrade = students[i].grades
        
//         if (studentGrade > 70) {
//             gradesGreaterThan70.push(students[i])
//         }
//     }

//     return gradesGreaterThan70
// }

// // ? 3 Creare un'array con tutti gli studenti che hanno più di 70 come somma voti e più di 120 come id
// function generateGreaterThan70And120(gradesGreaterThan70Array) {
//     // generare l'array vuoto da restituire
//     const greaterThan70and120 = []

//     // prendere gli id degli studenti 
//     for (let i = 0; i < gradesGreaterThan70Array.length; i++) {
//         // recuperare i voti degli studenti
//         const studentId = students[i].id
        
//         if (studentId > 120) {
//             greaterThan70and120.push(students[i])
//         }
//     }

//     return greaterThan70and120
// }

// * SNACK 3
// // Creare un array di oggetti:
// // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// // Stampare in console la bici con peso minore utilizzando destructuring e template literal

// const bikeArray = [
//     {
//         name: 'Bicicletta1',
//         weight: 3
//     },
//     {
//         name: 'Bicicletta2',
//         weight: 2
//     },
//     {
//         name: 'Bicicletta3',
//         weight: 5
//     },
//     {
//         name: 'Bicicletta4',
//         weight: 1
//     },
//     {
//         name: 'Bicicletta5',
//         weight: 10
//     },
//     {
//         name: 'Bicicletta6',
//         weight: 7
//     },
// ]

// // console.log(bikeArray)

// // verificare quale bicicletta ha il peso minore e stamparla in console 
// findLightestBike(bikeArray) 


// // ? NO DESTRUCTURING
// // function findLightestBike(bikeArray) {
// //     // impostare la prima come più leggera
// //     let lightestBike = bikeArray[0]

// //     // se un`altra bici è più leggera cambiare lightestBike
// //     for (let i = 0; i < bikeArray.length; i++) {
// //         const currentBike = bikeArray[i]
// //         const currentWeight = currentBike.weight
// //         // console.log(currentBike);
// //         // console.log(currentWeight);

// //         if (currentWeight < lightestBike.weight) {
// //             lightestBike = currentBike
// //         }
        
// //     }

// //     console.log(lightestBike);
// // }

// // ? DESTRUCTURING 
// function findLightestBike(bikeArray) {
//     // impostare la prima bici come lightestBike
//     let lightestBike = bikeArray[0]

//     for (let i = 0; i < bikeArray.length; i++) {
//         // destructuring the bike object 
//         const {name, weight} = bikeArray[i]

//         // se trovo una bici più leggera la sostituisco a quella attiva
//         if (weight < lightestBike.weight) {
//             lightestBike = bikeArray[i]
//         }
        
//     }

//     console.log(lightestBike)
// }


// * SNACK 4
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams = [
    {
        name: 'Milan',
        points: 0,
        fouls: 0
    },
    {
        name: 'Inter',
        points: 0,
        fouls: 0
    },
    {
        name: 'Roma',
        points: 0,
        fouls: 0
    },
    {
        name: 'Napoli',
        points: 0,
        fouls: 0
    }
]


// assegnare i numeri casuali alle proprietà a 0 di ogni squadra
for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    
    team.fouls = generateRandomNumber()
    team.points = generateRandomNumber()
    
}

console.log(teams)


// generare numeri casuali
function generateRandomNumber() {
    const random = Math.floor(Math.random() * 100) + 1

    // console.log(random)
    return random
}

function generateNameFoulsArray() {
    let newArray = []

    for (let i = 0; i < teams.length; i++) {
        const team = teams[i];

        // destructuring
        const {name, fouls} = team
        
        const newObject = {
            name,
            fouls
        }

        newArray.push(newObject)
        
    }

    console.log(newArray);
}

generateNameFoulsArray()