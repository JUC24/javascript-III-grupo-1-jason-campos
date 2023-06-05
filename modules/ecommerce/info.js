import { setUpproductChange} from "./varietyProducts.js";
import {datas, state} from "../config/data.js";
import {colorChange} from "./changeColor.js"

const title = document.getElementById('title')
const price = document.getElementById('price')

function titleChange(product){
  title.innerHTML = `${state.color} ${product}`;
  price.innerHTML = `${datas[product][state.color]}`;
  state.product = product;
}

function colorschanges(color){
  title.innerHTML = `${color} ${state.product}`;
  price.innerHTML = `${datas[state.product][color]}`;
  state.color = color
}

function setUpinfo(){
  setUpproductChange.subscribe(titleChange)
  colorChange.subscribe(colorschanges)
}

export {setUpinfo};