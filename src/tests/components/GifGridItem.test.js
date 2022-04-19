import React from 'react';
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas del componente <GifGridItem />', () => {

  const title = 'Titulo';
  const url = 'https://local';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should mostrar el componente correctamente <GifGridItem />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should de tener un parrafo con el title', () => {

    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);

  });

  test('should tener una img igual al url y alt de los props', () => {

    const img = wrapper.find('img');
    // console.log( img.props() );
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);

  });

  test('should que el div tenga el animate__findeIn', () => {
    
    const div = wrapper.find('div');
    
    expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
  });
  
});

