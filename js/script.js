// creare password dell'utente



// chiedi il suo nome
const userName = (prompt( "Inserisci il tuo nome"));


// chiedi il suo cognome
const userSurname = (prompt( "Inserisci il tuo cognome"));


// chiedi il suo colore preferito
const color = (prompt( "Inserisci il tuo colore preferito"));


// aggiungi numero 23
const number = 23;


// crea password

const password = userName + userSurname + color +number;

// console.log(password);

document.getElementById("password").innerHTML= "La tua password è " + password;

