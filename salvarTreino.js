const save = document.getElementById("save")

save.addEventListener("click", function() {
    Object.keys(fichas).forEach((letra) => {
        const divs = fichas[letra].querySelector("div")
        const peso = divs.querySelector(".peso")
        const reps = divs.querySelector(".reps")
        const sets = divs.querySelector(".sets")

        localStorage.setItem(peso.id, peso.value)
        localStorage.setItem(reps.id, reps.value)
        localStorage.setItem(sets.id, sets.value)
    })

})