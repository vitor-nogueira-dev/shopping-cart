export const fetchProduct = async (idProduct) => {
  if (!idProduct) {
    throw new Error('ID não informado');
  }
  const URL_PRODUCT = `https://api.mercadolibre.com/items/${idProduct}`;
  const promisse = await fetch(URL_PRODUCT);
  const data = await promisse.json();
  // console.log(data);
  return data;
};
// await fetchProduct('MLB2961982059');
export const fetchProductsList = async (categoria) => {
  if (categoria === undefined) {
    throw new Error('Termo de busca não informado');
  }
  const URL_PRODUCT_LIST = `https://api.mercadolibre.com/sites/MLB/search?q=${categoria}`;
  const promisse = await fetch(URL_PRODUCT_LIST);
  const data = await promisse.json();
  const dados = data.results;
  return dados;
};
