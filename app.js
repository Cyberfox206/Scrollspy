let section = document.querySelectorAll(".sec");
let btn_tab = document.getElementsByClassName("btn_home");
const header = document.querySelector('header');
const threshold = 0.7;

const btns = function (elem, btn_tab) {
    for (let i = 0; i < btn_tab.length; i++) {
        if (btn_tab[i].classList.contains("active")) {
            btn_tab[i].classList.remove("active");
        }
    }
    document.querySelector(`a[href="#${elem}"]`).classList.add("active");
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.intersectionRatio > threshold) {
            btns(entry.target.getAttribute("id"), btn_tab);
        }   
    })
},{
    threshold:threshold,
    rootMargin:`-${header.clientHeight}px 0px`
});

section.forEach(e => {
    observer.observe(e);
});