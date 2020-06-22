import React from 'react';
import {mount} from 'enzyme';
import App from './App';

describe('App', () => {
    let app = mount(<App />);    
    //console.log(app.debug());

	it('renders the app title', () => {
        
	    expect(app.find('h1').text()).toEqual('React ToDo App (June version)');
    });
    
    it('renders the clear button', () => {
	    expect(app.find('.btn').at(1).text()).toEqual('Clear ToDoes');
    });
    
    describe('When rendering the form', () => {
        it('creates a form component', () => {
            expect(app.find('Form').exists()).toBe(true);
		});
		
		it('renders a formControl', () => {
            expect(app.find('FormControl').exists()).toBe(true);
		});
		
		it('renders the submit button', () => {
			expect(app.find('.btn').at(0).text()).toEqual('Отправить');
		});
    });
});