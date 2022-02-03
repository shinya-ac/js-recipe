const figure = document.getElementById("figure")

figure.onclick = function () {
  if (figure.className == "square rounded transition") {
    figure.className = "square transition"
  } else if (figure.className == "square transition") {
    figure.className = "square rounded transition"
  }
}
