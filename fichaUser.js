import {db, addDoc, setDoc, getDoc, doc} from "./firestore.js"

const fichas = {
    A: document.getElementById("fichaA"),
    B: document.getElementById("fichaB"),
    C: document.getElementById("fichaC"),
    D: document.getElementById("fichaD"),
    E: document.getElementById("fichaE")
};

const tipos = ["peso", "reps", "sets"]

const nomeUser = localStorage.getItem("nomeUser")

async function Dados() {
    const docFicha = doc(db, "ficha", nomeUser)
    const meusDados = await getDoc(docFicha)
    const dados = meusDados.data()

    Object.keys(fichas).forEach((letra) => {
        if (dados[`treino${letra}`]) {
            dados[`treino${letra}`].forEach((itens, count) => {
                const div = document.createElement("div")
                div.id = `${letra}${count}`
                div.style.display = "flex"

                const exercicio = document.createElement("p")
                exercicio.textContent = itens

                tipos.forEach((tipo) => {
                    const input = document.createElement("input")
                    input.id = `${tipo}${letra}${count}`
                    input.className = tipo
                    input.placeholder = tipo
                    input.value = localStorage.getItem(input.id)
                    div.appendChild(input)
                })

                fichas[letra].appendChild(div)
                div.prepend(exercicio)

            })
        }
    })

}

Dados()
