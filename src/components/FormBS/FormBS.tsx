import React, {useState} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import {IFormBS} from '../../interfaces';
//import classes from './formbs.module.scss';

const FormBS = ({addNote}: IFormBS) => {
	const [text, setText] = useState('');

	const submitHandler = (e: any) => {
		e.preventDefault();
		addNote(text);
		setText('');
	};

	return (
		<Form
			onSubmit={(e: any) => submitHandler(e)}
			inline
		>
			<FormControl
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setText(e.target.value);}}
				value={text}
				style={{marginRight: '10px'}}
			/>
			<Button type='submit'>
				Отправить
			</Button>
		</Form>
	);
};

export default FormBS;
