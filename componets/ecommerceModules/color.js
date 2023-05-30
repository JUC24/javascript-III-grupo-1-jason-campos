import Publisher from "./publisher.js";

const colorIn = document.querySelectorAll('.colorOP');
const colorUpdte = new Publisher();

function colorChange(event){
  const color = event.currentTarget.dataset.id;
  colorUpdte.Publish(color)
}

function initColor(){
  colorIn.forEach((color) => {
    color.addEventListener('change', colorChange)

  })
}

export{initColor,colorUpdte}