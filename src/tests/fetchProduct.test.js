import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe("Implementando testes para fetchProduct()", () => {
  it('Verifica se fetch é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('Verificando se fetchProduct MLB1405519561 recebendo o parâmetro computador foi chamada com a URL correta', async () => {
    await fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalled()
  });
  it('Verificando se a função fethProduct() com MLB1405519561 a função utiliza o endpoint', async () => {
    const idProduct = 'MLB1405519561';
    await fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561')
  })
  it('Testando se o retorno da função fetchProduct com o parâmetro MLB1405519561 é uma estrutura igual ao objeto ITEM', async () => {
    const chamadaFuncao = await fetchProduct('MLB1405519561')
    expect(chamadaFuncao).toEqual(product);
  })
  it('Testando se a função sem parâmetro retorna um erro', async () => {
    try {
     await fetchProduct()
    } catch(error) {
      expect(error.message).toBe('ID não informado');
    }
  })
});
