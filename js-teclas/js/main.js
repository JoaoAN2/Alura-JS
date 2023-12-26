function playAudio() {
    const audioElements = document.getElementsByClassName("tecla")

    for (const audioElement of audioElements) {
        audioElement.addEventListener("click", () => {      
            const classList = audioElement.classList
            const audioId = `som_${classList[1]}`
            const audio = document.getElementById(audioId)
            audio.play()
        })

        audioElement.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                audioElement.classList.add("ativa")
            }
        })

        audioElement.addEventListener("keyup", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                audioElement.classList.add("ativa")
            }
        })
    }

}

playAudio()
