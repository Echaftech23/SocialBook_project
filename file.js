var hideMenu = document.querySelector(".setting-menu");
var switchMode =document.getElementById("darkBtn");

var settingMenuToggle = e =>{
    hideMenu.classList.toggle("display-menu");
}
var switchTodarkMode = e =>{
    switchMode.classList.toggle("dark-mode-on");
    document.body.classList.toggle("dark-theme");


    if(localStorage.getItem("theme" == "light")){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}
if(localStorage.getItem("theme" == "light")){
    switchMode.classList.remove("dark-mode-on");
    document.body.classList.remove("dark-theme");
}
else{
    switchMode.classList.add("dark-mode-on");
    document.body.classList.add("dark-theme");
}

