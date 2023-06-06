class Product{
  constructor(title, price, color,joke,){
    this.title = title;
    //this.image = image;
    this.color = color;
    this.price = price;
    this.joke = joke;
  }

  generateMarkup() {
    return `<div class="product">
              <p class="title">${this.title} (${this.color})</p>
              <p class="price">${this.price}</p>
              <p class="joke">${this.joke}</p>
              <button class="remove-btn" data-index="${this.index}">Remove</button>
            </div>`;
  };
}

export default Product