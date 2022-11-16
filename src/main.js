import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const sectionPai = document.querySelector('.products');
const sectionContainer = document.querySelector('.container');

function addLoading() {
  const loading = document.createElement('section');
  loading.classList.add('loading');
  loading.textContent = 'carregando...';
  sectionContainer.appendChild(loading);
}
addLoading();

function rmvLoading() {
  const loading = document.querySelector('.loading');
  loading.remove();
}
const listComputer = await fetchProductsList('computador');
listComputer.map((element) => {
  rmvLoading();
  const addProd = sectionPai.appendChild(createProductElement(element));
  return addProd;
});
