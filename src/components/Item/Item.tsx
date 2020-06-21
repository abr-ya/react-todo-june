import React from 'react';
import {IItem} from '../../interfaces';
//import classes from './item.module.scss';

const Item = ({text}: IItem) => (
	<li>{text}</li>
);

export default Item;
