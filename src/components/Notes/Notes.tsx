import React from 'react';
import {INotes} from '../../interfaces';
//import classes from './loader.module.scss';

const Notes = ({data}: INotes) => {
	console.log(data);

	return (
		<ul>
			{data.map((note: string, index: number) => (
				<li key={index}>{note}</li>
			))}
		</ul>
	);
};

export default Notes;
