//darkmode lightmode
document.getElementById('check').addEventListener('change', function() {
    if(this.checked){
        document.querySelector('nav').style.backgroundColor = '#2D2D2D';
        document.querySelector('.uphead').style.backgroundColor = '#2D2D2D';
        document.querySelector('#clock').style.color = '#7F7F7F';
        document.querySelector('#palette').style.color = '#7F7F7F';
        document.querySelector('#tdl').style.color = '#7F7F7F';
        document.querySelector('#music').style.color = '#7F7F7F';
        document.querySelector('#rightnavabout').style.color = '#7F7F7F';
        document.querySelector('#rightnavcontact').style.color = '#7F7F7F';
        document.querySelector('.enlogo').style.color = '#7F7F7F';
        document.querySelector('.brenda').style.backgroundColor = '#2D2D2D';
        document.querySelector('.eryca').style.backgroundColor = '#2D2D2D';
        document.querySelector('.gea').style.backgroundColor = '#2D2D2D';
        document.querySelector('.brenda').style.color = '#7F7F7F';
        document.querySelector('.eryca').style.color = '#7F7F7F';
        document.querySelector('.gea').style.color = '#7F7F7F';
        document.querySelector('.background-chooser').style.backgroundColor = '#2D2D2D';
        document.querySelector('#ambiance-section').style.backgroundColor = '#2D2D2D';
        document.querySelector('#fireicon').style.filter = 'brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)';
        document.querySelector('#rainicon').style.filter = 'brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)';
        document.querySelector('#writeicon').style.filter = 'brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)';
        document.querySelector('#keyicon').style.filter = 'brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)';
        document.querySelector('#typeicon').style.filter = 'brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)';
        document.querySelector('#firebutton').style.filter = 'brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)';
        document.querySelector('#rainbutton').style.filter = 'brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)';
        document.querySelector('#writebutton').style.filter = 'brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)';
        document.querySelector('#keybutton').style.filter = 'brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)';
        document.querySelector('#typebutton').style.filter = 'brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)';
        document.querySelector('.fireslider').style.filter = 'brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)';
        document.querySelector('.rainslider').style.filter = 'brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)';
        document.querySelector('.keyslider').style.filter = 'brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)';
        document.querySelector('.typeslider').style.filter = 'brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)';
        document.querySelector('.writeslider').style.filter = 'brightness(0) saturate(100%) invert(81%) sepia(0%) saturate(0%) hue-rotate(150deg) brightness(92%) contrast(100%)';
        document.querySelector('.todo').style.backgroundColor = '#2D2D2D';
        document.querySelector('.row').style.backgroundColor = '#575757';
        document.querySelector('#todobutton').style.backgroundColor = '#575757';
    }
    else{
        document.querySelector('nav').style.backgroundColor = '#fff';
        document.querySelector('.uphead').style.backgroundColor = '#fff';
        document.querySelector('#clock').style.color = 'black';
        document.querySelector('#palette').style.color = 'black';
        document.querySelector('#tdl').style.color = 'black';
        document.querySelector('#music').style.color = 'black';
        document.querySelector('#rightnavabout').style.color = 'black';
        document.querySelector('#rightnavcontact').style.color = 'black';
        document.querySelector('.enlogo').style.color = 'black';
        document.querySelector('.brenda').style.backgroundColor = '#fff';
        document.querySelector('.eryca').style.backgroundColor = '#fff';
        document.querySelector('.gea').style.backgroundColor = '#fff';
        document.querySelector('.brenda').style.color = 'black';
        document.querySelector('.eryca').style.color = 'black';
        document.querySelector('.gea').style.color = 'black';
        document.querySelector('.background-chooser').style.backgroundColor = '#fff';
        document.querySelector('#ambiance-section').style.backgroundColor = '#fff';
        document.querySelector('#fireicon').style.filter = 'none';
        document.querySelector('#keyicon').style.filter = 'none';
        document.querySelector('#writeicon').style.filter = 'none';
        document.querySelector('#typeicon').style.filter = 'none';
        document.querySelector('#rainicon').style.filter = 'none';
        document.querySelector('#firebutton').style.filter = 'none';
        document.querySelector('#keybutton').style.filter = 'none';
        document.querySelector('#writebutton').style.filter = 'none';
        document.querySelector('#typebutton').style.filter = 'none';
        document.querySelector('#rainbutton').style.filter = 'none';
        document.querySelector('.fireslider').style.filter = 'none';
        document.querySelector('.rainslider').style.filter = 'none';
        document.querySelector('.keyslider').style.filter = 'none';
        document.querySelector('.typeslider').style.filter = 'none';
        document.querySelector('.writeslider').style.filter = 'none';
        document.querySelector('.todo').style.backgroundColor = '#fff';
        document.querySelector('.row').style.backgroundColor = '#dadad9';
        document.querySelector('#todobutton').style.backgroundColor = '#dadad9';
    }
});

