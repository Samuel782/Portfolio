document.getElementById("DarkMode").addEventListener("click", darkpage);
function darkpage(){
    document.body.setAttribute("data-bs-theme", "dark");
    document.getElementById("LightMode").classList.remove("active");
    document.getElementById("DarkMode").classList.add("active");
    
}
document.getElementById("LightMode").addEventListener("click", lightpage);

function lightpage(){
    document.body.setAttribute("data-bs-theme", "light");
    document.getElementById("DarkMode").classList.remove("active");
    document.getElementById("LightMode").classList.add("active");
}