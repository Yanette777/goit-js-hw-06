const  button = document.getElementsByTagName('button')[0];

function RBC (e) {
  button.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
}

button.addEventListener("click", RBC);
window.onload = RBC();