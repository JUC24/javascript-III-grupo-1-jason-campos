import datas from "./data.js";
import Publisher from "./publisher.js";

const op = document.getElementById('productsContainer')

const pChange = new Publisher();

function ProductChangeManage (event){
  pChange.publish(event.currentTarget.dataset.productid);
}

function renderProducts() {
  let html = '';
  const products = Object.keys(datas);
  products.shift();
  products.forEach((prod)=> {
    const btn = document.createElement('button');
    btn.setAttribute('class','product_btn');
    btn.dataset.productid = prod;
    btn.addEventListener('click', ProductChangeManage );
    btn.innerHTML = `<img class="productImg" src="img/white-${prod}.jpg" alt="">`;
    if (op) {
      op.appendChild(btn);
    }
  })
}

export {renderProducts, pChange}