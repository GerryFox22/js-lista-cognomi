// chiedi all’utente il cognome
// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

let cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

console.log("La lista attuale dei cognomi è:" +cognomi) ;

let cognomeInserito = prompt ("Inserisci il tuo cognome")
let cognomeInseritoMaiuscola = cognomeInserito.charAt(0).toUpperCase() + cognomeInserito.slice(1)

cognomi.push(cognomeInseritoMaiuscola);

console.log("La nuova lista di cognomi è:" +cognomi)

cognomi.sort();

console.log("La lista in ordine alfabetico è:" +cognomi);

console.log("Sei al "+ (cognomi.indexOf(cognomeInseritoMaiuscola) + 1) + "° posto nella lista!");