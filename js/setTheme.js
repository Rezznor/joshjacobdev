function setTheme() {
    const btn = document.querySelector("#theme-toggle");
    const theme = document.querySelector("#theme");
    const currentTheme = localStorage.getItem("theme");

    if(currentTheme == "dark") {
        theme.href = "css/dark-theme.css";
    }
    
    btn.addEventListener("click", function() {
    // Swap out the URL for the different stylesheets
    if (theme.getAttribute("href") == "css/light-theme.css") {
        theme.href = "css/dark-theme.css";
        localStorage.setItem("theme", "dark");
        btn.classList.remove("fa-moon");
        btn.classList.add("fa-sun")

    } else {
        theme.href = "css/light-theme.css";
        localStorage.setItem("theme", "light");
        btn.classList.remove("fa-sun");
        btn.classList.add("fa-moon")
    }
    });

}