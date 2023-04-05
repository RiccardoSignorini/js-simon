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

const gameButton = document.querySelector('button')

let resultsList = document.querySelector('#results')

let intervalNum

let randomNum1 = []

let results = []

// PUSH NEL CONTENITORE
while(randomNum1.length<5){
    let randomNum2 = randomNum(1,100)

    if(!randomNum1.includes(randomNum)){
        randomNum1.push(randomNum2)
    }
}
console.log(randomNum1)

// EVENTI AL CLICK
gameButton.addEventListener('click', function(){

    intervalNum = setInterval(function(){
        // INTERVALLI DI STAMPA IN PAGINA
        for(i=0; i<5; i++){
            randomList.innerHTML += `<li>${randomNum1[i]}</li>`
        }
    },2000)

    // BLOCCO INTERVALLI DI STAMPA
    setTimeout(function(){
        clearInterval(intervalNum)
    },2100)

    // CANCELLAZIONE NUMERI
    setTimeout(function(){
        randomList.classList.add('none')
    },10000)

    // COMPARSA PROMPT
    setTimeout(function(){
        for(i=1; i<=5; i++){
            var userNum = parseInt(prompt(`Ti ricordi il numero ${[i]}?`))
            console.log(`il numero è ${userNum}`)
            resultsList.innerHTML += `<li>${userNum}</li>`

            if(!results.includes(userNum)){
                results.push(userNum)
            }
        }
        // RICOMPARSA NUMERI
        randomList.classList.add('block')
        console.log(results)
    },13000)
})