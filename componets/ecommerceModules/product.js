class Product{
  constructor(title,image,color,price,joke,){
    this.title = title;
    this.image = image;
    this.color = color;
    this.price = price;
    this.joke = joke;
  }

  generateMarkup() {
    return `<div class="product">
              <p class="title">${this.title} (${this.color})</p>
              <img class="img-product" src="${this.image}" alt=""</img>
              <p class="price">${this.price}</p>
              <p class="joke">${this.joke}</p>
              <button class="remove-btn">Remove</button>
            </div>`;
  };
}

export default Product