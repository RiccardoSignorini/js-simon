/*
---PROBLEMA---
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// FUNZIONE NUMERI RANDOM
function randomNum(min, max){
    return Math.floor(Math.random()*max)+min
}

// COSTANTI E VARIABILI
const randomList = document.querySelector('#random-list')

let clockNum = setInterval(function(){
    // INTERVALLI DI STAMPA IN PAGINA
    randomList.innerHTML += `<li>${randomNum(1,100)}</li>`
},1000)

let resultsList = document.querySelector('#results')

// BLOCCO INTERVALLI DI STAMPA
setTimeout(function(){
    clearInterval(clockNum)
},5000)

// CANCELLAZIONE NUMERI
setTimeout(function(){
    randomList.classList.add('none')
},30000)

// COMPARSA PROMPT
setTimeout(function(){
    for(i=1; i<=5; i++){
        var userNum = parseInt(prompt(`Scrivi il numero ${[i]}`))
        console.log(`il numero è ${userNum}`)
        resultsList.innerHTML += `<li>${userNum}</li>`
    }
    randomList.classList.add('block')
},33000)