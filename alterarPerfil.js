import {doc, setDoc, db} from "./firestore.js"

const nomeUser = localStorage.getItem("nomeUser")

const idadeInput = document.getElementById("idade")
const alturaInput = document.getElementById("altura")
const pesoInput = document.getElementById("peso")
const frequenciaInput = document.getElementById("frequencia")

const alterarButton = document.getElementById("alterarPerfil")

let modoEditor = false

alterarPerfil.addEventListener("click", async function() {
    if (modoEditor === false) {
        modoEditor = true
        alterarButton.textContent = "Salvar"

        idadeInput.disabled = false
        pesoInput.disabled = false
        alturaInput.disabled = false
        frequenciaInput.disabled = false

    } else {
        modoEditor = false
        alterarButton.textContent = "Alterar Perfil"

        idadeInput.disabled = true
        pesoInput.disabled = true
        alturaInput.disabled = true
        frequenciaInput.disabled = true

        const docRef = doc(db, "cadastro", nomeUser)

        try {
            await setDoc(docRef, {
                idade: idadeInput.value,
                peso: pesoInput.value,
                altura: alturaInput.value,
                frequencia: frequenciaInput.value
            }, {merge: true})

        } catch (error) {
            console.log(error)
        }
    }
})
