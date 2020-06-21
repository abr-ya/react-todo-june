import React from 'react';
import {mount} from 'enzyme';
import Item from './Item';

const props = { item: { text: 'test_note' } };

describe('Item', () => {
	let item = mount(<Item {...props.item} />);

	it('renders the note text', () => {
	  expect(item.find('li').text()).toEqual(props.item.text);
	});
});
