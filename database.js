(function () {
  const database = {
    products: [{
        id: 1,
        image: "assets/apple.jpg",
        label: "Яблоки",
        price: 1455
      },
      {
        id: 2,
        image: "assets/pear.jpg",
        label: "Груша",
        price: 1577
      },
      {
        id: 3,
        image: "assets/orange.jpg",
        label: "Апельсин",
        price: 182
      },
      {
        id: 4,
        image: "assets/bread.jpg",
        label: "Хлеб",
        price: 912
      },
      {
        id: 5,
        image: "assets/bun.jpg",
        label: "Булочка",
        price: 1221
      },
      {
        id: 6,
        image: "assets/banana.jpg",
        label: "Банан",
        price: 2032
      },
      {
        id: 7,
        image: "assets/pigtail.png",
        label: "Косичка",
        price: 1115
      },
      {
        id: 8,
        image: "assets/milk.jpeg",
        label: "Молоко",
        price: 2022
      },
      {
        id: 9,
        image: "assets/sweetcheese.jpg",
        label: "Сырок",
        price: 742
      },
      {
        id: 10,
        image: "assets/cheese.jpg",
        label: "Сыр",
        price: 2423
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
        image: "assets/fruits.jpg",
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
        image: "assets/dairy.jpg",
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

  api.addItemToBasket = function addItemToBasket(productId) {
    //  проходимся по всем элементам находящимся в карзине
    let exsist = false;
    for (const product of database.basket.products) {
      
      // если имеется совпадение, то увеличивем count на единицу
      if (product.productId === productId) {
        exsist = true;
        product.count++;
        break;
      }
    }

    if (!exsist) {
      const item = {
        productId,
        count: 1,
      }
    
      database.basket.products.push(item);
    }
    console.log(database.basket);

    let totalCoast = 0;
    // пройдемся по корзине, потом пройдемся по дате товаров
    // for (const item of database.products) {
    //   for (const product of database.products) {
    //     if (item.productId === product.id) {
    //       totalCoast += product.price * item.count;
    //       break;
    //     }
    //   }
    // }

    for (const item of database.basket.products) {
      const product = database.products.find(x => x.id === item.productId);
      totalCoast += product.price * item.count;
    }

    // добаввляем в базу сумму;
    database.basket.totalCoast = totalCoast;
      console.log(database.basket);
  }

  window.database = api;

  function getCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
})();