/* <!-- 
- #TO DO LIST
--> */

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const backgroundChooser = document.getElementById("background-chooser");
const choiceButton = document.getElementById("choice");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();

function toggleDisplay(showSectionId, hideSectionIds) {
    const showSection = document.querySelector(`#${showSectionId}`);
    showSection.style.display = showSection.style.display === 'none' || showSection.style.display === '' ? 'block' : 'none';
  
    hideSectionIds.forEach(id => {
      const section = document.querySelector(`#${id}`);
      if (section.style.display === 'block') {
        section.style.display = 'none';
      }
    });
  
    const bgChooser = document.querySelector('.background-chooser');
    if (bgChooser.style.display === 'block') {
      bgChooser.style.display = 'none';
    }
  }
  
  // To-Do Button Event
  document.getElementById('todo-button').addEventListener('click', function(event) {
    event.preventDefault();
    toggleDisplay('todo-section', ['ambiance-section']);
  });
  
  // Music Button Event
  document.getElementById('music-button').addEventListener('click', function(event) {
    event.preventDefault();
    toggleDisplay('ambiance-section', ['todo-section']);
  });
  

//fire
var firePlaying = false;
document.getElementById("firebutton").addEventListener("click", function() {
    if(!firePlaying){
        var audio = document.getElementById("fireaudio");
        audio.volume = fslider.value / 100;
        audio.play();
        audio.loop = true;
        firePlaying = true;
        document.getElementById("fireplay").src = "../imageIcon/pause-solid.svg";
    }
    else{
        var audio = document.getElementById("fireaudio");
        audio.pause();
        firePlaying = false;
        document.getElementById("fireplay").src = "../imageIcon/play-solid.svg";
    }
});
var fslider = document.getElementById("fireslider");
fslider.oninput = function() {
    if(firePlaying){
        var audio = document.getElementById("fireaudio");
        audio.volume = this.value / 100;
    }
}
//keyboard
var keyPlaying = false;
document.getElementById("keybutton").addEventListener("click", function() {
    if(!keyPlaying){
        var audio = document.getElementById("keyaudio");
        audio.volume = kslider.value / 100;
        audio.play();
        audio.loop = true;
        keyPlaying = true;
        document.getElementById("keyplay").src = "../imageIcon/pause-solid.svg";
    }
    else{
        var audio = document.getElementById("keyaudio");
        audio.pause();
        keyPlaying = false;
        document.getElementById("keyplay").src = "../imageIcon/play-solid.svg";
    }
});
var kslider = document.getElementById("keyslider");
kslider.oninput = function() {
    if(keyPlaying){
        var audio = document.getElementById("keyaudio");
        audio.volume = this.value / 100;
    }
}
//rain
var rainPlaying = false;
document.getElementById("rainbutton").addEventListener("click", function() {
    if(!rainPlaying){
        var audio = document.getElementById("rainaudio");
        audio.volume = rslider.value / 100;
        audio.play();
        audio.loop = true;
        rainPlaying = true;
        document.getElementById("rainplay").src = "imageIcon/pause-solid.svg";
    }
    else{
        var audio = document.getElementById("rainaudio");
        audio.pause();
        rainPlaying = false;
        document.getElementById("rainplay").src = "imageIcon/play-solid.svg";
    }
});
var rslider = document.getElementById("rainslider");
rslider.oninput = function() {
    if(rainPlaying){
        var audio = document.getElementById("rainaudio");
        audio.volume = this.value / 100;
    }
}
//typewriter
var typePlaying = false;
document.getElementById("typebutton").addEventListener("click", function() {
    if(!typePlaying){
        var audio = document.getElementById("typeaudio");
        audio.volume = tslider.value / 100;
        audio.play();
        audio.loop = true;
        typePlaying = true;
        document.getElementById("typeplay").src = "imageIcon/pause-solid.svg";
    }
    else{
        var audio = document.getElementById("typeaudio");
        audio.pause();
        typePlaying = false;
        document.getElementById("typeplay").src = "imageIcon/play-solid.svg";
    }
});
var tslider = document.getElementById("typeslider");
tslider.oninput = function() {
    if(typePlaying){
        var audio = document.getElementById("typeaudio");
        audio.volume = this.value / 100;
    }
}
//writing
var writePlaying = false;
document.getElementById("writebutton").addEventListener("click", function() {
    if(!writePlaying){
        var audio = document.getElementById("writeaudio");
        audio.volume = wslider.value / 100;
        audio.play();
        audio.loop = true;
        writePlaying = true;
        document.getElementById("writeplay").src = "imageIcon/pause-solid.svg";
    }
    else{
        var audio = document.getElementById("writeaudio");
        audio.pause();
        writePlaying = false;
        document.getElementById("writeplay").src = "imageIcon/play-solid.svg";
    }
});
var wslider = document.getElementById("writeslider");
wslider.oninput = function() {
    if(writePlaying){
        var audio = document.getElementById("writeaudio");
        audio.volume = this.value / 100;
    }
}

