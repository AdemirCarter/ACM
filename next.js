const right = document.getElementById("right")
const left = document.getElementById("left")

let next = 0

right.addEventListener("click", function() {
    if (next < 4) {
        next += 1
    }

    for (i in ficha) {
        ficha[i].style.display = "none"
    }

    switch(next) {
        case 0:
            ficha["treino-a"].style.display = "block"
            break

        case 1:
            ficha["treino-b"].style.display = "block"
            break
        
        case 2:
            ficha["treino-c"].style.display = "block"
            break

        case 3:
            ficha["treino-d"].style.display = "block"
            break

        case 4:
            ficha["treino-e"].style.display = "block"
            break
            
    }
})

left.addEventListener("click", function() {
    if (next > 0) {
        next -= 1
    }

    for (i in ficha) {
        ficha[i].style.display = "none"
    }

    switch(next) {
        case 0:
            ficha["treino-a"].style.display = "block"
            break

        case 1:
            ficha["treino-b"].style.display = "block"
            break
        
        case 2:
            ficha["treino-c"].style.display = "block"
            break

        case 3:
            ficha["treino-d"].style.display = "block"
            break

        case 4:
            ficha["treino-e"].style.display = "block"
            break
            
    }
})