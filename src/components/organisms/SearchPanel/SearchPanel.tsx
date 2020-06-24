import React, { useState } from 'react';
import styles from './index.module.css';
import { SelectBox } from '../../molecules/SelectBox';

const dummydatas = [
	'Account',
	'Host',
	'Evironment',
	'Schedule',
	'InstanceId',
	'hogehogehogehogehogehogehoge',
];

const Component: React.FC = () => {
	const [value1, setVal1] = useState('');
	const [value2, setVal2] = useState('');
	return (
		<div className={styles.root}>
			<SelectBox
				columnNames={dummydatas}
				name={'dummy'}
				value={value1}
				className={'select_box_head'}
				onChange={(e) => {
					setVal1(e.target.value);
				}}
			/>
			<SelectBox
				columnNames={dummydatas}
				name={'dummy'}
				value={value2}
				className={'select_box_body'}
				onChange={(e) => {
					setVal2(e.target.value);
				}}
			/>
		</div>
	);
};

export default Component;
