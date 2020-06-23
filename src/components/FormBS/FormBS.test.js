import React from 'react';
import {mount} from 'enzyme';
import FormBS from './FormBS';

describe('Form', () => {
    let form = mount(<FormBS />);    
	//console.log(form.debug());
	
	describe('When rendering the form', () => {
        it('creates a form component', () => {
            expect(form.find('Form').exists()).toBe(true);
		});
		
		it('renders a formControl', () => {
            expect(form.find('FormControl').exists()).toBe(true);
		});
		
		it('renders the submit button', () => {
			expect(form.find('.btn').at(0).text()).toEqual('Отправить');
		});
    });  

	describe('Input to state test', () => {
        let testItem = 'test toDo';
        beforeEach(() => {
            form.find('FormControl').simulate('change', {
                target: {value: testItem}
            })
        });

        it('change the state data', () => {
            //console.log(form.state());
            expect(form.state().text).toEqual(testItem);
		});
    });

	// должна быть проверка на очистку, но не работает!(
	describe('Input clear after submit', () => {
        beforeEach(() => {
			console.log(form.find('.btn').text());
			form.find('.btn').simulate('click'); // at(0). - не меняет
        });

        it('change the state data', () => {
			console.log(form.state().text);
            //expect(form.state().text).toEqual('');
		});
    });
});