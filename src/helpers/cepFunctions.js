const buttonCEP = document.querySelector('.cep-button');
const inputCep = document.querySelector('.cep-input');
const displayText = document.querySelector('.cart__address');

function addLoading() {
  displayText.textContent = 'CEP não encontrado';
}

export const getAddress = ({
  street,
  address,
  district,
  neighborhood,
  city,
  state,
}) => {
  const rua = street || address;
  const bairro = district || neighborhood;
  displayText.innerHTML = `${rua} - ${bairro} - ${city} - ${state}`;
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
