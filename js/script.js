function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const main = document.querySelector(".main");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
    if (menu.classList.contains("open")){
        main.classList.add("hide");
    }else{
        main.classList.remove("hide");
    }
}