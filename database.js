fetch("database.json")
.then(res => res.json())
.then(data => {
    data.Ademir.A.forEach((exercise, count) => {
        const newexercise = document.createElement("p")
        newexercise.textContent = exercise
        ficha["treino-a"].appendChild(newexercise)

        if (exercise != "Null") {
            const peso = document.createElement("input")
            peso.id = `peso-a ${count}`
            peso.type = "number"
            peso.className = "peso"
            ficha["treino-a"].appendChild(peso)
            peso.value = localStorage.getItem(peso.id)

            const reps = document.createElement("input")
            reps.id = `reps-a ${count}`
            reps.type = "number"
            reps.className = "reps"
            ficha["treino-a"].appendChild(reps)
            peso.value = localStorage.getItem(reps.id)

            const sets = document.createElement("input")
            sets.id = `sets-a ${count}`
            sets.type = "number"
            sets.className = "sets"
            ficha["treino-a"].appendChild(sets)
            peso.value = localStorage.getItem(sets.id)
        }
    })

    
})