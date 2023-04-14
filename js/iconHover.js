window.grayscaleDown = () => {
    let icon = document.getElementById("company-icon--small");
    icon.style.filter = "grayscale(0%)";
};

window.grayscaleUp = () => {
    let icon = document.getElementById("company-icon--small");
    icon.style.filter = "grayscale(100%)";
};
