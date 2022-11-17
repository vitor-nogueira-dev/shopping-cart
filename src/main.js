import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import {
  createProductElement,
  createCartProductElement,
} from './helpers/shopFunctions';
import { saveCartID } from './helpers/cartFunctions';

const descendentes = document.querySelectorAll('.products');
console.log(descendentes);
descendentes.forEach((button) => {
  button.addEventListener('click', async (event) => {
    const olPai = document.querySelector('.cart__products');
    if (event.target) {
      const spanId = event.target.parentNode.firstChild.textContent;
      saveCartID(spanId);
      const retorno = await fetchProduct(spanId);
      olPai.appendChild(createCartProductElement(retorno));
    }
  });
});

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

try {
  const listComputer = await fetchProductsList('computador');
  rmvLoading();
  listComputer.map((element) => sectionPai.appendChild(createProductElement(element)));
} catch (error) {
  const divErro = document.createElement('div');
  divErro.textContent = 'Algum erro ocorreu, recarregue a página e tente novamente';
  divErro.classList.add('error');
  sectionContainer.appendChild(divErro);
}
