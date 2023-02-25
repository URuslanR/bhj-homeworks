const cookie = document.getElementById("cookie");

cookie.onclick = function countClick() {
    
    const clicker__counter = document.getElementById("clicker__counter");

    cookie.width = ++clicker__counter.textContent % 2 ? 150 : 200;

}