const mainActive = document.getElementById('modal_main');
const modalClose = document.getElementsByClassName('modal__close');

mainActive.className = 'modal modal_active';

modalClose.onclick = function () {
    mainActive.className = 'modal';
}