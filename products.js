const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

function listProducts() {
  return products.forEach(elemento => {
    console.log(elemento)
    if (elemento.category == "Frutas" ) {
      let tagLi = document.createElement('li');
      let tagImg = document.createElement('img');
      let tagMain = document.createElement('main');
      let tagH1 = document.createElement('h1');
      let tagH5 = document.createElement('h5');
      let tagStrong = document.createElement('strong')


      tagLi.classList.add('product');
      tagImg.classList.add('product-img');
      tagMain.classList.add('product-main');
      tagH1.classList.add('product-title');
      tagH5.classList.add('product-category');
      tagStrong.classList.add('product-price')
            
      if (elemento.image == undefined) {
        tagImg.src = "./img/products/no-img.svg"
      } else {
        tagImg.src = elemento.image
      };
      tagImg.alt = elemento.imageDescription;
      tagH1.innerText = elemento.title;
      tagH5.innerText = elemento.category;
      tagStrong.innerText = elemento.price


      document.querySelector('.fruits').appendChild(tagLi);
      tagLi.append(tagImg, tagMain);
      tagMain.append(tagH1, tagH5, tagStrong);
      
    } else if (elemento.category == "Bebidas") {
      let tagLi = document.createElement('li');
      let tagImg = document.createElement('img');
      let tagMain = document.createElement('main');
      let tagH1 = document.createElement('h1');
      let tagH5 = document.createElement('h5');
      let tagStrong = document.createElement('strong')


      tagLi.classList.add('product');
      tagImg.classList.add('product-img');
      tagMain.classList.add('product-main');
      tagH1.classList.add('product-title');
      tagH5.classList.add('product-category');
      tagStrong.classList.add('product-price')
            
      if (elemento.image == undefined) {
        tagImg.src = "./img/products/no-img.svg"
      } else {
        tagImg.src = elemento.image
      };
      tagImg.alt = elemento.imageDescription;
      tagH1.innerText = elemento.title;
      tagH5.innerText = elemento.category;
      tagStrong.innerText = elemento.price


      document.querySelector('.drinks').appendChild(tagLi);
      tagLi.append(tagImg, tagMain);
      tagMain.append(tagH1, tagH5, tagStrong);
    
    } else {
      let tagLi = document.createElement('li');
      let tagImg = document.createElement('img');
      let tagMain = document.createElement('main');
      let tagH1 = document.createElement('h1');
      let tagH5 = document.createElement('h5');
      let tagStrong = document.createElement('strong')


      tagLi.classList.add('product');
      tagImg.classList.add('product-img');
      tagMain.classList.add('product-main');
      tagH1.classList.add('product-title');
      tagH5.classList.add('product-category');
      tagStrong.classList.add('product-price')
            
      if (elemento.image == undefined) {
        tagImg.src = "./img/products/no-img.svg"
      } else {
        tagImg.src = elemento.image
      };
      tagImg.alt = elemento.imageDescription;
      tagH1.innerText = elemento.title;
      tagH5.innerText = elemento.category;
      tagStrong.innerText = elemento.price


      document.querySelector('.hygiene').appendChild(tagLi);
      tagLi.append(tagImg, tagMain);
      tagMain.append(tagH1, tagH5, tagStrong);
    }


  })
}

listProducts()


