const maxNumber = prompt('Choose a max random number')
const randomNumber = parseInt(Math.random() * maxNumber) + 1
let myNumber = prompt(`Choose a number between 1 and ${maxNumber}`)
let attempts = 1

while (myNumber != randomNumber) {
    attempts++
    if (myNumber > randomNumber) {
        myNumber = prompt('Too high, try again')
    } else {
        myNumber = prompt('Too low, try again')
    }
}
const containerTexto = document.getElementsByClassName("container__texto")[0]
containerTexto.innerHTML = `
<h1>Você <span class='container__texto-azul'>acertou!</span></h1>
<h2>Você descobriu o número secreto com ${attempts} tentativa${attempts > 1 ? "s" : ""}!</h2>
`

alert(`You win the game with ${attempts} times!`)
