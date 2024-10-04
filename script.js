//darkmode lightmode
let isDarkMode = false;
document.getElementById("check").addEventListener("change", function () {
  if (this.checked) {
    isDarkMode = true;
    document.querySelector("nav").style.backgroundColor = "#2D2D2D";
    document.querySelector(".uphead").style.backgroundColor = "#2D2D2D";
    document.querySelector("#clock").style.color = "#7F7F7F";
    document.querySelector("#palette").style.color = "#7F7F7F";
    document.querySelector("#tdl").style.color = "#7F7F7F";
    document.querySelector("#music").style.color = "#7F7F7F";
    document.querySelector("#rightnavabout").style.color = "#fff";
    document.querySelector("#rightnavcontact").style.color = "#fff";
    // document.querySelector(".enlogo").style.color = "#7F7F7F";
    document.querySelector(".brenda").style.backgroundColor = "#2D2D2D";
    document.querySelector(".eryca").style.backgroundColor = "#2D2D2D";
    document.querySelector(".gea").style.backgroundColor = "#2D2D2D";
    document.querySelector(".brenda").style.color = "#7F7F7F";
    document.querySelector(".eryca").style.color = "#7F7F7F";
    document.querySelector(".gea").style.color = "#7F7F7F";
    document.querySelector(".cntctbrenda").style.backgroundColor = "#2D2D2D";
    document.querySelector(".cntcteryca").style.backgroundColor = "#2D2D2D";
    document.querySelector(".cntctgea").style.backgroundColor = "#2D2D2D";
    document.querySelector(".cntctbrenda").style.color = "#7F7F7F";
    document.querySelector(".cntcteryca").style.color = "#7F7F7F";
    document.querySelector(".cntctgea").style.color = "#7F7F7F";
    document.querySelector(".background-chooser").style.backgroundColor =
      "#2D2D2D";
    document.querySelector(".ambiance-section").style.backgroundColor =
      "#2D2D2D";
    document.querySelector("#fireicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#rainicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#writeicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#keyicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#typeicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#firebutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#rainbutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#writebutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#keybutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#typebutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".fireslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".rainslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".keyslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".typeslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".writeslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#firevolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#rainvolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#keyvolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#typevolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#writevolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#igb").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#mailb").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#wab").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
      document.querySelector("#ige").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#maile").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#wae").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
      document.querySelector("#igg").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#mailg").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#wag").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".todo").style.backgroundColor = "#2D2D2D";
    document.querySelector(".row").style.backgroundColor = "#575757";
    document.querySelector("#todobutton").style.backgroundColor = "#575757";
  } else {
    isDarkMode = false;
    document.querySelector("nav").style.backgroundColor = "#fff";
    document.querySelector(".uphead").style.backgroundColor = "#fff";
    document.querySelector("#clock").style.color = "black";
    document.querySelector("#palette").style.color = "black";
    document.querySelector("#tdl").style.color = "black";
    document.querySelector("#music").style.color = "black";
    document.querySelector("#rightnavabout").style.color = "black";
    document.querySelector("#rightnavcontact").style.color = "black";
    // document.querySelector(".enlogo").style.color = "black";
    document.querySelector(".brenda").style.backgroundColor = "#fff";
    document.querySelector(".eryca").style.backgroundColor = "#fff";
    document.querySelector(".gea").style.backgroundColor = "#fff";
    document.querySelector(".brenda").style.color = "black";
    document.querySelector(".eryca").style.color = "black";
    document.querySelector(".gea").style.color = "black";
    document.querySelector(".cntctbrenda").style.backgroundColor = "#fff";
    document.querySelector(".cntcteryca").style.backgroundColor = "#fff";
    document.querySelector(".cntctgea").style.backgroundColor = "#fff";
    document.querySelector(".cntctbrenda").style.color = "black";
    document.querySelector(".cntcteryca").style.color = "black";
    document.querySelector(".cntctgea").style.color = "black";
    document.querySelector(".background-chooser").style.backgroundColor =
      "#fff";
    document.querySelector(".ambiance-section").style.backgroundColor = "#fff";
    document.querySelector("#fireicon").style.filter = "none";
    document.querySelector("#keyicon").style.filter = "none";
    document.querySelector("#writeicon").style.filter = "none";
    document.querySelector("#typeicon").style.filter = "none";
    document.querySelector("#rainicon").style.filter = "none";
    document.querySelector("#firebutton").style.filter = "none";
    document.querySelector("#keybutton").style.filter = "none";
    document.querySelector("#writebutton").style.filter = "none";
    document.querySelector("#typebutton").style.filter = "none";
    document.querySelector("#rainbutton").style.filter = "none";
    document.querySelector(".fireslider").style.filter = "none";
    document.querySelector(".rainslider").style.filter = "none";
    document.querySelector(".keyslider").style.filter = "none";
    document.querySelector(".typeslider").style.filter = "none";
    document.querySelector(".writeslider").style.filter = "none";
    document.querySelector("#firevolicon").style.filter = "none";
    document.querySelector("#rainvolicon").style.filter = "none";
    document.querySelector("#keyvolicon").style.filter = "none";
    document.querySelector("#typevolicon").style.filter = "none";
    document.querySelector("#writevolicon").style.filter = "none";
    document.querySelector("#igb").style.filter = "none";
    document.querySelector("#mailb").style.filter = "none";
    document.querySelector("#wab").style.filter = "none";
    document.querySelector("#ige").style.filter = "none";
    document.querySelector("#maile").style.filter = "none";
    document.querySelector("#wae").style.filter = "none";
    document.querySelector("#igg").style.filter = "none";
    document.querySelector("#mailg").style.filter = "none";
    document.querySelector("#wag").style.filter = "none";
    document.querySelector(".todo").style.backgroundColor = "#fff";
    document.querySelector(".row").style.backgroundColor = "#dadad9";
    document.querySelector("#todobutton").style.backgroundColor = "#dadad9";
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
    document.querySelector("nav").style.backgroundColor = "#2D2D2D";
    document.querySelector(".uphead").style.backgroundColor = "#2D2D2D";
    document.querySelector("#clock").style.color = "#7F7F7F";
    document.querySelector("#palette").style.color = "#7F7F7F";
    document.querySelector("#tdl").style.color = "#7F7F7F";
    document.querySelector("#music").style.color = "#7F7F7F";
    document.querySelector("#rightnavabout").style.color = "#fff";
    document.querySelector("#rightnavcontact").style.color = "#fff";
    // document.querySelector(".enlogo").style.color = "#7F7F7F";
    document.querySelector(".brenda").style.backgroundColor = "#2D2D2D";
    document.querySelector(".eryca").style.backgroundColor = "#2D2D2D";
    document.querySelector(".gea").style.backgroundColor = "#2D2D2D";
    document.querySelector(".brenda").style.color = "#7F7F7F";
    document.querySelector(".eryca").style.color = "#7F7F7F";
    document.querySelector(".gea").style.color = "#7F7F7F";
    document.querySelector(".cntctbrenda").style.backgroundColor = "#2D2D2D";
    document.querySelector(".cntcteryca").style.backgroundColor = "#2D2D2D";
    document.querySelector(".cntctgea").style.backgroundColor = "#2D2D2D";
    document.querySelector(".cntctbrenda").style.color = "#7F7F7F";
    document.querySelector(".cntcteryca").style.color = "#7F7F7F";
    document.querySelector(".cntctgea").style.color = "#7F7F7F";
    document.querySelector(".background-chooser").style.backgroundColor =
      "#2D2D2D";
    document.querySelector(".ambiance-section").style.backgroundColor =
      "#2D2D2D";
    document.querySelector("#fireicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#rainicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#writeicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#keyicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#typeicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#firebutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#rainbutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#writebutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#keybutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#typebutton").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".fireslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".rainslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".keyslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".typeslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".writeslider").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
      document.querySelector("#firevolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#rainvolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#keyvolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#typevolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#writevolicon").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#igb").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#mailb").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#wab").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
      document.querySelector("#ige").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#maile").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#wae").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
      document.querySelector("#igg").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#mailg").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector("#wag").style.filter =
      "brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)";
    document.querySelector(".todo").style.backgroundColor = "#2D2D2D";
    document.querySelector(".row").style.backgroundColor = "#575757";
    document.querySelector("#todobutton").style.backgroundColor = "#575757";
  } else {
    document.querySelector("nav").style.backgroundColor = "#fff";
    document.querySelector(".uphead").style.backgroundColor = "#fff";
    document.querySelector("#clock").style.color = "black";
    document.querySelector("#palette").style.color = "black";
    document.querySelector("#tdl").style.color = "black";
    document.querySelector("#music").style.color = "black";
    document.querySelector("#rightnavabout").style.color = "black";
    document.querySelector("#rightnavcontact").style.color = "black";
    // document.querySelector(".enlogo").style.color = "black";
    document.querySelector(".brenda").style.backgroundColor = "#fff";
    document.querySelector(".eryca").style.backgroundColor = "#fff";
    document.querySelector(".gea").style.backgroundColor = "#fff";
    document.querySelector(".brenda").style.color = "black";
    document.querySelector(".eryca").style.color = "black";
    document.querySelector(".gea").style.color = "black";
    document.querySelector(".cntctbrenda").style.backgroundColor = "#fff";
    document.querySelector(".cntcteryca").style.backgroundColor = "#fff";
    document.querySelector(".cntctgea").style.backgroundColor = "#fff";
    document.querySelector(".cntctbrenda").style.color = "black";
    document.querySelector(".cntcteryca").style.color = "black";
    document.querySelector(".cntctgea").style.color = "black";
    document.querySelector(".background-chooser").style.backgroundColor =
      "#fff";
    document.querySelector(".ambiance-section").style.backgroundColor = "#fff";
    document.querySelector("#fireicon").style.filter = "none";
    document.querySelector("#keyicon").style.filter = "none";
    document.querySelector("#writeicon").style.filter = "none";
    document.querySelector("#typeicon").style.filter = "none";
    document.querySelector("#rainicon").style.filter = "none";
    document.querySelector("#firebutton").style.filter = "none";
    document.querySelector("#keybutton").style.filter = "none";
    document.querySelector("#writebutton").style.filter = "none";
    document.querySelector("#typebutton").style.filter = "none";
    document.querySelector("#rainbutton").style.filter = "none";
    document.querySelector(".fireslider").style.filter = "none";
    document.querySelector(".rainslider").style.filter = "none";
    document.querySelector(".keyslider").style.filter = "none";
    document.querySelector(".typeslider").style.filter = "none";
    document.querySelector(".writeslider").style.filter = "none";
    document.querySelector("#firevolicon").style.filter = "none";
    document.querySelector("#rainvolicon").style.filter = "none";
    document.querySelector("#keyvolicon").style.filter = "none";
    document.querySelector("#typevolicon").style.filter = "none";
    document.querySelector("#writevolicon").style.filter = "none";
    document.querySelector("#igb").style.filter = "none";
    document.querySelector("#mailb").style.filter = "none";
    document.querySelector("#wab").style.filter = "none";
    document.querySelector("#ige").style.filter = "none";
    document.querySelector("#maile").style.filter = "none";
    document.querySelector("#wae").style.filter = "none";
    document.querySelector("#igg").style.filter = "none";
    document.querySelector("#mailg").style.filter = "none";
    document.querySelector("#wag").style.filter = "none";
    document.querySelector(".todo").style.backgroundColor = "#fff";
    document.querySelector(".row").style.backgroundColor = "#dadad9";
    document.querySelector("#todobutton").style.backgroundColor = "#dadad9";
  }
});

