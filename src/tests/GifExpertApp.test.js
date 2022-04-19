import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas del componente <GifExpertApp />', () => {
  
  test('should funcionar todo correctamente', () => {

    const wrapper = shallow( <GifExpertApp /> );
    expect( wrapper ).toMatchSnapshot();

  });

  test('should de mostar una lista de ctaegorias', () => {
    const category = ['One Punch', 'Batman'];
    const wrapper = shallow( <GifExpertApp defaultCategories= {category} /> );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length ).toBe( category.length );
    
  });
  
    


});
