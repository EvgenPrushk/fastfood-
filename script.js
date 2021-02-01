function init () {
  // сохраняем массив всех наших категорий
const groups = database.getAllCategories();
// храниться массив элементов для вставки
const groupElements = groups.map(group => getMenuGroupElement(group));
// добавление элементов
updateMenuGroups(...groupElements);  
}