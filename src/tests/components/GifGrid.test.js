import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas del componente <GifGrid />', () => {
    
    const category = 'Miedo'
  
  test('should de mostrar el componente correctamete <GifGrid />', () => {

    useFetchGifs.mockReturnValue({
        data: [],
        loading: true
    });
    
    const wrapper = shallow( <GifGrid category={category}/>);
    expect( wrapper ).toMatchSnapshot();
    
  });

  test('should  de mostrar items cuando se cargan img useFetchGifs', () => {
    
    const gifs = [{
        id:'ABC',
        url: 'https://local.com',
        title: 'holaMundo'
    }]; 

    useFetchGifs.mockReturnValue({
        data: gifs,
        loading: false
    });

    const wrapper = shallow( <GifGrid category={category}/>);

   expect( wrapper.find('p').exists() ).toBe(false)
   expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )


  });
  
    
});
