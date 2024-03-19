console.log(' ciao');

// *SNACK 1
// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo,
// nome dell’ospite,
// posto occupato.
// Generiamo e stampiamo in console la lista per i segnaposto.

const tavoloVip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// console.log(tavoloVip);

// per ogni elemento dell'array creare un oggetto con le informazioni di ogni ospite
const tavoloVipOutput = []
// contatore posto
let posto = 0

for (let i = 0; i < tavoloVip.length; i++) {
    const vip = {}
    posto +=1
    vip.nomeOspite = tavoloVip[i]
    vip.nomeTavolo = 'Tavolo Vip'
    vip.posto = posto
    // console.log(vip, posto);
    tavoloVipOutput.push(vip)
}

console.log(tavoloVipOutput);