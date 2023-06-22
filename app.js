let section = document.getElementsByClassName("sec");
let btn = document.getElementsByClassName("btn_home");

window.addEventListener("scroll",()=>{
    for (let i = 0; i < section.length; i++) {
        let top = window.scrollY;
        let offset = section[i].offsetTop -100;
        let height = section[i].offsetHeight;
        let id = section[i].getAttribute("id")
        if (top >= offset && top < offset + height ) {
            for (let j = 0; j < btn.length; j++) {
                if (btn[j].getAttribute("href") === `#${id}`) {
                    btn[j].classList.add("active")
                }else{
                    btn[j].classList.remove("active");
                }
            }
        }
    }
})