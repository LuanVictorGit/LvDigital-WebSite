document.addEventListener("DOMContentLoaded", ()=> {

    let containers = document.querySelectorAll(".container");
    for(let container of containers) {
        if (container.classList.contains("containerSelected")) continue;
        container.style.display = "none";
    }

    document.addEventListener("click", (event) => {
        if (event.target.href === "#"){
            event.preventDefault();
            window.scrollTo(0,0);
            document.getElementById("mainPage").click();
            return;
        }
    });

    selectPage("pageControll"); // selecionando a página para testar antes de produção.
    setTimeout(() => {
        window.scrollTo(0,0);
    }, 800);

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

// function to confirm login
async function login(event) {

}

// function to confirm register
async function register(event) {

}