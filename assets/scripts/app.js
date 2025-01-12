class Product {
  title = "DEFAULT";
  inageUrl;
  description;
  price;

  constructor(title, image, description, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = description;
    this.price = price;
  }
}


class ProductItem {
    constructor(product){
        this.product = product;
    }

    addToCart() {
        console.log('Added to cart');
    }

    renderItem(){
        const prodEl = document.createElement("li");
        prodEl.className = "product-item";
        prodEl.innerHTML = `
                <div>
                <img  src="${ this.product.imageUrl}" alt="${ this.product.title}" >
                <div class="product-item__content">
                 <h2>${ this.product.title}</h2>
                 <h3>\$${ this.product.price}</h3>
                 <p>${ this.product.description}</p>
                 <button>Add to Cart</button>
                </div>
                </div>
              `;
              const addCartButton = prodEl.querySelector('button');
              addCartButton.addEventListener('click', this.addToCart.bind(this));
              return prodEl;
    }
}

class ProductList {
  products = [
    new Product(
      "Pillow",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDn1_8kpGWT5c0FYXkunkX5rEqJ0k2I0cgXFruxsvnUv3F9Mm5r2lC4E&s",
      20.46,
      "A soft pillow"
    ),
    new Product(
      "Carpet",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg",
      199.46,
      "Elegant carpet"
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    for (const product of this.products) {
      const productItem = new ProductItem(product);
      const productElement = productItem.renderItem();
      prodList.append(productElement);
    }

    renderHook.append(prodList);
  }
}

const productList = new ProductList();

productList.render();
