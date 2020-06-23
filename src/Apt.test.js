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
});