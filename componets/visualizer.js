import { pChange } from "./products.js";

const img = document.getElementById('default-img')

function upDateDefaultImg(product) {
  img.setAttribute('src', `img/black-${product}.jpg`);
}

function initUpdateImg() {
  pChange.subscribe(upDateDefaultImg);
}

export { initUpdateImg };