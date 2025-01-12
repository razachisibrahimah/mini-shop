class Product {
  title = "DEFAULT";
  inageUrl;
  description;
  price;

  constructor(title, image, description, price){
    this.title = title;
    this.imageUrl = image;
    this.description = description;
    this.price = price;

  }
}

const productList = {
  products: [
    new Product("Pillow", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDn1_8kpGWT5c0FYXkunkX5rEqJ0k2I0cgXFruxsvnUv3F9Mm5r2lC4E&s",
        20.46, "A soft pillow"
    ),
    new Product("Carpet", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg",
        199.46, "Elegant carpet"
    )
  ],

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
              <div>
              <img  src="${prod.imageUrl}" alt="${prod.title}" >
              <div class="product-item__content">
               <h2>${prod.title}</h2>
               <h3>\$${prod.price}</h3>
               <p>${prod.description}</p>
               <button>Add to Cart</button>
              </div>
              </div>
            `;
      prodList.append(prodEl);
    }

    renderHook.append(prodList);
  },
};

productList.render();
