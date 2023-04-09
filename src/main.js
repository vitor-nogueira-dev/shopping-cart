import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import {
  createProductElement,
  createCartProductElement,
} from './helpers/shopFunctions';
import { saveCartID, getSavedCartIDs } from './helpers/cartFunctions';

document
  .querySelector('.cep-button')
  .addEventListener('click', searchCep);

const sectionContainer = document
  .querySelector('.container');
const containerCart = document
  .querySelector('.cart__products');
const sectionProducts = document
  .querySelector('.products');
const spanPrice = document
  .querySelector('.total-price');

function addLoading() {
  const loading = document
    .createElement('section');
  loading
    .classList.add('loading');
  loading
    .textContent = 'carregando...';
  sectionContainer
    .appendChild(loading);
}
addLoading(); // window.onload

function rmvLoading() {
  const loading = document
    .querySelector('.loading');
  loading.remove();
}

try {
  const listComputer = await fetchProductsList('computador');
  rmvLoading();
  listComputer
    .map((element) => sectionProducts
      .appendChild(createProductElement(element)));
} catch (error) {
  const divErro = document
    .createElement('div');
  divErro
    .classList.add('error');
  divErro
    .textContent = 'Algum erro ocorreu, recarregue a página e tente novamente';
  sectionContainer
    .appendChild(divErro);
}

getSavedCartIDs()
  .forEach(async (produto) => {
    const product = await fetchProduct(produto);
    containerCart
      .appendChild(createCartProductElement(product));
    spanPrice.innerHTML = localStorage
      .getItem('totalPrice');
  });

const arraySum = [];

async function addProductCart(id) {
  const produto = await fetchProduct(id);
  containerCart
    .appendChild(createCartProductElement(produto));
  const soma = arraySum
    .reduce((acc, curr) => acc + curr, 0);
  spanPrice.textContent = soma
    .toFixed(2);
  localStorage
    .setItem('totalPrice', soma);
}
document
  .querySelectorAll('.product__add')
  .forEach((element) => element
    .addEventListener('click', async () => {
      const id = element.parentNode
        .querySelector('.product__id').textContent;
      const price = element.parentNode
        .querySelector('.product__price__value').textContent;

      arraySum
        .push(Number(price));

      saveCartID(id);
      addProductCart(id);
    }));
