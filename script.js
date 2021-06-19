console.log("Working!!!");


let theme = localStorage.getItem("theme");

if(theme == null) {
    setTheme("light");
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (let i =0 ; themeDots.length > i; i ++) {

    themeDots[i].addEventListener("click", () => {
        setTheme(themeDots[i].id);
    })
}


function setTheme(mode) {

    if(mode == "light-mode") {
        document.getElementById("theme-style").href = "";
    } else if(mode == "purple-mode") {
        document.getElementById("theme-style").href = "purple.css";
    } else if(mode == "blue-mode") {
        document.getElementById("theme-style").href = "blue.css";
    } else if(mode == "green-mode") {
        document.getElementById("theme-style").href = "green.css";
    }

    localStorage.setItem("theme",mode);
}