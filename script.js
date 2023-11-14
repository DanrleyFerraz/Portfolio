function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  const gifDark = document.querySelector("#backend-gif")
  const gifLight = document.querySelector("#backend-gif-light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    gifDark.style.display = "none"
    gifLight.style.display = "block"
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    gifDark.style.display = "block"
    gifLight.style.display = "none"
  }
}
