let hole = [];
let countDeadHole = 0;
let countBlunder = 0;

for (let index = 1; index < 10; index++){
    hole[index] = document.getElementById(`hole${index}`)
    hole[index].onclick = function () {
        if (hole[index].className == "hole hole_has-mole") {
            hit();
        } else {
            slip();
        }
    } 
}

function hit() {
    countDeadHole += 1;
    if (countDeadHole == 10) victory(); 
}

function slip() {
    countBlunder += 1;
    if (countBlunder == 5) loss();
}

function victory() {
    countDeadHole = 0;
    alert('Ура вы победили!!!');
}

function loss() {
    countBlunder = 0;
    alert('Увы, вы проиграли.');
}