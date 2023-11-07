
  const modeToggle = document.getElementById("modeToggle")
  const body = document.body;
  const moonIcon = document.getElementById("moon")
  const sunIcon = document.getElementById("sun")

  modeToggle.addEventListener("change", () => {
    if (modeToggle.checked) {
      body.classList.add("dark-mode")
      moonIcon.style.display = "none"
      sunIcon.style.display = "inline"
    } else {
      body.classList.remove("dark-mode")
      moonIcon.style.display = "inline"
      sunIcon.style.display = "none"
    }
  })


const h2Element = document.getElementById("changeColor")

function getRandomColor() {
  const letters = "0123456789ABCDEF"
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

h2Element.addEventListener("click", () => {
  // Génère une couleur aléatoire
  const randomColor = getRandomColor();
  
  // Applique la couleur de fond aléatoire à l'élément <h2>
  h2Element.style.backgroundColor = randomColor
})



