/* let bonusPoints = 50
console.log(bonusPoints)

bonusPoints = bonusPoints + 50
console.log(bonusPoints)

bonusPoints = bonusPoints - 75
console.log(bonusPoints)
 */

let countEl= document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let c=0
function increment() {
    c+=1
    countEl.innerText=c
}
function save(){
    let saved = c + "-"
    saveEl.innerText += saved /* saveEl.textContent += saved */
    countEl.textContent=0
    c=0
}


