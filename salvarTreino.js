const save = document.getElementById("save")

save.addEventListener("click", function() {
    Object.keys(fichas).forEach((letra) => {
        const getFichas = fichas[letra]

        const divs = getFichas.querySelectorAll("div")
        
        divs.forEach((div) => {
            const peso = div.querySelectorAll(".peso")
            const reps = div.querySelectorAll(".reps")
            const sets = div.querySelectorAll(".sets")

            peso.forEach((PesoId) => {
                localStorage.setItem(PesoId.id, PesoId.value)
            })

            reps.forEach((RepsId) => {
                localStorage.setItem(RepsId.id, RepsId.value)
            })

            sets.forEach((SetsId) => {
                localStorage.setItem(SetsId.id, SetsId.value)
            })

        })
    })

})