const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItem = document.querySelectorAll(".dropdown__item");


dropdownValue.onclick = function () {
    dropdownList.className = "dropdown__list dropdown__list_active"
}

dropdownItem.forEach(element => {
    element.onclick = function () {
        dropdownValue.textContent = this.textContent;
        dropdownList.className = "dropdown__list"
        return false
    }
    
});
