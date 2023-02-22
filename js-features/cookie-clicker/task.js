const cookie = document.getElementById("cookie");

cookie.onclick = function countClick() {
    const clicker__counter = document.getElementById("clicker__counter");
    clicker__counter.textContent = clicker__counter.textContent * 1 + 1;
    if ((clicker__counter.textContent % 2) == 0) {
        cookie.width = 200;
    } else {
        cookie.width = 150;
    }   
}