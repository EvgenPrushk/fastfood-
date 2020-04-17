function getProductCard (product) {
    const template = document.querySelector('[data-product-card]').innerHTML;
    const domElement = document.createElement('div');
    domElement.innerHTML = template
        .replace('%IMAGE%', product.image)
        .replace('%LABEL%', product.label)
        .replace('%PRICE%', product.price);    

    return  ;
}

function getMenuGroupElement (product) {
    const template = document.querySelector('[data-menu-group]').innerHTML;
    const domElement = document.createElement('div');
    domElement.innerHTML = template.replace('%IMAGE%', product.image).replace('%LABEL%', product.label);    

    return domElement.firstElementChild;
}

function updateMenuProducts(...elements) {
    const menuProductsElement = document.querySelector('[data-menu-products]');
    menuProductsElement.innerHTML = '';
    menuProductsElement.append(...elements);
}

function updateMenuGroups(...groups) {
    const menuGroupsElement = document.querySelector('[data-menu-groups]');
    menuGroupsElement.innerHTML = '';
    menuGroupsElement.append(...groups);
}
