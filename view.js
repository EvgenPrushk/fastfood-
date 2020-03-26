function getProductCard (product) {
    const template = document.querySelector('[data-product-card]').innerHTML;
    const domElement = document.createElement('div');
    domElement.innerHTML = template
        .replace('%IMAGE%', product.image)
        .replace('%LABEL%', product.label)
        .replace('%PRICE%', product.price);
    

    return domElement.firstElementChild;
}