/* <!-- - #TO DO LIST--> */

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

/* <!-- - #TO DO LIST Progress--> */
const progressBar = document.getElementById("progress");
const statsNumber = document.getElementById("numbers");

function addTask() {
    if (inputBox.value === "") {} else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
  
      listContainer.appendChild(li);
  
      updateTaskCount();
      saveData();
    }
    inputBox.value = "";
  }
  
  listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      updateTaskCount();
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      updateTaskCount();
      saveData();
    }
  }, false);
  /* <!-- - #TO DO LIST Progress--> */
  showTasks();
  function shootConfetti() {
    confetti({
      particleCount: 100, 
      spread: 80,
      origin: { y: 0.6 }, 
    });
  }
  
  
  function updateTaskCount() {
    const totalTasks = listContainer.getElementsByTagName("li").length;
    const completedTasks = listContainer.getElementsByClassName("checked").length;
    
    statsNumber.innerHTML = `${completedTasks} / ${totalTasks}`;
    
    const progressPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  
    if (completedTasks === totalTasks && totalTasks > 0) {
      alert("Hore! Semua tugas telah selesai!");
      shootConfetti(); 
    }
  }
  
  
  function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
  }
  
  function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
    updateTaskCount();
  }
  
  
//------------------------------------//

function toggleDisplay(showSectionId, hideSectionIds) {
  const showSection = document.querySelector(`.${showSectionId}`);
  showSection.style.display =
    showSection.style.display === "none" || showSection.style.display === ""
      ? "block"
      : "none";
  hideSectionIds.forEach((id) => {
    const section = document.querySelector(`.${id}`);
    if (section.style.display === "block") {
      section.style.display = "none";
    }
  });
  const contact = document.querySelector(".contact");
    if (contact.style.display === "flex") {
      contact.style.display = "none";
    }
  const about = document.querySelector(".about");
  if (about.style.display === "flex") {
    about.style.display = "none";
  }
}

