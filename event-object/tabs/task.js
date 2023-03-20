const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = document.querySelectorAll(".tab__content")

tabs.forEach(function(element) {
    element.onclick = function (e) {
            const indexTabs = tabs.indexOf(e.target)
            for(let index = 0; index < 3; index++) {
                if(index == indexTabs){
                    tabs[indexTabs].classList.add('tab_active');
                    contents[indexTabs].classList.add('tab__content_active');
                } else {
                    tabs[index].classList.remove('tab_active');
                    contents[index].classList.remove('tab__content_active');
                }
            }
            
    }
});

