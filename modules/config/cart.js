class Cart {
  constructor(){
    this.products = [];
  }

  addProduct(product){
    this.products.push(product);
    this.updateLocalStorage();
  };

  removeProduct(product){
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.updateLocalStorage();
    }
  };

  removeAllProducts(){
    this.products = [];
    this.updateLocalStorage();
  };

  updateLocalStorage(){
    localStorage.setItem('cartProducts', JSON.stringify(this.products));
  };
  
  getStoredProducts(){
    const storedProducts = localStorage.getItem('cartProducts');
    if (storedProducts){
      this.products = JSON.parse(storedProducts);
    }
  };
}

export default Cart