function navDisplay(showSectionid, hideSectionid) {
  const showSection = document.querySelector(`.${showSectionid}`);
  showSection.style.display =
    showSection.style.display === "none" || showSection.style.display === ""
      ? "flex"
      : "none";
  const hideSection = document.querySelector(`.${hideSectionid}`);
  if (hideSection.style.display === "flex") {
    hideSection.style.display = "none";
  }
  const ambiance = document.querySelector('.ambiance-section');
  if(ambiance.style.display === 'block'){
    ambiance.style.display = 'none';
  }
  const bgChooser = document.querySelector('.background-chooser');
  if(bgChooser.style.display === 'block'){
    bgChooser.style.display = 'none';
  }
  const todo = document.querySelector('.container-1');
  if(todo.style.display === 'block'){
    todo.style.display = 'none';
  }
}

// To-Do Button Event
document
  .getElementById("todo-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleDisplay("container-1", ["ambiance-section", "background-chooser"]);
  });

// Music Button Event
document
  .getElementById("music-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleDisplay("ambiance-section", ["container-1", "background-chooser"]);
  });

//fire
var firePlaying = false;
document.getElementById("firebutton").addEventListener("click", function () {
  if (!firePlaying) {
    var audio = document.getElementById("fireaudio");
    audio.volume = fslider.value / 100;
    audio.play();
    audio.loop = true;
    firePlaying = true;
    document.getElementById("fireplay").src = "../imageIcon/pause-solid.svg";
  } else {
    var audio = document.getElementById("fireaudio");
    audio.pause();
    firePlaying = false;
    document.getElementById("fireplay").src = "../imageIcon/play-solid.svg";
  }
});
var fslider = document.getElementById("fireslider");
fslider.oninput = function () {
  var audio = document.getElementById("fireaudio");
  audio.volume = this.value / 100;
  if(audio.volume <= 0.5){
    document.getElementById("firevolicon").src = "../imageIcon/volume-low-solid.svg";
    document.getElementById("firevolicon").style.width = "21px";
  }
  if(audio.volume <= 0.05){
    document.getElementById("firevolicon").src = "../imageIcon/volume-off-solid.svg";
    document.getElementById("firevolicon").style.width = "16px";
  }
  if(audio.volume > 0.5){
    document.getElementById("firevolicon").src = "../imageIcon/volume-high-solid.svg";
    document.getElementById("firevolicon").style.width = "30px";
  }
};
//keyboard
var keyPlaying = false;
document.getElementById("keybutton").addEventListener("click", function () {
  if (!keyPlaying) {
    var audio = document.getElementById("keyaudio");
    audio.volume = kslider.value / 100;
    audio.play();
    audio.loop = true;
    keyPlaying = true;
    document.getElementById("keyplay").src = "../imageIcon/pause-solid.svg";
  } else {
    var audio = document.getElementById("keyaudio");
    audio.pause();
    keyPlaying = false;
    document.getElementById("keyplay").src = "../imageIcon/play-solid.svg";
  }
});
var kslider = document.getElementById("keyslider");
kslider.oninput = function () {
  var audio = document.getElementById("keyaudio");
  audio.volume = this.value / 100;
  if(audio.volume <= 0.5){
    document.getElementById("keyvolicon").src = "../imageIcon/volume-low-solid.svg";
    document.getElementById("keyvolicon").style.width = "21px";
  }
  if(audio.volume <= 0.05){
    document.getElementById("keyvolicon").src = "../imageIcon/volume-off-solid.svg";
    document.getElementById("keyvolicon").style.width = "16px";
  }
  if(audio.volume > 0.5){
    document.getElementById("keyvolicon").src = "../imageIcon/volume-high-solid.svg";
    document.getElementById("keyvolicon").style.width = "30px";
  }
};
//rain
var rainPlaying = false;
document.getElementById("rainbutton").addEventListener("click", function () {
  if (!rainPlaying) {
    var audio = document.getElementById("rainaudio");
    audio.volume = rslider.value / 100;
    audio.play();
    audio.loop = true;
    rainPlaying = true;
    document.getElementById("rainplay").src = "imageIcon/pause-solid.svg";
  } else {
    var audio = document.getElementById("rainaudio");
    audio.pause();
    rainPlaying = false;
    document.getElementById("rainplay").src = "imageIcon/play-solid.svg";
  }
});
var rslider = document.getElementById("rainslider");
rslider.oninput = function () {
  var audio = document.getElementById("rainaudio");
  audio.volume = this.value / 100;
  if(audio.volume <= 0.5){
    document.getElementById("rainvolicon").src = "../imageIcon/volume-low-solid.svg";
    document.getElementById("rainvolicon").style.width = "21px";
  }
  if(audio.volume <= 0.05){
    document.getElementById("rainvolicon").src = "../imageIcon/volume-off-solid.svg";
    document.getElementById("rainvolicon").style.width = "16px";
  }
  if(audio.volume > 0.5){
    document.getElementById("rainvolicon").src = "../imageIcon/volume-high-solid.svg";
    document.getElementById("rainvolicon").style.width = "30px";
  }
};
//typewriter
var typePlaying = false;
document.getElementById("typebutton").addEventListener("click", function () {
  if (!typePlaying) {
    var audio = document.getElementById("typeaudio");
    audio.volume = tslider.value / 100;
    audio.play();
    audio.loop = true;
    typePlaying = true;
    document.getElementById("typeplay").src = "imageIcon/pause-solid.svg";
  } else {
    var audio = document.getElementById("typeaudio");
    audio.pause();
    typePlaying = false;
    document.getElementById("typeplay").src = "imageIcon/play-solid.svg";
  }
});
var tslider = document.getElementById("typeslider");
tslider.oninput = function () {
  var audio = document.getElementById("typeaudio");
  audio.volume = this.value / 100;
  if(audio.volume <= 0.5){
    document.getElementById("typevolicon").src = "../imageIcon/volume-low-solid.svg";
    document.getElementById("typevolicon").style.width = "21px";
  }
  if(audio.volume <= 0.05){
    document.getElementById("typevolicon").src = "../imageIcon/volume-off-solid.svg";
    document.getElementById("typevolicon").style.width = "16px";
  }
  if(audio.volume > 0.5){
    document.getElementById("typevolicon").src = "../imageIcon/volume-high-solid.svg";
    document.getElementById("typevolicon").style.width = "30px";
  }
};
//writing
var writePlaying = false;
document.getElementById("writebutton").addEventListener("click", function () {
  if (!writePlaying) {
    var audio = document.getElementById("writeaudio");
    audio.volume = wslider.value / 100;
    audio.play();
    audio.loop = true;
    writePlaying = true;
    document.getElementById("writeplay").src = "imageIcon/pause-solid.svg";
  } else {
    var audio = document.getElementById("writeaudio");
    audio.pause();
    writePlaying = false;
    document.getElementById("writeplay").src = "imageIcon/play-solid.svg";
  }
});
var wslider = document.getElementById("writeslider");
wslider.oninput = function () {
  var audio = document.getElementById("writeaudio");
  audio.volume = this.value / 100;
  if(audio.volume <= 0.5){
    document.getElementById("writevolicon").src = "../imageIcon/volume-low-solid.svg";
    document.getElementById("writevolicon").style.width = "21px";
  }
  if(audio.volume <= 0.05){
    document.getElementById("writevolicon").src = "../imageIcon/volume-off-solid.svg";
    document.getElementById("writevolicon").style.width = "16px";
  }
  if(audio.volume > 0.5){
    document.getElementById("writevolicon").src = "../imageIcon/volume-high-solid.svg";
    document.getElementById("writevolicon").style.width = "30px";
  }
};

