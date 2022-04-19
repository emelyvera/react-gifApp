import { getGifs } from "../../helpers/getGifs";


describe('Pruebas getGifs Fetch', () => {

  test('should traer solo 10 elementos', async() => {
    
    const gifs = await getGifs('One Puch');
    expect(gifs.length).toBe(10);

  });

  test('should si no le envio nada como parametro de la funcion', async() => {

    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);

  });
  
    
});
