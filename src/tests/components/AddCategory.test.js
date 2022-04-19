import React from 'react';
import { AddCategory } from '../../components/AddCategory';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
;



describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should de mostrarse coreectamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should de cambiar la caja de texto handleInputChange', () => {

        const input = wrapper.find('input');
        const value = 'HolaMundo'
        input.simulate('change', { target: { value } } );

        expect( wrapper.find('p').text().trim() ).toBe(value);
    });

    test('NO should de postear la informacion con submit handleSubmit', () => {
      
      wrapper.find('form').simulate('submit', { preventDefault(){} })  ;
      expect( setCategories ).not.toHaveBeenCalled();

    });

    test('should llamar la funcion setcategories y limpiar la caj de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'HolaMundo'
        input.simulate('change', { target: { value } } ); 

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( input.prop('value').trim() ).toBe('');
        
    });
    
    


});
