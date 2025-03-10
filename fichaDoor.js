const fichas = {}
const treinos = {}
const letras = ["A", "B", "C", "D", "E"]

let open = {}

letras.forEach((letra) => {
    fichas[letra] = document.getElementById(`ficha${letra}`)
    treinos[letra] = document.getElementById(`treino${letra}`)
    treinos[letra].addEventListener("click", function() {
        fichas[letra].style.display = fichas[letra].style.display === "block" ? "none": "block"
        treinos[letra].style.color = open[letra] === false ? "#ffffff" : "#008cff" 
        open[letra] = open[letra] === false
    })
})