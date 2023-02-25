const countdown = function(){
    const timer = document.getElementById("timer");
    timer.textContent -= 1;
    if (timer.textContent == 0) {
        clearInterval(idInterval);
        alert("Вы победили в конкурсе!");
    }
}

const idInterval = setInterval(countdown, 1000);