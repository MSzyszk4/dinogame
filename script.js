const character = document.getElementById("character");
const block = document.getElementById("block");

function jump() {
    if (!character.classList.contains("animate")) {
        character.classList.add("animate");
        setTimeout(() => { character.classList.remove("animate") }, 500)
    }
}

const checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You lose!");
        block.style.animation = "block 1s infinite linear";
        block.style.display = "block";
    }

}, 10)
