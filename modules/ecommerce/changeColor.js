import Publisher from "../config/publisher.js"

const colors = document.querySelectorAll('.colorOP')
const colorChange = new Publisher

function colorManage(event){
  const color = event.currentTarget.dataset.id
  colorChange.publish(color)
}

function setUpColors(){
  colors.forEach(color =>{
    color.addEventListener('change',colorManage)
  })
}

export {setUpColors, colorChange}