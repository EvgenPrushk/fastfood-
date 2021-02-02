let currentGroupId = 1;
init();

function init() {
  // сохраняем массив всех наших категорий
  const groups = database.getAllCategories();
  // храниться массив элементов для вставки
  const groupElements = groups.map((group) => getMenuGroupElement(group));
  // добавление элементов
  updateMenuGroups(...groupElements);

  for (let i = 0; i < groups.length; i++) {
    const groupElement = groupElements[i];
    const group = groups[i];

    // передаем id категории над которой произошел клик
    groupElement.addEventListener("click", () => selectCategory(group.id));
  }
  // загрузка категории изначально 1, где есть все карточки товара
  selectCategory(currentGroupId);

  // добавление элементов в саму корзину
  updateBasketBar(database.getBasket());
  // используем всплытие, чтобы прослушивать только 1 объект
  document.body.addEventListener('click', event => {
  
    if (!event.target.hasAttribute('data-add-to-basket')) {
      return
    }
    // получаем id у родительского элемента div
    // добавляем непосредственно продукт по Id c обновлением состояния корзины
    const productId = parseInt(event.target.parentElement.getAttribute('data-product-id'))
    database.addItemToBasket(productId);
    updateBasketBar(database.getBasket());
    selectCategory(currentGroupId);
  })
}

function selectCategory (groupId) {
  // получаем Id по какой категории мы кликнули
  // this ссылается на тот элемент / контекст над которым это событие произошло
  // позволяет использовать одну функцию на большое колличество дом элементов
  //const groupId = parseInt(this.getAttribute("data-group-id"));
  currentGroupId = groupId; //чтобы можно повторно вызвывать selectCategory
  
  const basket= database.getBasket();

  const products = database.getAllProductsByCategoryId(groupId);
  const productCards = products.map(x => getProductCard(x));

  //передача количества товара

  updateMenuProducts(...productCards);
}
