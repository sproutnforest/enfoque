

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

// show list button side bar -> to do list
document.getElementById('todo-button').addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah perilaku default link
  const todo = document.querySelector('#todo-section');
  todo.style.display = todo.style.display === 'none' || todo.style.display === '' ? 'block' : 'none';
});

//ambience
document.getElementById('music-button').addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah perilaku default link
  const todo = document.querySelector('#ambiance-section');
  todo.style.display = todo.style.display === 'none' || todo.style.display === '' ? 'block' : 'none';
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

