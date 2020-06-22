import React from 'react';
import {INotes} from '../../interfaces';
//import classes from './loader.module.scss';
import Item from '../Item/Item';

const Notes = ({data}: INotes) => (
	<ul>
		{data.map((note: string, index: number) => (
			<Item text={note} key={index} />
		))}
	</ul>
);

export default Notes;
