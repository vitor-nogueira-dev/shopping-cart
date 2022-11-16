import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('Teste se fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function')
  });

  it('Verificando se fetchProductList() recebendo o parâmetro computador foi chamada com a URL correta', async () => {
    await fetchProductsList('computador')
    expect(fetch).toHaveBeenCalled()
  });

  it('Verificando se fetchProductList(computador) recebendo o parâmetro computador foi chamada com a URL correta', async () => {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?q=computador`
    await fetchProductsList('computador')
    expect(fetch).toHaveBeenCalledWith(URL)
  });

  it('Testando se o retorno da função fetchProductList(computador) é um objeto igual ao importado de computadorSearch', async () => {
    expect(await fetchProductsList('computador')).toBe(computadorSearch);
  })
  it('Testando se a função sem parâmetro retorna um erro com a mensagem: Termo de busca não informado', async () => {
    await expect(fetchProductsList()).rejects.toThrow();
  })
});
