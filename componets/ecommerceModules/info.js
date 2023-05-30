import { pChange } from "./products.js"
import datas from "./data.js"
import { colorUpdte } from "./color.js"

const title = document.getElementById('title')
const price = document.getElementById('price')
const chosedJoke = document.getElementById('chosedJoke')
let state = {
  color:'white',
  product: 'shirt'
};

function ProductChangeManage(product){
  title.innerHTML = `${state.color} ${product}`;
  price.innerHTML = `${datas[product][state.color]}`;
  state.product = product;
}

function colorChangeManage(color){
  title.innerHTML = `${color} ${state.product}`;
  price.innerHTML = `${datas[state.product][color]}`;
  state.color = color;  
}

function setUpInfo(){
  pChange.subscribe(ProductChangeManage)
  colorUpdte.subscribe(colorChangeManage)
}

export {setUpInfo}

