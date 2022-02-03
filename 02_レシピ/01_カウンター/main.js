const plusButton = document.getElementById("plus-button")
const display = document.getElementById("display")
let number = 0

const plusFunction = function () {
  number += 1
  display.textContent = number
}

plusButton.onclick = plusFunction