/* Background choser*/
const bgChooser = document.querySelector(".background-chooser");
const setBackground = (imageUrl) => {
  document.body.style.backgroundImage = `url(${imageUrl})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
};

// Set background default saat halaman dimuat
setBackground("../background/room.jpg");

// Menambahkan event listener untuk pilihan background
document.querySelectorAll(".choice").forEach((choice) => {
  choice.addEventListener("click", (event) => {
    const bgUrl = event.target.src; 
    setBackground(bgUrl); 
    bgChooser.classList.remove("active"); 
  });
});

document
  .querySelector(".navbar-toggle")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah perilaku default link
    toggleDisplay("background-chooser", ["container-1", "ambiance-section"]);
  });


// menampilkan salah satu background
// document.addEventListener("DOMContentLoaded", () => {
//   const bgChooser = document.querySelector(".background-chooser");

//   const setBackground = (imageUrl) => {
//     document.body.style.backgroundImage = `url(${imageUrl})`;
//     document.body.style.backgroundSize = "cover";
//     document.body.style.backgroundPosition = "center";
//   };
//   setBackground("../background/room.jpg");
//   document.querySelectorAll(".choice").forEach((choice) => {
//     choice.addEventListener("click", (event) => {
//       const imageUrl = event.target.src;
//       setBackground(imageUrl);
//       bgChooser.classList.remove("active");
//     });
//   });
// });

document
  .getElementById("rightnavabout")
  .addEventListener("click", function (event) {
    event.preventDefault();
    navDisplay("about", "contact");
  });

  document
  .getElementById("rightnavcontact")
  .addEventListener("click", function (event) {
    event.preventDefault();
    navDisplay("contact", "about");
  });