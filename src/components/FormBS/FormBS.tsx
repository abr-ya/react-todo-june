import React from 'react'; // , {useState}
import {Form, FormControl, Button} from 'react-bootstrap';
import {IFormBS, IFormBSState} from '../../interfaces';
//import classes from './formbs.module.scss';

// функциональный вариант - прячу для тестов
// const FormBS = ({addNote}: IFormBS) => {
// 	const [text, setText] = useState('');

// 	const submitHandler = (e: any) => {
// 		e.preventDefault();
// 		addNote(text);
// 		setText('');
// 	};

// 	return (
// 		<Form
// 			onSubmit={(e: any) => submitHandler(e)}
// 			inline
// 		>
// 			<FormControl
// 				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setText(e.target.value);}}
// 				value={text}
// 				style={{marginRight: '10px'}}
// 			/>
// 			<Button type='submit'>
// 				Отправить
// 			</Button>
// 		</Form>
// 	);
// };

class FormBS extends React.Component<IFormBS, IFormBSState> {
	constructor(props: any) {
		super(props);
		this.state = {
			text: '',
		};
	}

	submitHandler = (e: any) => {
		e.preventDefault();
		this.props.addNote(this.state.text);
		this.setState({text: ''});
	}

	render() {
		return (
			<Form
				onSubmit={(e: any) => this.submitHandler(e)}
				inline
			>
				<FormControl
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {this.setState({text: e.target.value});}}
					value={this.state.text}
					style={{marginRight: '10px'}}
				/>
				<Button type='submit'>
					Отправить
				</Button>
			</Form>
		);
	}
}

// общий экспорт
export default FormBS;
