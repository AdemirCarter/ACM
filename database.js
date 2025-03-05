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
            peso.placeholder = "Peso"
            peso.className = "peso"
            ficha["treino-a"].appendChild(peso)
            peso.value = localStorage.getItem(peso.id)

            const reps = document.createElement("input")
            reps.id = `reps-a ${count}`
            reps.type = "number"
            reps.placeholder = "Reps"
            reps.className = "reps"
            ficha["treino-a"].appendChild(reps)
            reps.value = localStorage.getItem(reps.id)

            const sets = document.createElement("input")
            sets.id = `sets-a ${count}`
            sets.type = "number"
            sets.placeholder = "Sets"
            sets.className = "sets"
            ficha["treino-a"].appendChild(sets)
            sets.value = localStorage.getItem(sets.id)
        }
    })

    data.Ademir.B.forEach((exercise, count) => {
        const newexercise = document.createElement("p")
        newexercise.textContent = exercise
        ficha["treino-b"].appendChild(newexercise)

        if (exercise != "Null") {
            const peso = document.createElement("input")
            peso.id = `peso-b ${count}`
            peso.type = "number"
            peso.placeholder = "Peso"
            peso.className = "peso"
            ficha["treino-b"].appendChild(peso)
            peso.value = localStorage.getItem(peso.id)

            const reps = document.createElement("input")
            reps.id = `reps-b ${count}`
            reps.type = "number"
            reps.placeholder = "Reps"
            reps.className = "reps"
            ficha["treino-b"].appendChild(reps)
            reps.value = localStorage.getItem(reps.id)

            const sets = document.createElement("input")
            sets.id = `sets-b ${count}`
            sets.type = "number"
            sets.placeholder = "Sets"
            sets.className = "sets"
            ficha["treino-b"].appendChild(sets)
            sets.value = localStorage.getItem(sets.id)
        }
    })

    data.Ademir.C.forEach((exercise, count) => {
        const newexercise = document.createElement("p")
        newexercise.textContent = exercise
        ficha["treino-c"].appendChild(newexercise)

        if (exercise != "Null") {
            const peso = document.createElement("input")
            peso.id = `peso-c ${count}`
            peso.type = "number"
            peso.placeholder = "Peso"
            peso.className = "peso"
            ficha["treino-c"].appendChild(peso)
            peso.value = localStorage.getItem(peso.id)

            const reps = document.createElement("input")
            reps.id = `reps-c ${count}`
            reps.type = "number"
            reps.placeholder = "Reps"
            reps.className = "reps"
            ficha["treino-c"].appendChild(reps)
            reps.value = localStorage.getItem(reps.id)

            const sets = document.createElement("input")
            sets.id = `sets-c ${count}`
            sets.type = "number"
            sets.placeholder = "Sets"
            sets.className = "sets"
            ficha["treino-c"].appendChild(sets)
            sets.value = localStorage.getItem(sets.id)
        }
    })

    data.Ademir.D.forEach((exercise, count) => {
        const newexercise = document.createElement("p")
        newexercise.textContent = exercise
        ficha["treino-d"].appendChild(newexercise)

        if (exercise != "Null") {
            const peso = document.createElement("input")
            peso.id = `peso-d ${count}`
            peso.type = "number"
            peso.placeholder = "Peso"
            peso.className = "peso"
            ficha["treino-d"].appendChild(peso)
            peso.value = localStorage.getItem(peso.id)

            const reps = document.createElement("input")
            reps.id = `reps-d ${count}`
            reps.type = "number"
            reps.placeholder = "Reps"
            reps.className = "reps"
            ficha["treino-d"].appendChild(reps)
            reps.value = localStorage.getItem(reps.id)

            const sets = document.createElement("input")
            sets.id = `sets-d ${count}`
            sets.type = "number"
            sets.placeholder = "Sets"
            sets.className = "sets"
            ficha["treino-d"].appendChild(sets)
            sets.value = localStorage.getItem(sets.id)
        }
    })

    data.Ademir.E.forEach((exercise, count) => {
        const newexercise = document.createElement("p")
        newexercise.textContent = exercise
        ficha["treino-e"].appendChild(newexercise)

        if (exercise != "Null") {
            const peso = document.createElement("input")
            peso.id = `peso-e ${count}`
            peso.type = "number"
            peso.placeholder = "Peso"
            peso.className = "peso"
            ficha["treino-e"].appendChild(peso)
            peso.value = localStorage.getItem(peso.id)

            const reps = document.createElement("input")
            reps.id = `reps-e ${count}`
            reps.type = "number"
            reps.placeholder = "Reps"
            reps.className = "reps"
            ficha["treino-e"].appendChild(reps)
            reps.value = localStorage.getItem(reps.id)

            const sets = document.createElement("input")
            sets.id = `sets-e ${count}`
            sets.type = "number"
            sets.placeholder = "Sets"
            sets.className = "sets"
            ficha["treino-e"].appendChild(sets)
            sets.value = localStorage.getItem(sets.id)
        }
    })
})