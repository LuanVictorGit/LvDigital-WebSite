document.addEventListener("DOMContentLoaded", ()=> {

    let containers = document.querySelectorAll(".container");
    for(let container of containers) {
        if (container.classList.contains("containerSelected")) continue;
        container.style.display = "none";
    }

    document.getElementsByClassName("buttonAccount")[0].click();

    document.addEventListener("click", (event) => {
        if (event.target.href === "#"){
            event.preventDefault();
            window.moveTo(0,0);
            document.getElementById("mainPage").click();
        }
    });

});

async function selectPage(page) {
    const container = document.getElementById(page);
    if (!container) return;
    const lastContainer = document.getElementsByClassName("containerSelected")[0];
    lastContainer.classList.remove("containerSelected");
    lastContainer.style.display = "none";
    container.classList.add("containerSelected");
    container.style.display = "flex";
}

async function login() {

}