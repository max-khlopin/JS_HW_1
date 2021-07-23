'use strict';
const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = (item, img = "https://via.placeholder.com/200x200/4D4C7D/ebebeb") => {
    return `<div class="product-item">
                <img src="${img}" alt="${item.title}">
                <div class="desc">
                    <h3 class = "prodName">${item.title}</h3>
                    <p>${item.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
}

const renderProducts = (list) => {

    document.querySelector('.products').
    insertAdjacentHTML('beforeend', `<div class="productList">${list.map(item => renderProduct(item)).join('')} </div>`);
}

renderProducts(products);
