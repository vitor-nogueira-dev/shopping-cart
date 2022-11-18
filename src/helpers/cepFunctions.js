const buttonCEP = document.querySelector('.cep-button');
const inputCep = document.querySelector('.cep-input');
const displayText = document.querySelector('.cart__address');

function addLoading() {
  displayText.textContent = 'CEP não encontrado';
}

export const getAddress = (data) => {
  const rua = data.street || data.address;
  const bairro = data.district || data.neighborhood;
  displayText.innerHTML = `${rua} - ${bairro} - ${data.city} - ${data.state}`;
};

export const searchCep = () => {
  if (!Number(inputCep.value)) return addLoading();
  const URL1 = `https://cep.awesomeapi.com.br/json/${inputCep.value}`;
  const URL2 = `https://brasilapi.com.br/api/cep/v2/${inputCep.value}`;
  // rmvLoading();
  Promise.any([fetch(URL1), fetch(URL2)])
    .then((response) => response.json())
    .then((data) => getAddress(data));
};
buttonCEP.addEventListener('click', searchCep);
