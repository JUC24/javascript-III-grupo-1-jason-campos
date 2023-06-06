import { setUpproductChange } from "./varietyProducts.js";
import {colorChange} from "./changeColor.js"
import {state} from "../config/data.js"


const img = document.getElementById('default_img');
const joke = document.getElementById('joke-container')

function upDateImage(product){
  img.setAttribute('src',`img/${state.color}-${product}.jpg`)
  state.product = product;
}

function upDateColor(color){
  joke.classList.remove(`img-product-${state.color}`)
  img.setAttribute('src',`img/${color}-${state.product}.jpg`);
  joke.classList.add(`img-product-${color}`)
  state.color = color;
}

function defaultImage(){
  img.setAttribute('src',`img/${state.color}-${state.product}.jpg`);
}

function setUpchanges(){
  setUpproductChange.subscribe(upDateImage);
  colorChange.subscribe(upDateColor)
}

export {setUpchanges, defaultImage}