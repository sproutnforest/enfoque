//darkmode lightmode
let isDarkMode = false;
document.getElementById("check").addEventListener("change", function () {
  if (this.checked) {
    isDarkMode = true;
    document.querySelector(".uphead").style.backgroundColor = "#2D2D2D";
  } else {
    isDarkMode = false;
    document.querySelector(".uphead").style.backgroundColor = "#DADAD9";
  }
  savemode(isDarkMode);
});

function savemode(isDarkMode) {
  localStorage.setItem("mode", isDarkMode ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", () => {
  const savedmode = localStorage.getItem("mode");
  if (savedmode === "dark") {
    document.getElementById('check').checked = true;
    document.querySelector(".uphead").style.backgroundColor = "#2D2D2D";
  } else {
    document.querySelector(".uphead").style.backgroundColor = "#DADAD9";
  }
});
