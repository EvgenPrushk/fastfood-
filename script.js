init();

function init() {
  // сохраняем массив всех наших категорий
  const groups = database.getAllCategories();
  // храниться массив элементов для вставки
  const groupElements = groups.map((group) => getMenuGroupElement(group));
  // добавление элементов
  updateMenuGroups(...groupElements);

  for (const groupElement of groupElements) {
    groupElement.addEventListener("click", groupElementClickHandler);
  }

  const products = database.getAllProductsByCategoryId(1);
  const productCards = products.map(getProductCard);

  updateMenuProducts(...productCards);

  updateBasketBar(database.getBasket());
}

function groupElementClickHandler() {
  // получаем Id по какой категории мы кликнули
  // this ссылается на тот элемент / контекст над которым это событие произошло
  // позволяет использовать одну функцию на большое колличество дом элементов
  const groupId = parseInt(this.getAttribute("data-group-id"));

  const products = database.getAllProductsByCategoryId(groupId);
  const productCards = products.map(getProductCard);

  updateMenuProducts(...productCards);
}

//11-00