/* Background choser*/
document.querySelectorAll('.choice').forEach((choice) => {
    choice.addEventListener('click', (event) => {
        const bgUrl = event.target.src;
        document.body.style.backgroundImage = `url(${bgUrl})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.querySelector('.background-chooser').classList.remove('active');
    });
});

document.querySelector('.navbar-toggle').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah perilaku default link
    const bgChooser = document.querySelector('.background-chooser');
    bgChooser.style.display = bgChooser.style.display === 'none' || bgChooser.style.display === '' ? 'block' : 'none';
    const ambiance = document.querySelector('#ambiance-section');
    if(ambiance.style.display === 'block'){
        ambiance.style.display = 'none';
    }
    const todo = document.querySelector('#todo-section');
    if(todo.style.display === 'block'){
      todo.style.display = 'none';
    }
});

// menampilkan salah satu background
document.addEventListener('DOMContentLoaded', () => {
    const bgChooser = document.querySelector('.background-chooser');
    
    const setBackground = (imageUrl) => {
        document.body.style.backgroundImage = `url(${imageUrl})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    };
    setBackground('../background/library.jpg'); 
    document.querySelectorAll('.choice').forEach(choice => {
        choice.addEventListener('click', (event) => {
            const imageUrl = event.target.src;
            setBackground(imageUrl); 
            bgChooser.classList.remove('active'); 
        });
    });
});

document.getElementById('rightnavabout').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah perilaku default link
    const about = document.querySelector('.about');
    about.style.display = (about.style.display === 'none' || about.style.display === '') ? 'flex' : 'none';

    const todo = document.querySelector('#todo-section');
    if(todo.style.display === 'block'){
    todo.style.display = 'none';
    }
    const bgChooser = document.querySelector('.background-chooser');
    if(bgChooser.style.display === 'block'){
    bgChooser.style.display = 'none';
    }
    const ambiance = document.querySelector('#ambiance-section');
    if(ambiance.style.display === 'block'){
        ambiance.style.display = 'none';
    }
});