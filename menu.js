
function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

function hideMenu() {
    const sidebar = document.getElementById("sidebar");
    if (window.innerWidth <= 768) {
        sidebar.classList.remove("active");
    }
}
