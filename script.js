
const groups = database.getAllCategories();
const groupElements = groups.map(group => getMenuGroupElement(group))

console.log(groupElements);

