(function () {
  const database = {
    products: [{
        id: 1,
        image: "assets/apple.jpg",
        label: "Яблоки",
        price: 14.55
      },
      {
        id: 2,
        image: "assets/pear.jpg",
        label: "Груша",
        price: 15.77
      },
      {
        id: 3,
        image: "assets/orange.jpg",
        label: "Апельсин",
        price: 18.2
      },
      {
        id: 4,
        image: "assets/bread.jpg",
        label: "Хлеб",
        price: 9.12
      },
      {
        id: 5,
        image: "assets/bun.jpg",
        label: "Булочка",
        price: 12.21
      },
      {
        id: 6,
        image: "assets/banana.jpg",
        label: "Банан",
        price: 20.32
      },
      {
        id: 7,
        image: "assets/pigtail.jpg",
        label: "Косички",
        price: 11.15
      },
      {
        id: 8,
        image: "assets/milk.jpg",
        label: "Молоко",
        price: 20.22
      },
      {
        id: 9,
        image: "assets/sweetcheee.jpg",
        label: "Сырок",
        price: 7.42
      },
      {
        id: 10,
        image: "assets/cheese.jpg",
        label: "Сыр",
        price: 24.23
      },
    ],

    categories: [{
        id: 1,
        image: "assets/basket.jpeg",
        label: "Все",
        productsId: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      },
      {
        id: 2,
        image: "assets/fruits.jpeg",
        label: "Фрукты",
        productsId: [1, 2, 3, 6]
      },
      {
        id: 3,
        image: "assets/bakery.jpeg",
        label: "Хлебобулочные",
        productsId: [4, 5, 7]
      },
      {
        id: 4,
        image: "assets/dairy.jpeg",
        label: "Молочные",
        productsId: [8, 9, 10]
      },
    ],

    basket: {
      totalCoast: 0, 
      products: [],
    }
  };

  const api = {

  };

  api.getProductById = function getProductById(productId) {
    for (const product of database.products) {
      if (product.id === productId) {
        return getCopy(product);
      }
    }
    throw Error(`Продукта с id ${productId} нет в базе данных`);
  };

  api.getCategoryById = function getCategoryById(categoryId) {
    for (const category of database.categories) {
      if (category.id === categoryId) {
        return getCopy(category);
      }
    }
    throw Error(`Категории с id ${categoryId} нет в базе данных`);
  };


  api.getAllCategories = function getAllCategories() {
    return getCopy(database.categories);
  }

  api.getAllProductsByCategoryId = function getAllProductsByCategoryId(categoryId) {
    let category = null;

    for (const item of database.categories) {
      if (item.id === categoryId) {
        category = item;
        break;
      }
    }

    if (!category) {
      throw Error(`Категории с id ${categoryId} нет в базе данных`);
    }
    // const products = database.products.filter(product => category.productsId.includes(product.id));
    const products = [];
    // составляем список продуктов, которые включены в данную категорию
    for (const product of database.products) {
      if (category.productsId.includes(product.id)) {
        products.push(product);
      }
    }
    return getCopy(products);
  }

  api.getBasket = function getBasket() {
    return getCopy(database.basket);
  }

  window.database = api;

  function getCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
})();