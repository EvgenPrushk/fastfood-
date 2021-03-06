function getProductCard(product, count = 0) {
    if (count === 0) {

        const template = document.querySelector('[data-product-card]').innerHTML;
        const domElement = document.createElement('div');

        // вставка служебной информации в '%IMAGE%, '%LABEL%, %PRICE%
        domElement.innerHTML = template
        .replace('%ID%', product.id)
        .replace('%IMAGE%', product.image)
        .replace('%LABEL%', product.label)
        .replace('%PRICE%', numberToPrice(product.price));

        return domElement.firstElementChild
    }

    else {
        const template = document.querySelector('[data-product-card-smart]').innerHTML;
        const domElement = document.createElement('div');

        // вставка служебной информации в '%IMAGE%, '%LABEL%, %PRICE%
        domElement.innerHTML = template
        .replace('%ID%', product.id)
        .replace('%COUNT%', count)
        .replace('%IMAGE%', product.image)
        .replace('%LABEL%', product.label)
        .replace('%PRICE%', numberToPrice(product.price))       

        return domElement.firstElementChild
    }
}

// вставляет группы
function getMenuGroupElement(product) {
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

function updateBasketBar(basket) {
    const emptyElement = document.querySelector('[data-basket-empty]');
    const fullElement = document.querySelector('[data-basket-full]');
    emptyElement.style.display = 'none';
    fullElement.style.display = 'none';

    if (basket.products.length === 0) {
        emptyElement.style.display = '';
    } else {
        fullElement.style.display = '';
        let counts = 0;
        for (const product of basket.products) {
            counts += product.count;
        }
        // document.querySelector('[data-basket-counts]')
        // .textContent = basket.products.reduce((p, e) => p + e.count, 0);
        document.querySelector('[data-basket-counts]').textContent = counts
        document.querySelector('[data-basket-totalcost]').textContent = numberToPrice(basket.totalCoast);
    }
}

function numberToPrice(n) {
    const div = parseInt(n / 100);
    const mod = (n % 100).toString().padEnd(2, '0');

    return `${div}.${mod}`;
}