const character = document.getElementById("character");
const block = document.getElementById("block");

function jump() {
    if (!character.classList.contains("animate")) {
        character.classList.add("animate");
        setTimeout(() => { character.classList.remove("animate") }, 500)
    }
}

