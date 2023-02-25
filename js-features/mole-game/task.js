const hole = [];
let countDeadHole = 0;
let countBlunder = 0;

for (let index = 1; index < 10; index++){
    hole[index] = document.getElementById(`hole${index}`)
    hole[index].onclick = function () {
        if (hole[index].className.includes('hole hole_has-mole')) {
            hit();
        } else {
            slip();
        }
    } 
}

function hit() {
    const DeadHole = document.getElementById("dead");
    countDeadHole += 1;
    DeadHole.textContent = countDeadHole;
    if (countDeadHole == 10) victory(DeadHole); 
}

function slip() {
    const Blunder = document.getElementById("lost");
    countBlunder += 1;
    Blunder.textContent = countBlunder;
    if (countBlunder == 5) loss(Blunder);
}

function victory(DeadHole) {
    countDeadHole = 0;
    DeadHole.textContent = 0;
    alert('Ура вы победили!!!');
}

function loss(Blunder) {
    countBlunder = 0;
    Blunder.textContent = 0;
    alert('Увы, вы проиграли.');
}