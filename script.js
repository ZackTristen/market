
//данные из JSON
var products = [
  {productId:1, productName: 'Товар 1', categoryId:1},
  {productId:2, productName: 'Товар 2', categoryId:2},
  {productId:3, productName: 'Товар 3', categoryId:3},
  {productId:4, productName: 'Товар 4', categoryId:4},
  {productId:5, productName: 'Товар 5', categoryId:5},
  {productId:6, productName: 'Товар 6', categoryId:1},
  {productId:7, productName: 'Товар 7', categoryId:2},
  {productId:8, productName: 'Товар 8', categoryId:3},
  {productId:9, productName: 'Товар 9', categoryId:4},
  {productId:10, productName: 'Товар 10', categoryId:5},
  {productId:11, productName: 'Товар 11', categoryId:1},
  {productId:12, productName: 'Товар 12', categoryId:2},
  {productId:13, productName: 'Товар 13', categoryId:3},
  {productId:14, productName: 'Товар 14', categoryId:4},
  {productId:15, productName: 'Товар 15', categoryId:5},
  {productId:16, productName: 'Товар 16', categoryId:1},
  {productId:17, productName: 'Товар 17', categoryId:2},
  {productId:18, productName: 'Товар 18', categoryId:3},
  {productId:19, productName: 'Товар 19', categoryId:4},
  {productId:20, productName: 'Товар 20', categoryId:5},
  {productId:21, productName: 'Товар 21', categoryId:1},
  {productId:22, productName: 'Товар 22', categoryId:2},
  {productId:23, productName: 'Товар 23', categoryId:3},
  {productId:24, productName: 'Товар 24', categoryId:4},
  {productId:25, productName: 'Товар 25', categoryId:5}
];
var categories = [
  {categoryId:1, categoryName: 'Футболки'},
  {categoryId:2, categoryName: 'Майки'},
  {categoryId:3, categoryName: 'Носки'},
  {categoryId:4, categoryName: 'Джинсы'},
  {categoryId:5, categoryName: 'Брюки'},
];

//обертка для панелей (табов)
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

//массив для хранения каждого из табов
let tabs = [];

//функция создания категорий (табов)
//принимает в качестве аргумента массив категорий из JSON
//создаем отдельный контейнер для каждого таба, добавляет классы и обработчик событий
//обработчик событий по клику проверяет все табы на предмет наличия класса 'active'
//если присутствует то удаляет его, если отсутствует то добавляет
//после этого вызывается функция для рендринга контента таба
//затем табы добавляются в массив tabs, который затем отправляется в обертку wrapper
const createCategories = (categories) => {
  categories.forEach(category => {
    let tab = document.createElement('div');
    tab.textContent = category.categoryName;
    tab.className = `tab-panel`;
    tab.id = category.categoryId;
    tab.addEventListener('click', (e) => {
      tabs.forEach(tab => {
        tab.classList.remove('active');
      });
      e.target.classList.add('active');
      showProducts(category.categoryId);
    });
    tabs.push(tab);
    wrapper.appendChild(tab);
  });
}

//переменная для хранения контента табов
let tabContent = document.createElement('div');
//добавляем класс
tabContent.className = 'tab-content';

//функция показа продуктов по категории
//по клику показываем контент активного таба
//для избежания дублирования контента обязательно очищаем его
//проходимся по продуктам и проверяем на соответствие категории,
// при успешной проверке создаем продукт на основе элемента массива products
// затем пушим его в в tabContent для последующей отрисовки
const showProducts = (categoryId) => {
  tabContent.innerHTML = ''; 
products.forEach(el => {
  if (el.categoryId === categoryId) {
    let product = document.createElement('div');
    product.className = 'product';
    product.id = el.productId;
    let image = document.createElement('img');
    image.className = 'product-image';
    image.alt = el.productName;
    image.src = 'http://rrstatic.retailrocket.net/test_task/tovar.jpg';
    product.appendChild(image);
    let description = document.createElement('p');
    description.textContent = el.productName;
    description.className = 'product-description';
    product.appendChild(description);
    
    tabContent.appendChild(product);
    
  }
})
//добавляем в body наш контент
document.body.appendChild(tabContent);
}

//инициализируем категории (где уже сразу вешаем обработчики)
createCategories(categories);


//закидываем wrapper в body
document.body.appendChild(wrapper);
