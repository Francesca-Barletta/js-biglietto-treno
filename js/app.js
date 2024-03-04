console.log('biglietto treno');

/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole
percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
oppure applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va stampato in console in forma “umana”
cioè con al massimo due decimali, per indicare centesimi sul prezzo.
Questo richiederà un minimo di ricerca.
*/

//chiedere all'utente la const km e la const età
const km = parseInt(prompt('inserisci i km del viaggi'));//number
const età = parseInt(prompt('inserisci la tua età'));//number

//definire la const prezzo moltiplicando la const km per 0,21

const prezzo = (0.21) * km;//number
//stampare il prezzo finale con massimo 2 decimali per indicare i centesimi
alert( prezzo.toFixed(2));//number



// definire se l'utente è minerenne o over 65 
//l'utente minorenne avrà età minore di 18
//l'utente over 65 avrà età maggiore/uguale di 65

//SE l'utente è minorenne allora
//const prezzo scontato del 20% 

if (età < 18){
    console.log('il biglietto costa euro ' + (prezzo - ((prezzo * 20) / 100)));//string
} 
//ALTRIMENTI SE l'utente è over65 allora
// const prezzo scontato del 40%
else if (età >= 65){
    console.log('il biglietto costa euro ' + (prezzo - ((prezzo * 40) / 100)));//string
}
//se l'utente non è nè minorenne ne over 65 pagherà il prezzo pieno
else{
    console.log('il biglietto costa euro ' + (prezzo));//string
}

