import {datas, state} from "../config/data.js";
import Publisher from "../config/publisher.js";

const op = document.getElementById('productsContainer')

const setUpproductChange = new Publisher();

function ProductChangeManage (event){
  console.log(event.currentTarget.dataset.productid)
  setUpproductChange.publish(event.currentTarget.dataset.productid);
}

function renderProducts() {
  const products = Object.keys(datas);
  const filterProducts = products.filter((product) => product !== state.product)
  filterProducts.forEach((prod)=> {
    const btn = document.createElement('button');
    btn.setAttribute('class','product_btn');
    btn.dataset.productid = prod;
    btn.addEventListener('click', ProductChangeManage );
    btn.innerHTML = `<img id="productImg" class="productImg" src="img/white-${prod}.jpg" alt="">`;
      op.appendChild(btn);
  })
}

export {renderProducts, setUpproductChange}