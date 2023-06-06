import Product from "../config/product.js";
import Cart from "../config/cart.js";

const cart = new Cart();

function setUpCart(){
  const addCartBtn = document.getElementById('add-to-cart-button');
  const removeButtons = document.querySelectorAll('.remove-btn');
  const cartButton = document.getElementById('OpenCartButton');

  addCartBtn.addEventListener('click', function() {
    const productName = document.getElementById('title').innerText;
    //const productImage = document.getAttribute("src").innerText;
    const productPrice = document.getElementById('price').innerText;
    const productColor = document.querySelector('input[name="color"]:checked').value;
    const productJoke = document.getElementById('chosedJoke').innerText;

    const product = new Product(productName, productPrice ,productColor, productJoke);

    cart.addProduct(product);

    const productMarkup = product.generateMarkup();
    const cartProductsContainer = document.getElementById('cartContainer');
    cartProductsContainer.insertAdjacentHTML('beforeend', productMarkup);
  });

  removeButtons.forEach(function(button) {
    button.addEventListener('click', function(){
      const productElement = button.closest('.product');

      const productName = productElement.querySelector('#title').innerText;
      const product = cart.products.find(function(p) {
        return p.title === productName;
      });

      cart.removeProduct(product);

      productElement.remove();
    });
  });

  cartButton.addEventListener('click', function() {
    cart.getStoredProducts();

  const cartProductsContainer = document.getElementById('cartProductsContainer');
  cart.products.forEach(function(product) {
    const productMarkup = product.generateMarkup();
    cartProductsContainer.insertAdjacentHTML('beforeend', productMarkup);
  });

  const cartContainer = document.getElementById('cartContainer');
  cartContainer.style.display = 'block';
});

const closeCartButton = document.getElementById('closeBtn');

closeCartButton.addEventListener('click', function() {
  const cartProductsContainer = document.getElementById('cartProductsContainer');
  cartProductsContainer.innerHTML = '';
  const cartContainer = document.getElementById('cartContainer');
  cartContainer.style.display = 'none';
});
}

export {setUpCart};


