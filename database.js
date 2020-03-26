(function() {
  const database = {
    products: [
        {id: 1, image: "assets/apple.jpg", label: "Яблоки", price: 14.55},
        {id: 2, image: "assets/pear.jpg", label: "Груша", price: 15.77},
        {id: 3, image: "assets/orange.jpg", label: "Апельсин", price: 18.2},
        {id: 4, image: "assets/bread.jpg", label: "Хлеб", price: 9.12},
        {id: 5, image: "assets/bun.jpg", label: "Булочка", price: 12.21},
        {id: 6, image: "assets/banana.jpg", label: "Банан", price: 20.32},
        {id: 7, image: "assets/pigtail.jpg", label: "Косички", price: 11.15},
        {id: 8, image: "assets/milk.jpg", label: "Молоко", price: 20.22},
        {id: 9, image: "assets/sweetcheee.jpg", label: "Сырок", price: 7.42},
        {id: 10, image: "assets/cheese.jpg", label: "Сыр", price: 24.23},
    ],

    categories: [
        {id: 1, image: "assets/basket.jpeg", label: "Все", productsId: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
        {id: 2, image:"assets/fruits.jpeg", label: "Фрукты", productsId: [1, 2, 3, 6]},
        {id: 3, image: "assets/bakery.jpeg", label: "Хлебобулочные", productsId: [4, 5, 7]},
        {id: 4, image: "assets/dairy.jpeg", label: "Молочные", productsId: [8, 9, 10]},
    ],

    basket: {
      products: [
        {
          productId: 1,
          count: 1,
        }
      ]
    }
  };

  const api = {};

  window.database = api;
})();


