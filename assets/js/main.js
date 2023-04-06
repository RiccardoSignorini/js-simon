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
const gameButton = document.querySelector('button')

const randomList = document.querySelector('#random-list')

const memoryUserList = document.querySelector('#user-memory')

const sentenceResults = document.querySelector('#sentence-results')

const resultsList = document.querySelector('#results-list')

let intervalNum

let randomNum1 = []

let memoryNum = []

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

    setTimeout(function(){
        // COMPARSA PROMPT
        for(i=1; i<=5; i++){
            var userNum = parseInt(prompt(`Ti ricordi il numero ${[i]}?`))
            console.log(`il numero è ${userNum}`)
            memoryUserList.innerHTML += `<li>${userNum}</li>`

            if(!memoryNum.includes(userNum)){
                memoryNum.push(userNum)
            }
        }
        // RICOMPARSA NUMERI
        randomList.classList.add('block')
        console.log(memoryNum)
        // CONTROLLO NUMERI
        for(n=0; n<memoryNum.length; n++){
            if(randomNum1.includes(memoryNum[n])){
                results.push(memoryNum[n])
            }
        }
        console.log(results)
        // STAMPA RISULTATI
        if(results.length==0){
            sentenceResults.innerHTML = `Hai indovinato ${results.length} numeri, riprova!` 
        } else if (results.length>0){
            sentenceResults.innerHTML = `Hai indovinato ${results.length} numeri e sono:`
            for(n=0; n<results.length; n++){
                resultsList.innerHTML += `<li>${results[n]}</li>`
            }
        }
    },13000)
})