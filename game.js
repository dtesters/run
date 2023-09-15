document.addEventListener("DOMContentLoaded", () => {
    const dino = document.querySelector(".dino");

    document.addEventListener("keydown", jump);

    function jump(event) {
        if (event.keyCode === 32) { // Spacebar
            if (!dino.classList.contains("jump")) {
                dino.classList.add("jump");

                setTimeout(() => {
                    dino.classList.remove("jump");
                }, 500);
            }
        }
    }

    let isGameOver = false;

    const gameInterval = setInterval(() => {
        if (!isGameOver) {
            const dinoBottom = parseInt(
                window.getComputedStyle(dino).getPropertyValue("bottom")
            );

            if (dinoBottom > 0) {
                dino.style.bottom = (dinoBottom - 20) + "px";
            }
        }
    }, 20);

    function gameOver() {
        clearInterval(gameInterval);
        isGameOver = true;
        alert("Game Over!");
    }
});
