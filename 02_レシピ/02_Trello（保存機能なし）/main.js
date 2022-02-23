const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

const deleteTodo = document.createElement("div")
deleteTodo.className = "delete"

const addToDo = function () {
  const text = inputElement.value
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  card.append(todo)
  card.append(deleteTodo)

  container.append(card)

  inputElement.value = ""

  deleteTodo.onclick = function () {
    card.remove()
  }
}

addButton.onclick = addToDo
