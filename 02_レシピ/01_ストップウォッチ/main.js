const display = document.getElementById("display")
const button = document.getElementById("button")
let count = 0

const countUp = function () {
  count += 1
  display.textContent = count / 100
}

let id = null

button.onclick = function () {
  if (id === null) {
    id = setInterval(countUp, 10)
    //↑「10/1000秒ごとにcountUp関数を発動する」という処理
    //つまり1/100秒ごとに（countUp関数→）1/100ずつカウントが進んでいき、それがdisplayに表示されるという処理
    console.log(id)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
