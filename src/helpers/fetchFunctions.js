export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (categoria) => {
  if (categoria === undefined) {
    throw new Error('Termo de busca não informado');
  }
  const URL_PRODUCT_LIST = `https://api.mercadolibre.com/sites/MLB/search?q=${categoria}`;
  try {
    const promisse = await fetch(URL_PRODUCT_LIST);
    const data = await promisse.json();
    const dados = data.results;
    return dados;
  } catch (error) {
    return error.message;
  }
};
