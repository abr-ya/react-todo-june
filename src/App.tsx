import React, {useEffect, useState} from 'react';
import styles from './app.module.scss';
import {IApp} from './interfaces';
import {Button} from 'react-bootstrap';
import Loader from './components/Loader/Loader';
import Notes from './components/Notes/Notes';
import FormBS from './components/FormBS/FormBS';

const App = ({
	requestProductsSaga,
	loading,
	addToCart, delFromCart,
}: IApp) => {
	useEffect(() => {
		// запрос данных - пока отключаю
		// requestProductsSaga();
	// eslint-disable-next-line
	}, []);

	const lsKey = 'NOTES';

	const [data, setData] = useState<string[]>(JSON.parse(localStorage.getItem(lsKey) || '[]'));

	useEffect(() => {
		localStorage.setItem(lsKey, JSON.stringify(data));
	}, [data]);

	const mainClasses = [styles.app, 'container'];
	const leftClasses = [styles.left, 'col-md-8'];
	const rightClasses = [styles.right, 'col-md-4'];

	const handleAdd = (id: number) => {
		console.log('handleAdd', id);
		addToCart(id);
	};

	const handleRemove = (id: number) => {
		console.log('handleRemove', id);
		delFromCart(id);
	};

	const addNote = (text: string) => {
		setData([
			...data,
			text,
		]);
	};

	// const delNote = (id: number) => {
	// 	console.log('del', id);
	// 	setData([
	// 		...data,
	// 		text,
	// 	]);
	// };

	const clearNotes = () => {
		setData([]);
	};

	return (
		<div className={mainClasses.join(' ')}>
			<h1>React ToDo App (June version)</h1>
			<hr/>
				{loading
					? <Loader/>
					: (
					<div className='row'>
						<div className={leftClasses.join(' ')}>
							Главная панель
							<Notes data={data} />
						</div>
						<div className={rightClasses.join(' ')}>
							Боковая панель
							<FormBS addNote={addNote} />
							<div className='mt-3'>
								<Button onClick={clearNotes}>
									Clear ToDoes
								</Button>
							</div>
							<div className='mt-3'>
								<h3>Для теста Ридакс</h3>
								<Button onClick={() => handleAdd(1)} style={{marginRight: '10px'}}>
									Add to id1
								</Button>
								<Button onClick={() => handleRemove(1)}>
									Del id1
								</Button>
							</div>
						</div>
					</div>
					)
				}
		</div>
	);
};

export default App;
