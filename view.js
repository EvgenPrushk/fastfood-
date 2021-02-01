function getProductCard (product) {
    const template = document.querySelector('[data-product-card]').innerHTML;
    const domElement = document.createElement('div');
   // вставка служебной информации в '%IMAGE%, '%LABEL%, %PRICE%
    domElement.innerHTML = template
        .replace('%ID%', product.id)
        .replace('%IMAGE%', product.image)
        .replace('%LABEL%', product.label)
        .replace('%PRICE%', product.price);    

    return  domElement.firstElementChild
}

// вставляет группы
function getMenuGroupElement (product) {
    const template = document.querySelector('[data-menu-group]').innerHTML;
    const domElement = document.createElement('div');
    domElement.innerHTML = template
    .replace('%ID%', product.id)
    .replace('%IMAGE%', product.image)
    .replace('%LABEL%', product.label);    

    return domElement.firstElementChild;
}

// обнавляет продукты
function updateMenuProducts(...elements) {
    const menuProductsElement = document.querySelector('[data-menu-products]');
    menuProductsElement.innerHTML = '';
    menuProductsElement.append(...elements);
}

// обновляет группы 
function updateMenuGroups(...groups) {
    const menuGroupsElement = document.querySelector('[data-menu-groups]');
    menuGroupsElement.innerHTML = '';
    menuGroupsElement.append(...groups);
}
