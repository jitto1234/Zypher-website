function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

function showPopup(courseName, link) {
    document.getElementById("popup-title").innerText = courseName;
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup").style.transform = "translate(-50%, -50%) scale(1)";
    document.getElementById("join-btn").onclick = function() {
        window.open(link, "_blank");
    };
}

function closePopup() {
    document.getElementById("popup").style.transform = "translate(-50%, -50%) scale(0.8)";
    setTimeout(() => {
        document.getElementById("popup").style.display = "none";
    }, 200);
}