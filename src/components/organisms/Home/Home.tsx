import React from 'react';
import styles from './index.module.css';

import { TextField } from '../../atoms/TextField';

import { SelectedRegistration } from '../../../redux/modules/registration';
import Header from '../Header';
import Footer from '../Footer';

type Props = {
	count: number;
	name: string;
	registration: SelectedRegistration;
	handleIncrement: () => void;
	handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Home: React.FC<Props> = (props) => {
	const {
		count,
		name,
		handleIncrement,
		registration,
		handleFormChange,
	} = props;
	return (
		<div className={styles.root}>
			<Header />
			<div className={styles.main}>
				Welcome to Next.js!!! {name} and count is {count}
				<button onClick={handleIncrement}>increment</button>
				<br />
				<TextField
					name="username"
					value={registration.form.username}
					onChange={handleFormChange}
					placeholder="Input Username"
				/>
				<br />
				<TextField
					name="mailaddress"
					value={registration.form.mailaddress}
					onChange={handleFormChange}
					placeholder="Input Mail"
				/>
				<br />
				<TextField
					name="mailaddressConfirm"
					value={registration.form.mailaddressConfirm}
					onChange={handleFormChange}
					placeholder="Confirm Mail"
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
