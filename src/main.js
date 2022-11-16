import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const sectionPai = document.querySelector('.products');

const listComputer = await fetchProductsList('computador');
listComputer.map((element) => sectionPai.appendChild(createProductElement(element)));
