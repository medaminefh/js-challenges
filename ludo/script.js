
// Ajout d'un gestionnaire d'événements pour détecter le clic sur la cellule bleue
document.querySelector('.blue').addEventListener('click', function() {
    // Appel de la fonction pour changer la couleur bleue aléatoirement
    changeColorRandomly(this)
})

function changeColorRandomly(cell) {
    // Liste des couleurs possibles
    var colors = ['red', 'yellow', 'blue', 'green']


    var randomColor = colors[Math.floor(Math.random() * colors.length)]

    // Changement de la couleur 
    cell.style.backgroundColor = randomColor
}
